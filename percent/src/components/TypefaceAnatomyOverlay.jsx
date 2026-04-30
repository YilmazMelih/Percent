import { useEffect, useLayoutEffect, useState } from "react";
import "./TypefaceAnatomyOverlay.css";

const IMAGE_WIDTH = 1099;
const IMAGE_HEIGHT = 649;
const IMAGE_ASPECT = IMAGE_WIDTH / IMAGE_HEIGHT;
const VIEWPORT_MARGIN = 20;
// Ratio of the speech-bubble notch center inside TypefaceAnatomy.svg.
// Keep this close to the left edge so the notch can track the bottom-left
// book icon without being shifted by viewport clamping.
const NOTCH_X_RATIO = 0.05;
const NOTCH_Y_RATIO = 1;

export default function TypefaceAnatomyOverlay({ open, anchorRef, onClose }) {
    const [layout, setLayout] = useState({ left: 0, top: 0, width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!open) return;

        const updateLayout = () => {
            const anchor = anchorRef?.current;
            if (!anchor) return;
            const rect = anchor.getBoundingClientRect();
            const anchorCenterX = rect.left + rect.width / 2;
            const anchorCenterY = rect.top + rect.height / 2;

            const maxWidth = Math.min(window.innerWidth * 0.78, 980);
            const minWidth = Math.min(window.innerWidth - VIEWPORT_MARGIN * 2, 420);
            const baseWidth = Math.max(320, Math.min(maxWidth, minWidth));
            // User requested a much larger bubble: ~2.5x prior size.
            const width = Math.min(
                window.innerWidth - VIEWPORT_MARGIN * 2,
                Math.max(320, baseWidth * 2.5),
            );
            const height = width / IMAGE_ASPECT;

            const notchX = width * NOTCH_X_RATIO;
            const notchY = height * NOTCH_Y_RATIO;

            let left = anchorCenterX - notchX;
            let top = anchorCenterY - notchY;

            // Preserve notch-to-button horizontal alignment as the priority.
            // Only clamp to the right edge to avoid cropping the card there;
            // allow slight left overflow if needed so the notch stays centered
            // on the book button.
            left = Math.min(left, window.innerWidth - width - VIEWPORT_MARGIN);
            top = Math.min(
                Math.max(top, VIEWPORT_MARGIN),
                window.innerHeight - height - VIEWPORT_MARGIN,
            );

            setLayout({ left, top, width, height });
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        window.addEventListener("scroll", updateLayout, true);
        return () => {
            window.removeEventListener("resize", updateLayout);
            window.removeEventListener("scroll", updateLayout, true);
        };
    }, [open, anchorRef]);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") onClose?.();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="type-anatomy-overlay" onMouseDown={onClose} role="presentation">
            <div
                className="type-anatomy-overlay__panel"
                onMouseDown={(event) => event.stopPropagation()}
                style={{
                    left: `${layout.left}px`,
                    top: `${layout.top}px`,
                    width: `${layout.width}px`,
                    height: `${layout.height}px`,
                }}
            >
                <img
                    src="/TypefaceAnatomy.png"
                    alt="Typeface anatomy reference"
                    className="type-anatomy-overlay__image"
                    draggable={false}
                />
            </div>
        </div>
    );
}
