import {
    makeCopyDeltaFromInterpolation,
    interpolateFromBase,
    findClosestPointOnPath,
    findClosestPointOnPathTowardFill,
    findPointOnPathInwardDirection,
} from "../../project";
import { glyphObjectToPath } from "../../../../pathToGlyphObject";
import { aConfig } from "./a";

const defaultAPath = glyphObjectToPath(aConfig);
const aSkeleton = `M -47.73 162.41 C -47.73 162.41 -39.08 133.35 -1.18 133.87 C 36.73 134.39 44.44 154.34 44.44 154.34 C 44.44 154.34 49.88 163.8 49.7 184.21 L 49.7 242.33 L 53.34 267.76 M 49.7 184.21 C 49.7 184.21 31.17 195.45 16.09 195.9 C -6.8 196.58 -29.5 199.89 -29.5 199.89 C -29.5 199.89 -56.59 205.09 -56.45 232.27 C -56.31 256.95 -29 264.99 -29 264.99 C -29 264.99 26.7 282.05 49.7 225.04`;

const points = {
    point1: {
        x: 87.57,
        y: 267.76,
    },
    point2: {
        x: 19.1,
        y: 267.76,
    },
    point3: {
        x: 16.94,
        y: 248.82,
    },
    point4: {
        x: 6.94,
        y: 264.79,
    },
    point5: {
        x: -24.19,
        y: 269.93,
    },
    point6: {
        x: -39.34,
        y: 272.64,
    },
    point7: {
        x: -86.36,
        y: 270.68,
    },
    point8: {
        x: -86.97,
        y: 236.37,
    },
    point9: {
        x: -87.58,
        y: 202.13,
    },
    point10: {
        x: -57.3,
        y: 190.37,
    },
    point11: {
        x: -27.71,
        y: 190.37,
    },
    point12: {
        x: -1.93,
        y: 190.37,
    },
    point13: {
        x: 8.28,
        y: 188.48,
    },
    point14: {
        x: 12.88,
        y: 180.63,
    },
    point15: {
        x: 14.77,
        y: 177.38,
    },
    point16: {
        x: 13.96,
        y: 171.43,
    },
    point17: {
        x: 10.71,
        y: 167.64,
    },
    point18: {
        x: 4.22,
        y: 160.06,
    },
    point19: {
        x: -15.54,
        y: 159.52,
    },
    point20: {
        x: -17.43,
        y: 178.46,
    },
    point21: {
        x: -78.86,
        y: 170.07,
    },
    point22: {
        x: -77.24,
        y: 154.92,
    },
    point23: {
        x: -68.31,
        y: 144.63,
    },
    point24: {
        x: -56.94,
        y: 138.41,
    },
    point25: {
        x: -19.05,
        y: 118.11,
    },
    point26: {
        x: 43.19,
        y: 127.59,
    },
    point27: {
        x: 56.72,
        y: 136.52,
    },
    point28: {
        x: 80.53,
        y: 152.76,
    },
    point29: {
        x: 80.8,
        y: 175.22,
    },
    point30: {
        x: 80.8,
        y: 207.69,
    },
    point31: {
        x: 79.72,
        y: 246.39,
    },
    point32: {
        x: 82.42,
        y: 252.61,
    },
    point34: {
        x: 14.51,
        y: 205.79,
    },
    point35: {
        x: 4.5,
        y: 212.56,
    },
    point36: {
        x: -14.99,
        y: 209.58,
    },
    point37: {
        x: -20.13,
        y: 218.51,
    },
    point38: {
        x: -27.44,
        y: 232.04,
    },
    point39: {
        x: -11.74,
        y: 243.68,
    },
    point40: {
        x: 5.58,
        y: 234.21,
    },
    point41: {
        x: 16.13,
        y: 228.26,
    },
    point42: {
        x: 14.51,
        y: 211.21,
    },
};

const skeletonEndpoints = {
    point1: findPointOnPathInwardDirection(points.point1, aSkeleton, defaultAPath),
    point2: findPointOnPathInwardDirection(points.point2, aSkeleton, defaultAPath),
    point3: findPointOnPathInwardDirection(points.point3, aSkeleton, defaultAPath),
    point4: findPointOnPathInwardDirection(points.point4, aSkeleton, defaultAPath),
    point5: findPointOnPathInwardDirection(points.point5, aSkeleton, defaultAPath),
    point6: findPointOnPathInwardDirection(points.point6, aSkeleton, defaultAPath),
    point7: findPointOnPathInwardDirection(points.point7, aSkeleton, defaultAPath),
    point8: findPointOnPathInwardDirection(points.point8, aSkeleton, defaultAPath),
    point9: findPointOnPathInwardDirection(points.point9, aSkeleton, defaultAPath),
    point10: findPointOnPathInwardDirection(points.point10, aSkeleton, defaultAPath),
    point11: findPointOnPathInwardDirection(points.point11, aSkeleton, defaultAPath),
    point12: findPointOnPathInwardDirection(points.point12, aSkeleton, defaultAPath),
    point13: findPointOnPathInwardDirection(points.point13, aSkeleton, defaultAPath),
    point14: findPointOnPathInwardDirection(points.point14, aSkeleton, defaultAPath),
    point15: findPointOnPathInwardDirection(points.point15, aSkeleton, defaultAPath),
    point16: findPointOnPathInwardDirection(points.point16, aSkeleton, defaultAPath),
    point17: findPointOnPathInwardDirection(points.point17, aSkeleton, defaultAPath),
    point18: findPointOnPathInwardDirection(points.point18, aSkeleton, defaultAPath),
    point19: findPointOnPathInwardDirection(points.point19, aSkeleton, defaultAPath),
    point20: findPointOnPathInwardDirection(points.point20, aSkeleton, defaultAPath),
    point21: findPointOnPathInwardDirection(points.point21, aSkeleton, defaultAPath),
    point22: findPointOnPathInwardDirection(points.point22, aSkeleton, defaultAPath),
    point23: findPointOnPathInwardDirection(points.point23, aSkeleton, defaultAPath),
    point24: findPointOnPathInwardDirection(points.point24, aSkeleton, defaultAPath),
    point25: findPointOnPathInwardDirection(points.point25, aSkeleton, defaultAPath),
    point26: findPointOnPathInwardDirection(points.point26, aSkeleton, defaultAPath),
    point27: findPointOnPathInwardDirection(points.point27, aSkeleton, defaultAPath),
    point28: findPointOnPathInwardDirection(points.point28, aSkeleton, defaultAPath),
    point29: findPointOnPathInwardDirection(points.point29, aSkeleton, defaultAPath),
    point30: findPointOnPathInwardDirection(points.point30, aSkeleton, defaultAPath),
    point31: findPointOnPathInwardDirection(points.point31, aSkeleton, defaultAPath),
    point32: findPointOnPathInwardDirection(points.point32, aSkeleton, defaultAPath),
    point34: findPointOnPathInwardDirection(points.point34, aSkeleton, defaultAPath),
    point35: findPointOnPathInwardDirection(points.point35, aSkeleton, defaultAPath),
    point36: findPointOnPathInwardDirection(points.point36, aSkeleton, defaultAPath),
    point37: findPointOnPathInwardDirection(points.point37, aSkeleton, defaultAPath),
    point38: findPointOnPathInwardDirection(points.point38, aSkeleton, defaultAPath),
    point39: findPointOnPathInwardDirection(points.point39, aSkeleton, defaultAPath),
    point40: findPointOnPathInwardDirection(points.point40, aSkeleton, defaultAPath),
    point41: findPointOnPathInwardDirection(points.point41, aSkeleton, defaultAPath),
    point42: findPointOnPathInwardDirection(points.point42, aSkeleton, defaultAPath),
};

export const aTestConfig = {
    points: { ...points },
    skeletonEndpoints: { ...skeletonEndpoints },
    basePath: [
        { cmd: "M", points: ["point1"] },
        {
            cmd: "L",
            points: ["point2"],
        },
        {
            cmd: "L",
            points: ["point3"],
        },
        {
            cmd: "C",
            points: ["point3", "point4", "point5"],
        },
        {
            cmd: "C",
            points: ["point6", "point7", "point8"],
        },
        {
            cmd: "C",
            points: ["point9", "point10", "point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point14"],
        },
        {
            cmd: "C",
            points: ["point15", "point16", "point17"],
        },
        {
            cmd: "C",
            points: ["point18", "point19", "point20"],
        },
        {
            cmd: "L",
            points: ["point21"],
        },
        {
            cmd: "C",
            points: ["point22", "point23", "point24"],
        },
        {
            cmd: "C",
            points: ["point25", "point26", "point27"],
        },
        {
            cmd: "C",
            points: ["point28", "point29", "point30"],
        },
        {
            cmd: "C",
            points: ["point30", "point31", "point32"],
        },
        {
            cmd: "L",
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point34"],
        },
        {
            cmd: "C",
            points: ["point35", "point36", "point37"],
        },
        {
            cmd: "C",
            points: ["point38", "point39", "point40"],
        },
        {
            cmd: "C",
            points: ["point41", "point42", "point34"],
        },
        {
            cmd: "Z",
        },
    ],

    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 32.9,
            pos: {
                x: -54.08,
                y: 234.5,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point4,
                            aTestConfig.skeletonEndpoints.point4,
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point5,
                            aTestConfig.skeletonEndpoints.point5,
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point6,
                            aTestConfig.skeletonEndpoints.point6,
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point7,
                            aTestConfig.skeletonEndpoints.point7,
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point8,
                            aTestConfig.skeletonEndpoints.point8,
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point9,
                            aTestConfig.skeletonEndpoints.point9,
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point10,
                            aTestConfig.skeletonEndpoints.point10,
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point11,
                            aTestConfig.skeletonEndpoints.point11,
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point12,
                            aTestConfig.skeletonEndpoints.point12,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point40,
                            aTestConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point39,
                            aTestConfig.skeletonEndpoints.point39,
                            0,
                        )(base, val),
                },
                {
                    point: "point38",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point38,
                            aTestConfig.skeletonEndpoints.point38,
                            0,
                        )(base, val),
                },
                {
                    point: "point37",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point37,
                            aTestConfig.skeletonEndpoints.point37,
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point36,
                            aTestConfig.skeletonEndpoints.point36,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point35,
                            aTestConfig.skeletonEndpoints.point35,
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 18.26,
            pos: {
                x: 2.04,
                y: 144.58,
            },
            affects: [
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point28,
                            aTestConfig.skeletonEndpoints.point28,
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point27,
                            aTestConfig.skeletonEndpoints.point27,
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point26,
                            aTestConfig.skeletonEndpoints.point26,
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point25,
                            aTestConfig.skeletonEndpoints.point25,
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point24,
                            aTestConfig.skeletonEndpoints.point24,
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point23,
                            aTestConfig.skeletonEndpoints.point23,
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point22,
                            aTestConfig.skeletonEndpoints.point22,
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point21,
                            aTestConfig.skeletonEndpoints.point21,
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point20,
                            aTestConfig.skeletonEndpoints.point20,
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point19,
                            aTestConfig.skeletonEndpoints.point19,
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point18,
                            aTestConfig.skeletonEndpoints.point18,
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point17,
                            aTestConfig.skeletonEndpoints.point17,
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point16,
                            aTestConfig.skeletonEndpoints.point16,
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point15,
                            aTestConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point13,
                            aTestConfig.skeletonEndpoints.point13,
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 33.14,
            pos: {
                x: 47.74,
                y: 213.81,
            },
            affects: [
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point26,
                            aTestConfig.skeletonEndpoints.point26,
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point27,
                            aTestConfig.skeletonEndpoints.point27,
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point28,
                            aTestConfig.skeletonEndpoints.point28,
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point29,
                            aTestConfig.skeletonEndpoints.point29,
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point30,
                            aTestConfig.skeletonEndpoints.point30,
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point31,
                            aTestConfig.skeletonEndpoints.point31,
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point32,
                            aTestConfig.skeletonEndpoints.point32,
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point1,
                            aTestConfig.skeletonEndpoints.point1,
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point2,
                            aTestConfig.skeletonEndpoints.point2,
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point3,
                            aTestConfig.skeletonEndpoints.point3,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point40,
                            aTestConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point41,
                            aTestConfig.skeletonEndpoints.point41,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point35,
                            aTestConfig.skeletonEndpoints.point35,
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point42,
                            aTestConfig.skeletonEndpoints.point42,
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point34,
                            aTestConfig.skeletonEndpoints.point34,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point13,
                            aTestConfig.skeletonEndpoints.point13,
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point14,
                            aTestConfig.skeletonEndpoints.point14,
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point15,
                            aTestConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point16,
                            aTestConfig.skeletonEndpoints.point16,
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point17,
                            aTestConfig.skeletonEndpoints.point17,
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point18,
                            aTestConfig.skeletonEndpoints.point18,
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "middle",
            default: 1,
            r: 10.86,
            pos: {
                x: -4.37,
                y: 200.25,
            },
            affects: [
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point15,
                            aTestConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point14,
                            aTestConfig.skeletonEndpoints.point14,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point13,
                            aTestConfig.skeletonEndpoints.point13,
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point12,
                            aTestConfig.skeletonEndpoints.point12,
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point36,
                            aTestConfig.skeletonEndpoints.point36,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point35,
                            aTestConfig.skeletonEndpoints.point35,
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point34,
                            aTestConfig.skeletonEndpoints.point34,
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point42,
                            aTestConfig.skeletonEndpoints.point42,
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "4",
            name: "bottom",
            default: 1,
            r: 12.52,
            pos: {
                x: -3.69,
                y: 250.17,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point6,
                            aTestConfig.skeletonEndpoints.point6,
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point5,
                            aTestConfig.skeletonEndpoints.point5,
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point4,
                            aTestConfig.skeletonEndpoints.point4,
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point39,
                            aTestConfig.skeletonEndpoints.point39,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point40,
                            aTestConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aTestConfig.points.point41,
                            aTestConfig.skeletonEndpoints.point41,
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
