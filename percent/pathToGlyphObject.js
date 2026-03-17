export function parsePath(d) {
    const tokens = [];
    const re = /([a-zA-Z])|(-?\d*\.?\d+)/g;
    let m;
    while ((m = re.exec(d)) !== null) tokens.push(m[0]);

    let i = 0;
    const next = () => tokens[i++];

    let cx = 0,
        cy = 0;
    let subx = 0,
        suby = 0;
    let lastC2x = null,
        lastC2y = null;
    let prevCmd = null;

    const out = [];

    function readNumber() {
        return parseFloat(next());
    }

    while (i < tokens.length) {
        let cmd = next();
        let isRel = cmd === cmd.toLowerCase();
        switch (cmd.toLowerCase()) {
            case "m": {
                const x = readNumber();
                const y = readNumber();
                cx = isRel ? cx + x : x;
                cy = isRel ? cy + y : y;
                subx = cx;
                suby = cy;
                out.push({ cmd: "M", points: [{ x: cx, y: cy }] });
                lastC2x = lastC2y = null;
                prevCmd = "M";
                break;
            }
            case "h": {
                const dx = readNumber();
                const x = isRel ? cx + dx : dx;
                cx = x;
                out.push({ cmd: "L", points: [{ x: cx, y: cy }] });
                lastC2x = lastC2y = null;
                prevCmd = "L";
                break;
            }
            case "l": {
                const x = readNumber();
                const y = readNumber();
                cx = isRel ? cx + x : x;
                cy = isRel ? cy + y : y;
                out.push({ cmd: "L", points: [{ x: cx, y: cy }] });
                lastC2x = lastC2y = null;
                prevCmd = "L";
                break;
            }
            case "c": {
                while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i])) {
                    const x1 = readNumber();
                    const y1 = readNumber();
                    const x2 = readNumber();
                    const y2 = readNumber();
                    const x = readNumber();
                    const y = readNumber();
                    const ax1 = isRel ? cx + x1 : x1;
                    const ay1 = isRel ? cy + y1 : y1;
                    const ax2 = isRel ? cx + x2 : x2;
                    const ay2 = isRel ? cy + y2 : y2;
                    const ax = isRel ? cx + x : x;
                    const ay = isRel ? cy + y : y;
                    out.push({
                        cmd: "C",
                        points: [
                            { x: ax1, y: ay1 },
                            { x: ax2, y: ay2 },
                            { x: ax, y: ay },
                        ],
                    });
                    cx = ax;
                    cy = ay;
                    lastC2x = ax2;
                    lastC2y = ay2;
                }
                prevCmd = "C";
                break;
            }
            case "s": {
                const x2 = readNumber();
                const y2 = readNumber();
                const x = readNumber();
                const y = readNumber();
                let ax1, ay1;
                if (prevCmd === "C" || prevCmd === "S") {
                    ax1 = 2 * cx - lastC2x;
                    ay1 = 2 * cy - lastC2y;
                } else {
                    ax1 = cx;
                    ay1 = cy;
                }
                const ax2 = isRel ? cx + x2 : x2;
                const ay2 = isRel ? cy + y2 : y2;
                const ax = isRel ? cx + x : x;
                const ay = isRel ? cy + y : y;
                out.push({
                    cmd: "C",
                    points: [
                        { x: ax1, y: ay1 },
                        { x: ax2, y: ay2 },
                        { x: ax, y: ay },
                    ],
                });
                cx = ax;
                cy = ay;
                lastC2x = ax2;
                lastC2y = ay2;
                prevCmd = "S";
                break;
            }
            case "z": {
                cx = subx;
                cy = suby;
                out.push({ cmd: "Z", points: [] });
                lastC2x = lastC2y = null;
                prevCmd = "Z";
                break;
            }
            default:
                // ignore unsupported for now
                prevCmd = cmd;
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
            basePath.push({ cmd: seg.cmd, points: pointNames });
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

export function shiftPointsToAnchorY(pointsObj, pointName, targetY) {
    const anchor = pointsObj?.[pointName];
    if (!anchor) return pointsObj;
    const dy = targetY - anchor.y;
    const out = {};
    for (const [name, p] of Object.entries(pointsObj)) {
        out[name] = { x: p.x, y: +(p.y + dy).toFixed(2) };
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
        return `        { cmd: "${seg.cmd}", points: [${pts}] },`;
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
