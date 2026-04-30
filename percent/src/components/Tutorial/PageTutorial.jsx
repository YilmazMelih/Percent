import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { EVENTS, Joyride, STATUS } from "react-joyride";
import TutorialTooltip from "./TutorialTooltip";

/**
 * Reusable per-page Joyride wrapper.
 *
 * Behavior:
 *   - On mount, reads `localStorage[storageKey]`. If the user has never
 *     completed/skipped the tour for this page, the tour auto-starts.
 *   - On finish/skip, writes the storage flag so refreshes don't replay.
 *   - Parent can imperatively replay via the forwarded ref:
 *         tutorialRef.current?.restart()
 *
 * Joyride v3 specifics (see https://react-joyride.com/docs):
 *   - Uses `onEvent` (replaces v2's `callback`).
 *   - Interaction behavior (overlay click, ESC, X button) is configured via
 *     the `options` prop, not top-level props.
 *   - `skipBeacon` globally disables beacons across all steps.
 */
const PageTutorial = forwardRef(function PageTutorial({ storageKey, steps }, ref) {
    const [run, setRun] = useState(false);

    // Auto-start on first visit (per-page localStorage flag).
    useEffect(() => {
        if (typeof window === "undefined") return undefined;
        try {
            if (window.localStorage.getItem(storageKey) === "true") return undefined;
        } catch {
            return undefined;
        }
        // Defer briefly so any target elements have mounted before Joyride
        // tries to position step popovers.
        const timer = window.setTimeout(() => setRun(true), 200);
        return () => window.clearTimeout(timer);
    }, [storageKey]);

    useImperativeHandle(
        ref,
        () => ({
            restart: () => {
                setRun(false);
                window.setTimeout(() => setRun(true), 50);
            },
        }),
        [],
    );

    const persistAndStop = () => {
        try {
            window.localStorage.setItem(storageKey, "true");
        } catch {
            // ignore quota/serialization issues
        }
        setRun(false);
    };

    const handleEvent = (data) => {
        const { status, type } = data;
        // Persist completion in either of the equivalent v3 signals: the
        // overall tour status flipping to FINISHED/SKIPPED, or the explicit
        // tour:end event firing.
        if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
            persistAndStop();
            return;
        }
        if (type === EVENTS.TOUR_END) {
            persistAndStop();
        }
    };

    return (
        <Joyride
            steps={steps ?? []}
            run={run}
            continuous
            onEvent={handleEvent}
            tooltipComponent={TutorialTooltip}
            options={{
                showProgress: true,
                skipBeacon: true,
                // Don't render the default close (X) button — our custom
                // tooltip uses Skip + Next exclusively.
                buttons: ["back", "primary"],
                // ESC and overlay clicks should not advance/close the step.
                dismissKeyAction: false,
                overlayClickAction: false,
                skipScroll: true,
            }}
        />
    );
});

export default PageTutorial;
