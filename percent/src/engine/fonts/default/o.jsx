export const oConfig = {
    basePath: [
        { cmd: "M", points: ["topOuter"] },
        { cmd: "Q", points: ["topLeftOCP", "leftOuter"] },
        { cmd: "Q", points: ["bottomLeftOCP", "bottomOuter"] },
        { cmd: "Q", points: ["bottomRightOCP", "rightOuter"] },
        { cmd: "Q", points: ["topRightOCP", "topOuter"] },
        { cmd: "Z" },
        { cmd: "M", points: ["topInner"] },
        { cmd: "Q", points: ["topRightICP", "rightInner"] },
        { cmd: "Q", points: ["bottomRightICP", "bottomInner"] },
        { cmd: "Q", points: ["bottomLeftICP", "leftInner"] },
        { cmd: "Q", points: ["topLeftICP", "topInner"] },
        { cmd: "Z" },
    ],
    //Need future change:
    //Either points need to be stored assuming
    // that node value is 1, or 0. For now, I'm gonna assume 0
    // since it'll make it easier to write the function.
    // Should try and find a way to assume 1 though.
    points: {
        leftOuter: { x: -18.75, y: 0 },
        rightOuter: { x: 18.75, y: 0 },
        topOuter: { x: 0, y: -18.75 },
        bottomOuter: { x: 0, y: 18.75 },
        leftInner: { x: -18.75, y: 0 },
        rightInner: { x: 18.75, y: 0 },
        topInner: { x: 0, y: -18.75 },
        bottomInner: { x: 0, y: 18.75 },
        bottomLeftOCP: { x: -18.75, y: 18.75 },
        bottomRightOCP: { x: 18.75, y: 18.75 },
        topLeftOCP: { x: -18.75, y: -18.75 },
        topRightOCP: { x: 18.75, y: -18.75 },
        bottomLeftICP: { x: -18.75, y: 18.75 },
        bottomRightICP: { x: 18.75, y: 18.75 },
        topLeftICP: { x: -18.75, y: -18.75 },
        topRightICP: { x: 18.75, y: -18.75 },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 0.7,
            pos: { x: -18.75, y: 0 },
            affects: [
                {
                    point: "leftOuter",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "leftInner",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 0.7,
            pos: { x: 18.75, y: 0 },
            affects: [
                {
                    point: "rightOuter",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "rightInner",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 0.4,
            pos: { x: 0, y: -18.75 },
            affects: [
                {
                    point: "topOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
            ],
        },
        {
            id: "3",
            name: "bottom",
            default: 0.4,
            pos: { x: 0, y: 18.75 },
            affects: [
                {
                    point: "bottomOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
            ],
        },
    ],
};
