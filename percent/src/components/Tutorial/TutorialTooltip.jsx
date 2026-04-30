import "./PageTutorial.css";

/**
 * Custom Joyride tooltip rendered for every step of every page tutorial.
 *
 * Visual contract:
 *   - Top-left aligned title where each wrapped line has its own #beff00 pill
 *     behind black text (achieved with `box-decoration-break: clone`).
 *   - Optional `step.video` URL renders an autoplaying, looping, muted <video>
 *     above the body content.
 *   - Footer: "Skip" (left, gray), "Step X of Y" (center), "Next" (right, purple).
 *     The X close button is intentionally omitted — Skip handles dismissal.
 *
 * Step API (extends Joyride's Step):
 *   {
 *     title?: ReactNode | string,   // wrapped in #beff00 pill(s)
 *     content: ReactNode | string,
 *     video?: string,               // public-relative URL, e.g. "/tutorialVideos/Foo.mp4"
 *     ...other Joyride step fields
 *   }
 */
export default function TutorialTooltip(props) {
    const { index, size, primaryProps, skipProps, step, tooltipProps } = props;

    return (
        <div className="tutorial-tooltip" {...tooltipProps}>
            {step.title && (
                <h4 className="tutorial-tooltip__title">
                    <span className="tutorial-tooltip__title-text">{step.title}</span>
                </h4>
            )}

            {step.video && (
                <video
                    key={step.video}
                    className="tutorial-tooltip__video"
                    src={step.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}

            <div className="tutorial-tooltip__content">{step.content}</div>

            <div className="tutorial-tooltip__footer">
                <button type="button" className="tutorial-tooltip__skip" {...skipProps}>
                    Skip
                </button>
                <span className="tutorial-tooltip__progress">
                    Step {index + 1} of {size}
                </span>
                <button type="button" className="tutorial-tooltip__primary" {...primaryProps}>
                    Next
                </button>
            </div>
        </div>
    );
}
