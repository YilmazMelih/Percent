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

export function buildPath(config, nodeVals) {
    const computedPoints = { ...config.points };

    config.nodes.forEach((node) => {
        node.affects.forEach((affect) => {
            computedPoints[affect.point] = affect.formula(
                computedPoints[affect.point],
                nodeVals[node.id],
            );
        });
    });

    return config.basePath
        .map((seg) => {
            if (seg.cmd === "Z") return "Z";
            const coords = seg.points
                .map((p) => {
                    return `${computedPoints[p].x} ${computedPoints[p].y}`;
                })
                .join(" ");
            return `${seg.cmd} ${coords}`;
        })
        .join(" ");
}

export function buildNodes(config, nodeVals) {
    return config.nodes.map((node) => {
        return (
            <Node
                key={node.id}
                x={node.pos.x}
                y={node.pos.y}
                nodeVal={nodeVals[node.id]}
                r={node.r}
            />
        );
    });
}
