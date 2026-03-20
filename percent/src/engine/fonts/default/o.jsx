import { interpolateFromBase } from "../../project";

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
        leftOuter: { x: -74.475, y: 197.285 },
        rightOuter: { x: 74.475, y: 197.285 },
        topOuter: { x: 0, y: 122.81 },
        bottomOuter: { x: 0, y: 271.76 },
        leftInner: { x: -41.475, y: 197.285 },
        rightInner: { x: 41.475, y: 197.285 },
        topInner: { x: 0, y: 155.81 },
        bottomInner: { x: 0, y: 238.76 },
        bottomLeftOCP: { x: -74.475, y: 271.76 },
        bottomRightOCP: { x: 74.475, y: 271.76 },
        topLeftOCP: { x: -74.475, y: 122.81 },
        topRightOCP: { x: 74.475, y: 122.81 },
        bottomLeftICP: { x: -41.475, y: 238.76 },
        bottomRightICP: { x: 41.475, y: 238.76 },
        topLeftICP: { x: -41.475, y: 155.81 },
        topRightICP: { x: 41.475, y: 155.81 },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 0.7,
            r: 16.5,
            pos: { x: -57.975, y: 197.285 },
            affects: [
                {
                    point: "leftOuter",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "leftInner",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: -57.975, y: base.y }, 0);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 0.7,
            r: 16.5,
            pos: { x: 57.975, y: 197.285 },
            affects: [
                {
                    point: "rightOuter",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "rightInner",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: 57.975, y: base.y }, 0);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 0.4,
            r: 16.5,
            pos: { x: 0, y: 139.31 },
            affects: [
                {
                    point: "topOuter",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
                {
                    point: "topInner",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 139.31 }, 0);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "bottom",
            default: 0.4,
            r: 16.5,
            pos: { x: 0, y: 255.76 },
            affects: [
                {
                    point: "bottomOuter",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
                {
                    point: "bottomInner",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return interpolateFromBase(val, base, { x: base.x, y: 255.76 }, 0);
                    },
                },
            ],
        },
    ],
};
