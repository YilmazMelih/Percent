import Node from "./Node";

// Takes path data string from getCharD() and returns:
// - endpoints: all segment end points (lines and curve endpoints)
// - controlPoints: all control points for Bezier curves
export function extractPathPoints(d) {
    const endpoints = [];
    const controlPoints = [];

    // Tokenize commands and numbers
    const tokens = [];
    const regex = /([MLHVCSQTAZmlhvcsqtaz])|(-?\d*\.?\d+(?:e[-+]?\d+)?)/g;
    let match;
    while ((match = regex.exec(d)) !== null) {
        tokens.push(match[0]);
    }

    let i = 0;
    let currentX = 0;
    let currentY = 0;

    function readNumber() {
        return parseFloat(tokens[i++]);
    }

    while (i < tokens.length) {
        const cmd = tokens[i++];

        switch (cmd) {
            case "M": {
                const x = readNumber();
                const y = readNumber();
                currentX = x;
                currentY = y;
                endpoints.push({ x, y });
                break;
            }

            case "L": {
                const x = readNumber();
                const y = readNumber();
                currentX = x;
                currentY = y;
                endpoints.push({ x, y });
                break;
            }

            case "H": {
                const x = readNumber();
                currentX = x;
                endpoints.push({ x: currentX, y: currentY });
                break;
            }

            case "V": {
                const y = readNumber();
                currentY = y;
                endpoints.push({ x: currentX, y: currentY });
                break;
            }

            case "C": {
                // Cubic Bezier: (x1,y1) (x2,y2) (x,y)
                const x1 = readNumber();
                const y1 = readNumber();
                const x2 = readNumber();
                const y2 = readNumber();
                const x = readNumber();
                const y = readNumber();

                controlPoints.push({ x: x1, y: y1 }, { x: x2, y: y2 });
                endpoints.push({ x, y });

                currentX = x;
                currentY = y;
                break;
            }

            case "Q": {
                // Quadratic Bezier: (x1,y1) (x,y)
                const x1 = readNumber();
                const y1 = readNumber();
                const x = readNumber();
                const y = readNumber();

                controlPoints.push({ x: x1, y: y1 });
                endpoints.push({ x, y });

                currentX = x;
                currentY = y;
                break;
            }

            case "Z":
            case "z": {
                // Close path: no new endpoints/control points added here
                break;
            }
            default: {
                break;
            }
        }
    }

    return { endpoints, controlPoints };
}

function makeSvgPathElement(d) {
    if (typeof document === "undefined" || !d) return null;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    return path;
}

function closestLengthOnPath(path, x, y, coarseSamples = 200, refineWindow = 2, predicate = null) {
    const total = path.getTotalLength();
    if (!Number.isFinite(total) || total <= 0) return null;

    let bestLen = 0;
    let bestDist2 = Infinity;

    const accept = (p) => (predicate ? predicate(p) : true);

    // Coarse pass.
    for (let i = 0; i <= coarseSamples; i++) {
        const len = (total * i) / coarseSamples;
        const p = path.getPointAtLength(len);
        if (!accept(p)) continue;
        const dx = p.x - x;
        const dy = p.y - y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < bestDist2) {
            bestDist2 = dist2;
            bestLen = len;
        }
    }

    if (!Number.isFinite(bestDist2)) return null;

    // Local refinement around current best.
    let step = total / coarseSamples;
    for (let pass = 0; pass < 6; pass++) {
        const start = Math.max(0, bestLen - refineWindow * step);
        const end = Math.min(total, bestLen + refineWindow * step);
        const samples = 20;
        for (let i = 0; i <= samples; i++) {
            const len = start + ((end - start) * i) / samples;
            const p = path.getPointAtLength(len);
            if (!accept(p)) continue;
            const dx = p.x - x;
            const dy = p.y - y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < bestDist2) {
                bestDist2 = dist2;
                bestLen = len;
            }
        }
        step /= 2;
    }

    return { length: bestLen, distance2: bestDist2 };
}

function normalize(vx, vy) {
    const mag = Math.hypot(vx, vy);
    if (!mag) return { x: 0, y: 0 };
    return { x: vx / mag, y: vy / mag };
}

function isPointInPathFill(path, x, y) {
    if (!path?.isPointInFill) return false;
    try {
        if (typeof DOMPoint !== "undefined") return path.isPointInFill(new DOMPoint(x, y));
    } catch {
        // Fall through to object-like test below.
    }
    try {
        return path.isPointInFill({ x, y });
    } catch {
        return false;
    }
}

function inwardNormalAtBoundaryPoint(boundaryPath, point) {
    const total = boundaryPath.getTotalLength();
    if (!Number.isFinite(total) || total <= 0) return { x: 0, y: 0 };

    const hit = closestLengthOnPath(boundaryPath, point.x, point.y, 240, 2);
    if (!hit) return { x: 0, y: 0 };

    const l = hit.length;
    const delta = Math.max(0.5, total / 2000);
    const l0 = Math.max(0, l - delta);
    const l1 = Math.min(total, l + delta);
    const p0 = boundaryPath.getPointAtLength(l0);
    const p1 = boundaryPath.getPointAtLength(l1);
    const tangent = normalize(p1.x - p0.x, p1.y - p0.y);
    if (!tangent.x && !tangent.y) return { x: 0, y: 0 };

    // Two candidate normals.
    const nA = { x: -tangent.y, y: tangent.x };
    const nB = { x: tangent.y, y: -tangent.x };

    const p = boundaryPath.getPointAtLength(l);
    const eps = Math.max(0.5, total / 1000);
    const aInside = isPointInPathFill(boundaryPath, p.x + nA.x * eps, p.y + nA.y * eps);
    const bInside = isPointInPathFill(boundaryPath, p.x + nB.x * eps, p.y + nB.y * eps);

    if (aInside && !bInside) return nA;
    if (bInside && !aInside) return nB;

    // Ambiguous fallback: choose normal pointing toward path bbox center.
    const bb = boundaryPath.getBBox();
    const cx = bb.x + bb.width / 2;
    const cy = bb.y + bb.height / 2;
    const toCenter = normalize(cx - p.x, cy - p.y);
    const dotA = nA.x * toCenter.x + nA.y * toCenter.y;
    const dotB = nB.x * toCenter.x + nB.y * toCenter.y;
    return dotA >= dotB ? nA : nB;
}

// Returns the closest point on an SVG path to (x, y).
// Uses path sampling in browser via SVGPathElement geometry APIs.
export function findClosestPointOnPath(point, d, coarseSamples = 200, refineWindow = 2) {
    const { x, y } = point;
    const path = makeSvgPathElement(d);
    if (!path) return null;

    const hit = closestLengthOnPath(path, x, y, coarseSamples, refineWindow);
    if (!hit) return null;

    const closest = path.getPointAtLength(hit.length);
    return { x: closest.x, y: closest.y, length: hit.length, distance: Math.sqrt(hit.distance2) };
}

// Finds the closest point on the skeleton path that moves a glyph-boundary point inward.
// point: P1 on glyph path, skeletonD: SP, glyphD: GP
export function findClosestPointOnPathTowardFill(
    point,
    skeletonD,
    glyphD,
    coarseSamples = 240,
    refineWindow = 2,
) {
    const { x, y } = point ?? {};
    const skeletonPath = makeSvgPathElement(skeletonD);
    const glyphPath = makeSvgPathElement(glyphD);
    if (!skeletonPath || !glyphPath || !Number.isFinite(x) || !Number.isFinite(y)) return null;

    const inward = inwardNormalAtBoundaryPoint(glyphPath, { x, y });
    const hasInward = Math.hypot(inward.x, inward.y) > 0;

    const predicate = hasInward
        ? (p) => {
              const vx = p.x - x;
              const vy = p.y - y;
              return vx * inward.x + vy * inward.y > 0;
          }
        : null;

    // Prefer inward candidates; fallback to unconstrained closest if none.
    const inwardHit = closestLengthOnPath(
        skeletonPath,
        x,
        y,
        coarseSamples,
        refineWindow,
        predicate,
    );
    const hit =
        inwardHit ?? closestLengthOnPath(skeletonPath, x, y, coarseSamples, refineWindow, null);
    if (!hit) return null;

    const closest = skeletonPath.getPointAtLength(hit.length);
    return {
        x: closest.x,
        y: closest.y,
        length: hit.length,
        distance: Math.sqrt(hit.distance2),
        inwardNormal: inward,
        usedInwardConstraint: Boolean(inwardHit),
    };
}

// Finds a point on SP that lies in the inward direction from P1.
// Unlike closest-point matching, this prioritizes directional alignment
// with the inward ray toward the glyph fill (F).
export function findPointOnPathInwardDirection(point, skeletonD, glyphD, samples = 2000) {
    const { x, y } = point ?? {};
    const skeletonPath = makeSvgPathElement(skeletonD);
    const glyphPath = makeSvgPathElement(glyphD);
    if (!skeletonPath || !glyphPath || !Number.isFinite(x) || !Number.isFinite(y)) return null;

    const inward = inwardNormalAtBoundaryPoint(glyphPath, { x, y });
    if (!inward || (!inward.x && !inward.y)) return null;

    const total = skeletonPath.getTotalLength();
    if (!Number.isFinite(total) || total <= 0) return null;

    let best = null;
    let bestScore = Infinity;
    const eps = 1e-6;

    // Score by perpendicular distance to inward ray, then by forward distance.
    for (let i = 0; i <= samples; i++) {
        const len = (total * i) / samples;
        const p = skeletonPath.getPointAtLength(len);
        const vx = p.x - x;
        const vy = p.y - y;
        const forward = vx * inward.x + vy * inward.y;
        if (forward <= 0) continue; // only keep points in inward half-space

        const cross = Math.abs(vx * inward.y - vy * inward.x); // perp distance * |inward|
        const score = cross + 0.001 * forward; // prefer near the ray, then nearer along it
        if (score + eps < bestScore) {
            bestScore = score;
            best = { x: p.x, y: p.y, length: len, forward, perpendicular: cross };
        }
    }

    if (!best) return null;
    return {
        x: best.x,
        y: best.y,
        length: best.length,
        inwardNormal: inward,
        forward: best.forward,
        perpendicular: best.perpendicular,
    };
}

export function buildPath(config, nodeVals, nodeX, nodeY, guideLines) {
    const computedPoints = computeGlyphPoints(config, nodeVals, nodeX, nodeY, guideLines);

    return config.basePath
        .map((seg) => {
            if (seg.cmd === "Z") return "Z";
            const args = Array.isArray(seg.args) ? seg.args.join(" ") : "";
            const coords = seg.points
                .map((p) => {
                    return `${computedPoints[p].x} ${computedPoints[p].y}`;
                })
                .join(" ");
            return `${seg.cmd} ${args ? `${args} ` : ""}${coords}`;
        })
        .join(" ");
}

export function computeGlyphPoints(config, nodeVals, nodeX, nodeY, guideLines) {
    const computedPoints = { ...config.points };
    const defaultGuideLines = {
        ascender: 30.5,
        cap_height: 80.5,
        x_height: 136.25,
        baseline: 267.76,
        descender: 320,
    };
    for (const key in computedPoints) {
        const value = computedPoints[key];
        if (value && value.attach) {
            const r = value.ratio ?? 1;
            switch (value.attach) {
                case "asc":
                    computedPoints[key] = {
                        ...value,
                        y: value.y + guideLines.ascender * r - defaultGuideLines.ascender * r,
                    };
                    break;
                case "cap":
                    computedPoints[key] = {
                        ...value,
                        y: value.y + guideLines.cap_height * r - defaultGuideLines.cap_height * r,
                    };
                    break;
                case "xh":
                    computedPoints[key] = {
                        ...value,
                        y: value.y + guideLines.x_height * r - defaultGuideLines.x_height * r,
                    };
                    break;
                case "base":
                    computedPoints[key] = {
                        ...value,
                        y: value.y + guideLines.baseline * r - defaultGuideLines.baseline * r,
                    };
                    break;
                case "desc":
                    computedPoints[key] = {
                        ...value,
                        y: value.y + guideLines.descender * r - defaultGuideLines.descender * r,
                    };
                    break;
                default:
                    break;
            }
        }
    }

    config.nodes.forEach((node) => {
        node.affects.forEach((affect) => {
            const sizedPoint = affect.formula(computedPoints[affect.point], nodeVals[node.id]);
            const dx = nodeX?.[node.id] ?? 0;
            const dy = nodeY?.[node.id] ?? 0;
            computedPoints[affect.point] = {
                x: sizedPoint.x + dx,
                y: sizedPoint.y + dy,
            };
        });
    });

    return computedPoints;
}

/**
 * Horizontal extent of every named point in {@link config.points} after {@link computeGlyphPoints}
 * (node size “val” affects + per-node X/Y drags).
 *
 * @param {object} config - Glyph config with `points` and `nodes` (same as buildPath / CharFromConfig).
 * @param {number[]} nodeSize - Per-node slider values, indexed by `node.id` (e.g. same array as editor `nodeSize`).
 * @param {number[]} [nodeX] - Optional per-node X offsets indexed by `node.id`.
 * @param {number[]} [nodeY] - Optional per-node Y offsets indexed by `node.id`.
 * @returns {{ minX: number, maxX: number }} Min/max `x` over adjusted points; `(0, 0)` if nothing finite.
 */
export function getAdjustedGlyphBoundsX(config, nodeSize, nodeX, nodeY, guideLines) {
    const computedPoints = computeGlyphPoints(config, nodeSize, nodeX, nodeY, guideLines);
    const xs = Object.values(computedPoints)
        .map((p) => p.x)
        .filter((x) => Number.isFinite(x));
    if (xs.length === 0) return { minX: 0, maxX: 0 };
    return { minX: Math.min(...xs), maxX: Math.max(...xs) };
}

export function buildNodes(
    config,
    nodeVals,
    guideLines,
    nodeX,
    nodeY,
    setNodeSize,
    active,
    setActive,
    isDragging,
    setIsDragging,
    onRingPointerDown,
    onRingPointerUp,
) {
    const defaultGuideLines = {
        ascender: 30.5,
        cap_height: 80.5,
        x_height: 136.25,
        baseline: 267.76,
        descender: 320,
    };
    return config.nodes.map((node) => {
        const tx = nodeX?.[node.id] ?? 0;
        const ty = nodeY?.[node.id] ?? 0;
        let y = node.pos.y + ty;
        if (node.pos.attach) {
            const r = node.pos.ratio ?? 1;
            switch (node.pos.attach) {
                case "asc":
                    y = y + guideLines.ascender * r - defaultGuideLines.ascender * r;
                    break;
                case "cap":
                    y = y + guideLines.cap_height * r - defaultGuideLines.cap_height * r;
                    break;
                case "xh":
                    y = y + guideLines.x_height * r - defaultGuideLines.x_height * r;
                    break;
                case "base":
                    y = y + guideLines.baseline * r - defaultGuideLines.baseline * r;
                    break;
                case "desc":
                    y = y + guideLines.descender * r - defaultGuideLines.descender * r;
                    break;
                default:
                    break;
            }
        }
        return (
            <Node
                key={node.id}
                x={node.pos.x + tx}
                y={y}
                nodeVals={nodeVals}
                r={node.r}
                active={active}
                setActive={setActive}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
                id={node.id}
                setNodeSize={setNodeSize}
                onRingPointerDown={onRingPointerDown}
                onRingPointerUp={onRingPointerUp}
            />
        );
    });
}

export function interpolateFromBase(val, base, sec, ratio) {
    // f(1) = base, f(ratio) = sec, interpolate linearly
    const s = (val - 1) / (ratio - 1);

    return {
        x: base.x + s * (sec.x - base.x),
        y: base.y + s * (sec.y - base.y),
    };
}

export function pointBetween(p1, p2, t) {
    return {
        x: p1.x + (p2.x - p1.x) * t,
        y: p1.y + (p2.y - p1.y) * t,
    };
}

export function makeCopyDeltaFromInterpolation(sourceBase, sourceSec, ratio = 0) {
    const guideLines = {
        ascender: 30.5,
        cap_height: 80.5,
        x_height: 136.25,
        baseline: 267.76,
        descender: 320,
    };
    let baseY = sourceBase.y;
    if (sourceBase.attach) {
        const r = sourceBase.ratio ?? 1;
        switch (sourceBase.attach) {
            case "asc":
                baseY += guideLines.ascender * r;
                break;
            case "cap":
                baseY += guideLines.cap_height * r;
                break;
            case "xh":
                baseY += guideLines.x_height * r;
                break;
            case "base":
                baseY += guideLines.baseline * r;
                break;
            case "desc":
                baseY += guideLines.descender * r;
                break;
            default:
                break;
        }
    }
    let secY = sourceSec.y;
    if (sourceSec.attach) {
        const r = sourceSec.ratio ?? 1;
        switch (sourceSec.attach) {
            case "asc":
                secY += guideLines.ascender * r;
                break;
            case "cap":
                secY += guideLines.cap_height * r;
                break;
            case "xh":
                secY += guideLines.x_height * r;
                break;
            case "base":
                secY += guideLines.baseline * r;
                break;
            case "desc":
                secY += guideLines.descender * r;
                break;
            default:
                break;
        }
    }
    return (baseOther, val) => {
        const movedSource = interpolateFromBase(
            val,
            { x: sourceBase.x, y: baseY },
            { x: sourceSec.x, y: secY },
            ratio,
        );
        const dx = movedSource.x - sourceBase.x;
        const dy = movedSource.y - baseY;
        return { x: baseOther.x + dx, y: baseOther.y + dy };
    };
}
