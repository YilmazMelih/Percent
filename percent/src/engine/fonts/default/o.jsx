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
        leftOuter: { x: -101.25, y: 136.76 },
        rightOuter: { x: 101.25, y: 136.76 },
        topOuter: { x: 0, y: -101.25 + 136.76 },
        bottomOuter: { x: 0, y: 101.25 + 136.76 },
        leftInner: { x: -101.25, y: 136.76 },
        rightInner: { x: 101.25, y: 136.76 },
        topInner: { x: 0, y: -101.25 + 136.76 },
        bottomInner: { x: 0, y: 101.25 + 136.76 },
        bottomLeftOCP: { x: -101.25, y: 101.25 + 136.76 },
        bottomRightOCP: { x: 101.25, y: 101.25 + 136.76 },
        topLeftOCP: { x: -101.25, y: -101.25 + 136.76 },
        topRightOCP: { x: 101.25, y: -101.25 + 136.76 },
        bottomLeftICP: { x: -101.25, y: 101.25 + 136.76 },
        bottomRightICP: { x: 101.25, y: 101.25 + 136.76 },
        topLeftICP: { x: -101.25, y: -101.25 + 136.76 },
        topRightICP: { x: 101.25, y: -101.25 + 136.76 },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 0.7,
            r: 33.75,
            pos: { x: -101.25, y: 0 },
            affects: [
                {
                    point: "leftOuter",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "leftInner",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 0.7,
            r: 33.75,
            pos: { x: 101.25, y: 0 },
            affects: [
                {
                    point: "rightOuter",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "rightInner",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 33.75 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 0.4,
            r: 33.75,
            pos: { x: 0, y: -101.25 },
            affects: [
                {
                    point: "topOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
                {
                    point: "topInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
            ],
        },
        {
            id: "3",
            name: "bottom",
            default: 0.4,
            r: 33.75,
            pos: { x: 0, y: 101.25 },
            affects: [
                {
                    point: "bottomOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
                {
                    point: "bottomInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 33.75 * val };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 33.75 * val };
                    },
                },
            ],
        },
    ],
};
