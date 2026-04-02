import { makeCopyDeltaFromInterpolation } from "../../project";

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
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.leftOuter,
                            { ...oConfig.points.leftOuter, x: -57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "leftInner",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.leftInner,
                            { ...oConfig.points.leftInner, x: -57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.topLeftOCP,
                            { ...oConfig.points.topLeftOCP, x: -57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomLeftOCP,
                            { ...oConfig.points.bottomLeftOCP, x: -57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.topLeftICP,
                            { ...oConfig.points.topLeftICP, x: -57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomLeftICP,
                            { ...oConfig.points.bottomLeftICP, x: -57.975 },
                            0,
                        )(base, val),
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
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.rightOuter,
                            { ...oConfig.points.rightOuter, x: 57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "rightInner",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.rightInner,
                            { ...oConfig.points.rightInner, x: 57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.topRightOCP,
                            { ...oConfig.points.topRightOCP, x: 57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomRightOCP,
                            { ...oConfig.points.bottomRightOCP, x: 57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "topRightICP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.topRightICP,
                            { ...oConfig.points.topRightICP, x: 57.975 },
                            0,
                        )(base, val),
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomRightICP,
                            { ...oConfig.points.bottomRightICP, x: 57.975 },
                            0,
                        )(base, val),
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
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topOuter,
                            { ...oConfig.points.topOuter, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "topInner",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topInner,
                            { ...oConfig.points.topInner, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topRightOCP,
                            { ...oConfig.points.topRightOCP, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topLeftOCP,
                            { ...oConfig.points.topLeftOCP, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topRightICP,
                            { ...oConfig.points.topRightICP, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.topLeftICP,
                            { ...oConfig.points.topLeftICP, y: 139.31 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
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
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomOuter,
                            { ...oConfig.points.bottomOuter, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "bottomInner",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomInner,
                            { ...oConfig.points.bottomInner, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomRightOCP,
                            { ...oConfig.points.bottomRightOCP, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomLeftOCP,
                            { ...oConfig.points.bottomLeftOCP, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomRightICP,
                            { ...oConfig.points.bottomRightICP, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            oConfig.points.bottomLeftICP,
                            { ...oConfig.points.bottomLeftICP, y: 255.76 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
    ],
};
