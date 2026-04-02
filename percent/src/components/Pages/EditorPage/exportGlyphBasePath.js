import { computeGlyphPoints } from "../../../engine/project";
import opentype from "opentype.js";

export function exportGlyphBasePaths(glyphData, glyphKeys, guideLines) {
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
    console.log(guideLines.descender, guideLines.baseline);
    const font = new opentype.Font({
        familyName: "Test Font",
        styleName: "Regular",
        unitsPerEm: 250, //TBD
        ascender: guideLines.ascender, //TBD
        descender: guideLines.baseline - guideLines.descender, //TBD
        glyphs: [notdefGlyph, ...openTypeGlyphs],
    });

    const buffer = font.toArrayBuffer();

    const blob = new Blob([buffer], { type: "font/opentype" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "out.otf";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
