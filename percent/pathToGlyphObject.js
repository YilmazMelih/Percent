export function parsePath(d) {
    const tokens = [];
    const re = /([AaCcHhLlMmQqSsTtVvZz])|([+-]?(?:\d*\.\d+|\d+)(?:[eE][+-]?\d+)?)/g;
    let m;
    while ((m = re.exec(d)) !== null) tokens.push(m[0]);

    let i = 0;
    let currentCmd = null;
    let cx = 0;
    let cy = 0;
    let subx = 0;
    let suby = 0;
    let lastC2x = null;
    let lastC2y = null;
    let lastQ1x = null;
    let lastQ1y = null;
    let prevCmdUpper = null;
    const out = [];

    const isCommand = (t) => /^[A-Za-z]$/.test(t);
    const hasNumber = () => i < tokens.length && !isCommand(tokens[i]);
    const readNumber = () => parseFloat(tokens[i++]);

    while (i < tokens.length) {
        if (isCommand(tokens[i])) currentCmd = tokens[i++];
        if (!currentCmd) break;

        const isRel = currentCmd === currentCmd.toLowerCase();
        const cmd = currentCmd.toUpperCase();

        if (cmd === "Z") {
            cx = subx;
            cy = suby;
            out.push({ cmd: "Z", points: [] });
            lastC2x = lastC2y = lastQ1x = lastQ1y = null;
            prevCmdUpper = "Z";
            continue;
        }

        if (cmd === "M") {
            if (!hasNumber()) continue;
            let x = readNumber();
            let y = readNumber();
            x = isRel ? cx + x : x;
            y = isRel ? cy + y : y;
            cx = x;
            cy = y;
            subx = x;
            suby = y;
            out.push({ cmd: "M", points: [{ x, y }] });
            lastC2x = lastC2y = lastQ1x = lastQ1y = null;
            prevCmdUpper = "M";
            while (hasNumber()) {
                let lx = readNumber();
                let ly = readNumber();
                lx = isRel ? cx + lx : lx;
                ly = isRel ? cy + ly : ly;
                cx = lx;
                cy = ly;
                out.push({ cmd: "L", points: [{ x: lx, y: ly }] });
                prevCmdUpper = "L";
            }
            continue;
        }

        if (cmd === "L") {
            while (hasNumber()) {
                let x = readNumber();
                let y = readNumber();
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                cx = x;
                cy = y;
                out.push({ cmd: "L", points: [{ x, y }] });
                prevCmdUpper = "L";
            }
            lastC2x = lastC2y = lastQ1x = lastQ1y = null;
            continue;
        }

        if (cmd === "H") {
            while (hasNumber()) {
                let x = readNumber();
                x = isRel ? cx + x : x;
                cx = x;
                out.push({ cmd: "L", points: [{ x: cx, y: cy }] });
                prevCmdUpper = "L";
            }
            lastC2x = lastC2y = lastQ1x = lastQ1y = null;
            continue;
        }

        if (cmd === "V") {
            while (hasNumber()) {
                let y = readNumber();
                y = isRel ? cy + y : y;
                cy = y;
                out.push({ cmd: "L", points: [{ x: cx, y: cy }] });
                prevCmdUpper = "L";
            }
            lastC2x = lastC2y = lastQ1x = lastQ1y = null;
            continue;
        }

        if (cmd === "C") {
            while (hasNumber()) {
                let x1 = readNumber();
                let y1 = readNumber();
                let x2 = readNumber();
                let y2 = readNumber();
                let x = readNumber();
                let y = readNumber();
                x1 = isRel ? cx + x1 : x1;
                y1 = isRel ? cy + y1 : y1;
                x2 = isRel ? cx + x2 : x2;
                y2 = isRel ? cy + y2 : y2;
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                out.push({ cmd: "C", points: [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x, y }] });
                cx = x;
                cy = y;
                lastC2x = x2;
                lastC2y = y2;
                lastQ1x = lastQ1y = null;
                prevCmdUpper = "C";
            }
            continue;
        }

        if (cmd === "S") {
            while (hasNumber()) {
                const rx1 = prevCmdUpper === "C" || prevCmdUpper === "S" ? 2 * cx - lastC2x : cx;
                const ry1 = prevCmdUpper === "C" || prevCmdUpper === "S" ? 2 * cy - lastC2y : cy;
                let x2 = readNumber();
                let y2 = readNumber();
                let x = readNumber();
                let y = readNumber();
                x2 = isRel ? cx + x2 : x2;
                y2 = isRel ? cy + y2 : y2;
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                out.push({ cmd: "C", points: [{ x: rx1, y: ry1 }, { x: x2, y: y2 }, { x, y }] });
                cx = x;
                cy = y;
                lastC2x = x2;
                lastC2y = y2;
                lastQ1x = lastQ1y = null;
                prevCmdUpper = "S";
            }
            continue;
        }

        if (cmd === "Q") {
            while (hasNumber()) {
                let x1 = readNumber();
                let y1 = readNumber();
                let x = readNumber();
                let y = readNumber();
                x1 = isRel ? cx + x1 : x1;
                y1 = isRel ? cy + y1 : y1;
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                out.push({ cmd: "Q", points: [{ x: x1, y: y1 }, { x, y }] });
                cx = x;
                cy = y;
                lastQ1x = x1;
                lastQ1y = y1;
                lastC2x = lastC2y = null;
                prevCmdUpper = "Q";
            }
            continue;
        }

        if (cmd === "T") {
            while (hasNumber()) {
                const rx1 = prevCmdUpper === "Q" || prevCmdUpper === "T" ? 2 * cx - lastQ1x : cx;
                const ry1 = prevCmdUpper === "Q" || prevCmdUpper === "T" ? 2 * cy - lastQ1y : cy;
                let x = readNumber();
                let y = readNumber();
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                out.push({ cmd: "Q", points: [{ x: rx1, y: ry1 }, { x, y }] });
                cx = x;
                cy = y;
                lastQ1x = rx1;
                lastQ1y = ry1;
                lastC2x = lastC2y = null;
                prevCmdUpper = "T";
            }
            continue;
        }

        if (cmd === "A") {
            while (hasNumber()) {
                const rx = readNumber();
                const ry = readNumber();
                const angle = readNumber();
                const largeArcFlag = readNumber();
                const sweepFlag = readNumber();
                let x = readNumber();
                let y = readNumber();
                x = isRel ? cx + x : x;
                y = isRel ? cy + y : y;
                out.push({
                    cmd: "A",
                    args: [rx, ry, angle, largeArcFlag, sweepFlag],
                    points: [{ x, y }],
                });
                cx = x;
                cy = y;
                lastC2x = lastC2y = lastQ1x = lastQ1y = null;
                prevCmdUpper = "A";
            }
            continue;
        }
    }

    return out;
}

export function buildBasePathAndPoints(segments) {
    const points = {};
    const basePath = [];
    let counter = 1;

    function getPointName(pt) {
        const key = `${pt.x.toFixed(2)},${pt.y.toFixed(2)}`;
        if (points[key]) return points[key].name;
        const name = `point${counter++}`;
        points[key] = { name, x: +pt.x.toFixed(2), y: +pt.y.toFixed(2) };
        return name;
    }

    segments.forEach((seg) => {
        if (seg.cmd === "Z") {
            basePath.push({ cmd: "Z" });
        } else {
            const pointNames = seg.points.map((p) => getPointName(p));
            const nextSeg = { cmd: seg.cmd, points: pointNames };
            if (Array.isArray(seg.args)) nextSeg.args = [...seg.args];
            basePath.push(nextSeg);
        }
    });

    const pointsObj = {};
    Object.values(points).forEach((p) => {
        pointsObj[p.name] = { x: p.x, y: p.y };
    });

    return { basePath, points: pointsObj };
}

export function centerPointsAroundX0(pointsObj) {
    const vals = Object.values(pointsObj);
    if (vals.length === 0) return pointsObj;
    let minX = Infinity;
    let maxX = -Infinity;
    for (const p of vals) {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
    }
    const cx = (minX + maxX) / 2;
    const out = {};
    for (const [name, p] of Object.entries(pointsObj)) {
        out[name] = { x: +(p.x - cx).toFixed(2), y: p.y };
    }
    return out;
}

export function shiftPointsToBaseline(pointsObj, baselineY) {
    const vals = Object.values(pointsObj);
    if (vals.length === 0) return pointsObj;
    let maxY = -Infinity;
    for (const p of vals) {
        if (p.y > maxY) maxY = p.y; // lowest point in SVG coords
    }
    const dy = baselineY - maxY;
    const out = {};
    for (const [name, p] of Object.entries(pointsObj)) {
        out[name] = { x: p.x, y: +(p.y + dy).toFixed(2) };
    }
    return out;
}

export function shiftPointsToAnchor(pointsObj, pointName, targetX = null, targetY = null) {
    const anchor = pointsObj?.[pointName];
    if (!anchor) return pointsObj;
    const dx = targetX === null ? 0 : targetX - anchor.x;
    const dy = targetY === null ? 0 : targetY - anchor.y;
    const out = {};
    for (const [name, p] of Object.entries(pointsObj)) {
        out[name] = { x: +(p.x + dx).toFixed(2), y: +(p.y + dy).toFixed(2) };
    }
    return out;
}

function parseArgs(argv) {
    const args = { baseline: null, d: null };
    for (const a of argv) {
        if (a.startsWith("--baseline=")) {
            const raw = a.slice("--baseline=".length);
            const n = parseFloat(raw);
            if (!Number.isNaN(n)) args.baseline = n;
        } else if (!a.startsWith("--") && args.d === null) {
            args.d = a;
        }
    }
    return args;
}

export function convertPathToGlyphObject(d, { baseline = null } = {}) {
    const segments = parsePath(d);
    const result = buildBasePathAndPoints(segments);
    let points = centerPointsAroundX0(result.points);
    if (baseline !== null) points = shiftPointsToBaseline(points, baseline);
    return { basePath: result.basePath, points };
}

function pointSortKey(name) {
    const m = /^point(\d+)$/.exec(name);
    return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

export function formatGlyphObjectJS({ basePath, points }) {
    const baseLines = basePath.map((seg) => {
        if (seg.cmd === "Z") return `        { cmd: "Z" },`;
        const pts = seg.points.map((p) => `"${p}"`).join(", ");
        const args = Array.isArray(seg.args) ? `, args: [${seg.args.join(", ")}]` : "";
        return `        { cmd: "${seg.cmd}"${args}, points: [${pts}] },`;
    });

    const pointNames = Object.keys(points).sort((a, b) => pointSortKey(a) - pointSortKey(b));
    const pointLines = pointNames.map((name) => {
        const p = points[name];
        return `        ${name}: { x: ${p.x}, y: ${p.y} },`;
    });

    return [
        "{",
        "    basePath: [",
        ...baseLines,
        "    ],",
        "    points: {",
        ...pointLines,
        "    },",
        "}",
    ].join("\n");
}

function toInt2(n) {
    return Math.round(n * 100);
}

function fromInt2(n) {
    return n / 100;
}

export function inferTranslationFromPoints(d, transformedPointsObj) {
    const original = convertPathToGlyphObject(d, { baseline: null });
    const originalVals = Object.values(original.points);
    const transformedVals = Object.values(transformedPointsObj ?? {});

    if (originalVals.length === 0 || transformedVals.length === 0) return null;

    function bbox(vals) {
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        for (const p of vals) {
            if (p.x < minX) minX = p.x;
            if (p.x > maxX) maxX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.y > maxY) maxY = p.y;
        }
        return { minX, maxX, minY, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
    }

    // Primary: infer translation via bounding-box center shift (robust and fast).
    const bo = bbox(originalVals);
    const bt = bbox(transformedVals);
    const dx = +(bt.cx - bo.cx).toFixed(2);
    const dy = +(bt.cy - bo.cy).toFixed(2);

    // Secondary: estimate how many points agree with this translation (sanity signal).
    const dxI = toInt2(dx);
    const dyI = toInt2(dy);
    const oSet = new Set(originalVals.map((p) => `${toInt2(p.x)},${toInt2(p.y)}`));
    let matches = 0;
    for (const tp of transformedVals) {
        const key = `${toInt2(tp.x) - dxI},${toInt2(tp.y) - dyI}`;
        if (oSet.has(key)) matches++;
    }

    return { dx, dy, matches };
}

export function applyInferredTransformToPoint(fromPoint, toPoint, point) {
    if (!fromPoint || !toPoint || !point) return null;
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    return { x: +(point.x + dx).toFixed(2), y: +(point.y + dy).toFixed(2) };
}

function parseCircleAttrs(tag) {
    const attrs = {};
    const re = /(\w[\w:-]*)\s*=\s*"([^"]*)"/g;
    let m;
    while ((m = re.exec(tag)) !== null) {
        attrs[m[1]] = m[2];
    }
    return attrs;
}

export function generateNodesFromCircles(fromPoint, toPoint, circlesSvgString) {
    const svg = circlesSvgString ?? "";
    const circleTags = svg.match(/<circle\b[^>]*\/?>/g) ?? [];

    return circleTags.map((tag, i) => {
        const attrs = parseCircleAttrs(tag);
        const cx = parseFloat(attrs.cx);
        const cy = parseFloat(attrs.cy);
        const r = parseFloat(attrs.r);

        const pos = applyInferredTransformToPoint(fromPoint, toPoint, { x: cx, y: cy });

        return {
            id: String(i),
            name: `node${i + 1}`,
            default: 1,
            r: Number.isFinite(r) ? r : 0,
            pos: pos ?? { x: 0, y: 0 },
            affects: [],
        };
    });
}
