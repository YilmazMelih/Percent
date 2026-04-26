import { computeGlyphPoints } from "../../../engine/project";
import opentype from "opentype.js";

export function buildOpenTypeFont(glyphData, glyphKeys, guideLines, familyName = "Test Font") {
    const notdefGlyph = new opentype.Glyph({
        name: ".notdef",
        advanceWidth: 200, //to change?
        path: new opentype.Path(),
    });
    const openTypeGlyphs = glyphKeys.map((key) => {
        const savedGlyph = glyphData[key];
        const { config, nodeSize, nodeX, nodeY } = savedGlyph;
        const prePoints = computeGlyphPoints(config, nodeSize, nodeX, nodeY, guideLines);
        const defaultLSB = 20;
        const defaultRSB = 20;
        const xMin = Math.min(...Object.values(prePoints).map((pt) => pt.x));
        const xMax = Math.max(...Object.values(prePoints).map((pt) => pt.x));
        const points = Object.fromEntries(
            Object.entries(prePoints).map(([key, pt]) => [
                key,
                { x: pt.x - xMin + (config.lsb ?? defaultLSB), y: guideLines.baseline - pt.y },
            ]),
        );
        const curPath = new opentype.Path();
        for (const seg of config.basePath) {
            const cmd = seg.cmd;
            //Access a point: points[seg.points[i]].x, .y
            switch (cmd) {
                case "M":
                    curPath.moveTo(points[seg.points[0]].x, points[seg.points[0]].y);
                    break;
                case "L":
                    curPath.lineTo(points[seg.points[0]].x, points[seg.points[0]].y);
                    break;
                case "Q":
                    curPath.quadTo(
                        points[seg.points[0]].x,
                        points[seg.points[0]].y,
                        points[seg.points[1]].x,
                        points[seg.points[1]].y,
                    );
                    break;
                case "C":
                    curPath.curveTo(
                        points[seg.points[0]].x,
                        points[seg.points[0]].y,
                        points[seg.points[1]].x,
                        points[seg.points[1]].y,
                        points[seg.points[2]].x,
                        points[seg.points[2]].y,
                    );
                    break;
                case "Z":
                    curPath.close();
                    break;
                default:
                    console.warn(`Unknown command: ${cmd}`);
                    break;
            }
        }
        const GL = new opentype.Glyph({
            name: key,
            unicode: config.unicode,
            advanceWidth: xMax - xMin + (config.rsb ?? defaultRSB) + (config.lsb ?? defaultLSB), //TBD??
            path: curPath,
        });
        return GL;
    });
    return new opentype.Font({
        familyName,
        styleName: "Regular",
        unitsPerEm: 250, //TBD
        ascender: guideLines.baseline - guideLines.ascender, //TBD
        descender: guideLines.baseline - guideLines.descender, //TBD
        glyphs: [notdefGlyph, ...openTypeGlyphs],
    });
}

export function buildFontArrayBuffer(glyphData, glyphKeys, guideLines, familyName = "Test Font") {
    const font = buildOpenTypeFont(glyphData, glyphKeys, guideLines, familyName);
    return font.toArrayBuffer();
}

export function exportGlyphBasePaths(glyphData, glyphKeys, guideLines, filename, format) {
    const safeFilename = (filename || "out").trim() || "out";
    const font = buildOpenTypeFont(glyphData, glyphKeys, guideLines, safeFilename);
    const buffer = font.toArrayBuffer();

    const normalizedFormat = (format || "otf").toLowerCase();
    const extension = normalizedFormat === "ttf" ? "ttf" : "otf";
    const mimeType = extension === "ttf" ? "font/ttf" : "font/opentype";
    const blob = new Blob([buffer], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${safeFilename}.${extension}`;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
