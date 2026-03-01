import opentype from "opentype.js";
import fontURL from "../../../assets/fonts/GoogleSans-Regular.ttf";
import ReactDOMServer from "react-dom/server";

export async function openFont() {
    const res = await fetch(fontURL);
    const buffer = await res.arrayBuffer();
    const font = await opentype.parse(buffer);
    // console.log(font)
    return font;
}

export async function getCharToD(ch) {
    const font = await openFont();
    const path = font.charToGlyph(ch).getPath();
    return path.toPathData();
}

export async function getCharToSVGPathEl(ch) {
    const font = await openFont();
    const path = font.charToGlyph(ch).getPath();
    const { x1, y1, x2, y2 } = path.getBoundingBox();
    const margin = 5;
    const el = (
        <svg
            height="100"
            width="100"
            viewBox={`${x1 - margin} ${y1 - margin} ${x2 - x1 + 2 * margin} ${y2 - y1 + 2 * margin}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                style={{ fill: "lightgray", stroke: "black", strokeWidth: "1" }}
                d={path.toPathData()}
            />
        </svg>
    );
    // console.log(ReactDOMServer.renderToString(el));
    return el;
}
