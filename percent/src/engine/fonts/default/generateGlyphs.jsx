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
    const [baseline, x_height, cap_height, ascender, descender] = [
        0, -36.275, -51.552, -51.552, 15.552,
    ];
    const { x1, y1, x2, y2 } = path.getBoundingBox();
    const margin = 5;
    const el = (
        <svg
            height="250"
            width="250"
            viewBox={`${x1 - margin} ${ascender - margin} ${x2 - x1 + 2 * margin} ${descender - ascender + 2 * margin}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                style={{ fill: "lightgray", stroke: "black", strokeWidth: "1" }}
                d={path.toPathData()}
            />
            <line
                x1="-100"
                y1={baseline}
                x2="100"
                y2={baseline}
                stroke="lightgray"
                strokeWidth="0.25"
            />
            <line
                x1="-100"
                y1={x_height}
                x2="100"
                y2={x_height}
                stroke="lightgray"
                strokeWidth="0.25"
            />
            <line
                x1="-100"
                y1={cap_height}
                x2="100"
                y2={cap_height}
                stroke="lightgray"
                strokeWidth="0.25"
            />
            <line
                x1="-100"
                y1={descender}
                x2="100"
                y2={descender}
                stroke="lightgray"
                strokeWidth="0.25"
            />
            {(() => {
                const { controlPoints, endpoints } = extractPathPoints(path.toPathData());
                return (
                    <>
                        {controlPoints.map((point, i) => (
                            <circle
                                key={`${i}_controlP`}
                                r={0.5}
                                cx={point.x}
                                cy={point.y}
                                fill="red"
                            />
                        ))}
                        {endpoints.map((point, i) => (
                            <circle
                                key={`${i}_endpoint`}
                                r={1}
                                cx={point.x}
                                cy={point.y}
                                fill="blue"
                            />
                        ))}
                    </>
                );
            })()}
        </svg>
    );
    // console.log(ReactDOMServer.renderToString(el));
    return el;
}

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
