import React from "react";
import GlyphPreview from "./GlyphPreview";

const FontPreviewRenderer = ({
    text,
    glyphData,
    fontSize,
    letterSpacing,
    lineHeight,
    guideLines,
}) => {
    const containerStyle = {
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}`,
        wordBreak: "break-word",
    };

    return (
        <div style={containerStyle}>
            {text.split("").map((char, index) => {
                if (glyphData && glyphData[char]) {
                    return (
                        <div
                            key={index}
                            style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginRight: `${letterSpacing}px`,
                                height: `${fontSize}px`,
                            }}
                        >
                            <GlyphPreview
                                guideLines={guideLines}
                                config={glyphData[char].config}
                                nodeSize={glyphData[char].nodeSize}
                                showNodes={false}
                                width={fontSize}
                                height={fontSize}
                            />
                        </div>
                    );
                } else {
                    return (
                        <span
                            key={index}
                            style={{ marginRight: `${letterSpacing}px`, verticalAlign: "middle" }}
                        >
                            {char}
                        </span>
                    );
                }
            })}
        </div>
    );
};

export default FontPreviewRenderer;
