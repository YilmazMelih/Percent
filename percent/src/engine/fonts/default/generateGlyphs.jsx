import opentype from "opentype.js";
import fontURL from "../../../assets/fonts/GoogleSans-Regular.ttf";
import ReactDOMServer from "react-dom/server";

//Creates opentype Font object by opening hardcoded font
export async function openFont() {
    const res = await fetch(fontURL);
    const buffer = await res.arrayBuffer();
    const font = await opentype.parse(buffer);
    return font;
}

//Given a char input, returns the boundary box
export async function getCharBB(ch) {
    const font = await openFont();
    const path = font.charToGlyph(ch).getPath();
    return path.getBoundingBox();
}

//Given a char input, returns the parsed d component from the path of the corresponding glyph as a string
export async function getCharD(ch) {
    const font = await openFont();
    const path = font.charToGlyph(ch).getPath();
    let d = path.toPathData();
    d = d
        .replace(/([MLHVCSQTAZmlhvcsqtaz])/g, "\n$1 ") // newline + command + space
        .replace(/-/g, " -") // space before negative numbers
        .trim();
    return d;
}
//Given a char input, returns a React svg path element
//Currently has hardcoded margin and styling
export async function getCharSVGPathEl(ch) {
    const font = await openFont();
    const path = font.charToGlyph(ch).getPath();
    const { x1, y1, x2, y2 } = path.getBoundingBox();
    const margin = 5;
    const el = (
        <svg
            height="250"
            width="250"
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
