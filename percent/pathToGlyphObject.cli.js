import { convertPathToGlyphObject, formatGlyphObjectJS } from "./pathToGlyphObject.js";

function parseArgs(argv) {
    const args = { baseline: null, d: null, js: false };
    for (const a of argv) {
        if (a.startsWith("--baseline=")) {
            const raw = a.slice("--baseline=".length);
            const n = parseFloat(raw);
            if (!Number.isNaN(n)) args.baseline = n;
        } else if (a === "--js") {
            args.js = true;
        } else if (!a.startsWith("--") && args.d === null) {
            args.d = a;
        }
    }
    return args;
}

const { d, baseline, js } = parseArgs(process.argv.slice(2));
if (!d) {
    console.error(
        'Usage: node percent/pathToGlyphObject.cli.js "<path d string>" [--baseline=267.76] [--js]',
    );
    process.exit(1);
}

const glyph = convertPathToGlyphObject(d, { baseline });
if (js) {
    console.log(formatGlyphObjectJS(glyph));
} else {
    console.log(JSON.stringify(glyph, null, 2));
}

