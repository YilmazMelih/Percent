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

// Returns the closest point on an SVG path to (x, y).
// Uses path sampling in browser via SVGPathElement geometry APIs.
export function findClosestPointOnPath(point, d, coarseSamples = 200, refineWindow = 2) {
    const { x, y } = point;
    if (typeof document === "undefined" || !d) return null;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);

    const total = path.getTotalLength();
    if (!Number.isFinite(total) || total <= 0) return null;

    let bestLen = 0;
    let bestDist2 = Infinity;

    // Coarse pass to find an approximate closest length.
    for (let i = 0; i <= coarseSamples; i++) {
        const len = (total * i) / coarseSamples;
        const p = path.getPointAtLength(len);
        const dx = p.x - x;
        const dy = p.y - y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < bestDist2) {
            bestDist2 = dist2;
            bestLen = len;
        }
    }

    // Local refinement around the best coarse sample.
    let step = total / coarseSamples;
    for (let pass = 0; pass < 6; pass++) {
        const start = Math.max(0, bestLen - refineWindow * step);
        const end = Math.min(total, bestLen + refineWindow * step);
        const samples = 20;
        for (let i = 0; i <= samples; i++) {
            const len = start + ((end - start) * i) / samples;
            const p = path.getPointAtLength(len);
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

    const closest = path.getPointAtLength(bestLen);
    return { x: closest.x, y: closest.y, length: bestLen, distance: Math.sqrt(bestDist2) };
}

export function buildPath(config, nodeVals, nodeX, nodeY) {
    const computedPoints = { ...config.points };

    config.nodes.forEach((node) => {
        node.affects.forEach((affect) => {
            const basePoint = computedPoints[affect.point];
            const sizedPoint = affect.formula(computedPoints[affect.point], nodeVals[node.id]);
            const dx = nodeX?.[node.id] ?? 0;
            const dy = nodeY?.[node.id] ?? 0;
            computedPoints[affect.point] = {
                x: sizedPoint.x + dx,
                y: sizedPoint.y + dy,
            };
        });
    });

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

export function buildNodes(
    config,
    nodeVals,
    nodeX,
    nodeY,
    setNodeSize,
    active,
    setActive,
    isDragging,
    setIsDragging,
) {
    return config.nodes.map((node) => {
        const tx = nodeX?.[node.id] ?? 0;
        const ty = nodeY?.[node.id] ?? 0;
        return (
            <Node
                key={node.id}
                x={node.pos.x + tx}
                y={node.pos.y + ty}
                nodeVals={nodeVals}
                r={node.r}
                active={active}
                setActive={setActive}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
                id={node.id}
                setNodeSize={setNodeSize}
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
    return (baseOther, val) => {
        const movedSource = interpolateFromBase(val, sourceBase, sourceSec, ratio);
        const dx = movedSource.x - sourceBase.x;
        const dy = movedSource.y - sourceBase.y;
        return { x: baseOther.x + dx, y: baseOther.y + dy };
    };
}
