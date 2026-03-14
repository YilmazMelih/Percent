export const nConfig = {
    basePath: [
        { cmd: "M", points: ["stemBottomLeft"] },
        { cmd: "L", points: ["stemTopLeft"] },
        { cmd: "L", points: ["stemTopRight"] },
        { cmd: "L", points: ["stemBottomRight"] },
        { cmd: "L", points: ["stemBottomLeft"] },
        { cmd: "Z" },
        { cmd: "M", points: ["archStartLeft"] },
        { cmd: "Q", points: ["topLeftCP", "archMiddleTop"] },
        { cmd: "Q", points: ["topRightCP", "archEndRight"] },
        { cmd: "L", points: ["bottomRightStem"] },
        { cmd: "L", points: ["bottomLeftStem"] },
        { cmd: "L", points: ["archStartRight"] },
        { cmd: "Q", points: ["bottomRightCP", "archMiddleBottom"] },
        { cmd: "Q", points: ["bottomLeftCP", "archEndLeft"] },
        { cmd: "L", points: ["archStartLeft"] },
        { cmd: "Z" },
    ],
    //Need future change:
    //Either points need to be stored assuming
    // that node value is 1, or 0. For now, I'm gonna assume 0
    // since it'll make it easier to write the function.
    // Should try and find a way to assume 1 though.
    points: {
        stemBottomLeft: { x: -94.5, y: 135 },
        stemTopLeft: { x: -94.5, y: -108 },
        stemBottomRight: { x: -94.5, y: 135 },
        stemTopRight: { x: -94.5, y: -108 },
        archStartLeft: { x: -94.5, y: -81 },
        archMiddleTop: { x: 0, y: -108 },
        archEndRight: { x: 94.5, y: -27 },
        bottomRightStem: { x: 94.5, y: 135 },
        bottomLeftStem: { x: 94.5, y: 135 },
        archStartRight: { x: 94.5, y: -54 },
        archMiddleBottom: { x: 0, y: -108 },
        archEndLeft: { x: -94.5, y: -54 },
        topLeftCP: { x: -81, y: -108 },
        topRightCP: { x: 94.5, y: -108 },
        bottomLeftCP: { x: -94.5, y: -108 },
        bottomRightCP: { x: 94.5, y: -108 },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 40.5,
            pos: { x: -94.5, y: 0 },
            affects: [
                {
                    point: "stemBottomLeft",
                    formula: (base, val) => {
                        return { x: base.x - 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "stemTopLeft",
                    formula: (base, val) => {
                        return { x: base.x - 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "stemBottomRight",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "stemTopRight",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "archStartLeft",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "archEndLeft",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftCP",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftCP",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 40.5,
            pos: { x: 94.5, y: 0 },
            affects: [
                {
                    point: "bottomRightStem",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftStem",
                    formula: (base, val) => {
                        return { x: base.x - 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "archStartRight",
                    formula: (base, val) => {
                        return { x: base.x - 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "archEndRight",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightCP",
                    formula: (base, val) => {
                        return { x: base.x - 40.5 * val, y: base.y };
                    },
                },
                {
                    point: "topRightCP",
                    formula: (base, val) => {
                        return { x: base.x + 40.5 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 1,
            r: 27,
            pos: { x: 0, y: -108 },
            affects: [
                {
                    point: "stemTopLeft",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "stemTopRight",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "archMiddleTop",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "topLeftCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "topRightCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "archEndRight",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "archStartLeft",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 27 * val };
                    },
                },
                {
                    point: "archEndLeft",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 27 * val };
                    },
                },
                {
                    point: "bottomLeftCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 27 * val };
                    },
                },
                {
                    point: "bottomRightCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 27 * val };
                    },
                },
                {
                    point: "archStartRight",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 27 * val };
                    },
                },
                {
                    point: "archMiddleBottom",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 27 * val };
                    },
                },
            ],
        },
    ],
};
