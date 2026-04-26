import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect, useMemo } from "react";
import "./Export.css";
import { exportGlyphBasePaths, buildFontArrayBuffer } from "../EditorPage/exportGlyphBasePath";
import { initialConfigs } from "../EditorPage/Editor";
import PreviewToolbar from "./PreviewToolbar";

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const GUIDELINES_STORAGE_KEY = "editor:guideLines:v1";
const DEFAULT_GUIDELINES = {
    ascender: 55.5,
    cap_height: 80.5,
    x_height: 131.38,
    baseline: 267.76,
    descender: 332.24,
};
const DISPLAY_FONT_FAMILY = "DisplayFont";

const ExportPage = forwardRef((props, ref) => {
    const [filename, setFilename] = useState("my-font");
    const [format, setFormat] = useState("otf");
    const [previewMode, setPreviewMode] = useState("single");
    const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog");
    const [previewFontSize, setPreviewFontSize] = useState(32);
    const exportButtonRef = useRef(null);

    const getHydratedExportPayload = () => {
        let glyphData = {};
        let guideLines = DEFAULT_GUIDELINES;
        try {
            const rawGlyphData = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
            const parsedGlyphData = rawGlyphData ? JSON.parse(rawGlyphData) : null;
            if (parsedGlyphData && typeof parsedGlyphData === "object") {
                glyphData = parsedGlyphData;
            }

            const rawGuideLines = window.localStorage.getItem(GUIDELINES_STORAGE_KEY);
            const parsedGuideLines = rawGuideLines ? JSON.parse(rawGuideLines) : null;
            if (parsedGuideLines && typeof parsedGuideLines === "object") {
                guideLines = parsedGuideLines;
            }
        } catch {
            // Fall back to defaults if local storage is unavailable or malformed.
        }

        const glyphKeys = Object.keys(initialConfigs);
        if (glyphKeys.length === 0) return null;
        const hydratedGlyphData = Object.fromEntries(
            glyphKeys.map((key) => {
                const storedGlyph = glyphData[key] || {};
                const config = initialConfigs[key];
                const nodeCount = Array.isArray(config?.nodes) ? config.nodes.length : 0;
                return [
                    key,
                    {
                        ...storedGlyph,
                        // Reattach source config to preserve function-based node formulas.
                        config,
                        nodeSize:
                            Array.isArray(storedGlyph.nodeSize) &&
                            storedGlyph.nodeSize.length === nodeCount
                                ? storedGlyph.nodeSize
                                : (config?.nodes ?? []).map((node) => node.default),
                        nodeX:
                            Array.isArray(storedGlyph.nodeX) && storedGlyph.nodeX.length === nodeCount
                                ? storedGlyph.nodeX
                                : new Array(nodeCount).fill(0),
                        nodeY:
                            Array.isArray(storedGlyph.nodeY) && storedGlyph.nodeY.length === nodeCount
                                ? storedGlyph.nodeY
                                : new Array(nodeCount).fill(0),
                    },
                ];
            }),
        );
        try {
            window.localStorage.setItem(GLYPH_STATE_STORAGE_KEY, JSON.stringify(hydratedGlyphData));
        } catch {
            // Ignore storage write failures (private mode/quota/etc).
        }
        return { hydratedGlyphData, glyphKeys, guideLines };
    };

    const previewFontFamily = useMemo(
        () => `'${DISPLAY_FONT_FAMILY}', Arial, sans-serif`,
        [],
    );

    const removeDisplayFont = () => {
        for (const font of document.fonts) {
            if (font.family.replace(/['"]/g, "") === DISPLAY_FONT_FAMILY) {
                document.fonts.delete(font);
            }
        }
    };

    useEffect(() => {
        let cancelled = false;

        const loadDisplayFont = async () => {
            const payload = getHydratedExportPayload();
            if (!payload) return;

            const { hydratedGlyphData, glyphKeys, guideLines } = payload;
            try {
                const buffer = buildFontArrayBuffer(
                    hydratedGlyphData,
                    glyphKeys,
                    guideLines,
                    DISPLAY_FONT_FAMILY,
                );
                removeDisplayFont();
                const fontFace = new FontFace(DISPLAY_FONT_FAMILY, buffer);
                await fontFace.load();
                if (cancelled) return;
                document.fonts.add(fontFace);
            } catch {
                // Ignore preview font loading failures and keep fallback font.
            }
        };

        loadDisplayFont();

        return () => {
            cancelled = true;
            removeDisplayFont();
        };
    }, []);

    const handleExport = () => {
        const payload = getHydratedExportPayload();
        if (!payload) return;
        const { hydratedGlyphData, glyphKeys, guideLines } = payload;
        exportGlyphBasePaths(hydratedGlyphData, glyphKeys, guideLines, filename, format);
    };

    useImperativeHandle(ref, () => ({
        triggerExport: () => {
            if (exportButtonRef.current) {
                exportButtonRef.current.click();
            }
        },
    }));

    const renderPreviewContent = () => {
        if (previewMode === "waterfall") {
            const waterfallSizes = [72, 48, 36, 24, 18, 14];
            return waterfallSizes.map((size) => (
                <div key={size} className="waterfall-item">
                    <p
                        className="preview-text"
                        style={{ fontSize: `${size}px`, fontFamily: previewFontFamily }}
                    >
                        {previewText}
                    </p>
                    <span className="waterfall-size-label">{size}px</span>
                </div>
            ));
        }
        return (
            <p
                className="preview-text"
                style={{ fontSize: `${previewFontSize}px`, fontFamily: previewFontFamily }}
            >
                {previewText}
            </p>
        );
    };

    return (
        <div className="export-container">
            <h1 className="export-title">Font Name</h1>
            <div className="input-row">
                <input
                    type="text"
                    id="filename"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="filename-input"
                />
                <div className="format-options">
                    <button
                        className={`format-button ${format === "otf" ? "active" : ""}`}
                        onClick={() => setFormat("otf")}
                    >
                        otf
                    </button>
                    <button
                        className={`format-button ${format === "ttf" ? "active" : ""}`}
                        onClick={() => setFormat("ttf")}
                    >
                        ttf
                    </button>
                </div>
            </div>

            <div className="preview-section">
                <h2 className="preview-title">Preview</h2>
                <PreviewToolbar
                    mode={previewMode}
                    setMode={setPreviewMode}
                    fontSize={previewFontSize}
                    setFontSize={setPreviewFontSize}
                    text={previewText}
                    setText={setPreviewText}
                />
                <div className="preview-box">{renderPreviewContent()}</div>
            </div>

            <div className="export-button-container">
                <button ref={exportButtonRef} onClick={handleExport} className="export-button">
                    {`Export ${filename}.${format}`}
                </button>
            </div>
        </div>
    );
});

export default ExportPage;
