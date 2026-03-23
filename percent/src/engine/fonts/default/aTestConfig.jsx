import {
    makeCopyDeltaFromInterpolation,
    interpolateFromBase,
    findClosestPointOnPath,
} from "../../project";

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
    point1: findClosestPointOnPath(points.point1, aSkeleton),
    point2: findClosestPointOnPath(points.point2, aSkeleton),
    point3: findClosestPointOnPath(points.point3, aSkeleton),
    point4: findClosestPointOnPath(points.point4, aSkeleton),
    point5: findClosestPointOnPath(points.point5, aSkeleton),
    point6: findClosestPointOnPath(points.point6, aSkeleton),
    point7: findClosestPointOnPath(points.point7, aSkeleton),
    point8: findClosestPointOnPath(points.point8, aSkeleton),
    point9: findClosestPointOnPath(points.point9, aSkeleton),
    point10: findClosestPointOnPath(points.point10, aSkeleton),
    point11: findClosestPointOnPath(points.point11, aSkeleton),
    point12: findClosestPointOnPath(points.point12, aSkeleton),
    point13: findClosestPointOnPath(points.point13, aSkeleton),
    point14: findClosestPointOnPath(points.point14, aSkeleton),
    point15: findClosestPointOnPath(points.point15, aSkeleton),
    point16: findClosestPointOnPath(points.point16, aSkeleton),
    point17: findClosestPointOnPath(points.point17, aSkeleton),
    point18: findClosestPointOnPath(points.point18, aSkeleton),
    point19: findClosestPointOnPath(points.point19, aSkeleton),
    point20: findClosestPointOnPath(points.point20, aSkeleton),
    point21: findClosestPointOnPath(points.point21, aSkeleton),
    point22: findClosestPointOnPath(points.point22, aSkeleton),
    point23: findClosestPointOnPath(points.point23, aSkeleton),
    point24: findClosestPointOnPath(points.point24, aSkeleton),
    point25: findClosestPointOnPath(points.point25, aSkeleton),
    point26: findClosestPointOnPath(points.point26, aSkeleton),
    point27: findClosestPointOnPath(points.point27, aSkeleton),
    point28: findClosestPointOnPath(points.point28, aSkeleton),
    point29: findClosestPointOnPath(points.point29, aSkeleton),
    point30: findClosestPointOnPath(points.point30, aSkeleton),
    point31: findClosestPointOnPath(points.point31, aSkeleton),
    point32: findClosestPointOnPath(points.point32, aSkeleton),
    point34: findClosestPointOnPath(points.point34, aSkeleton),
    point35: findClosestPointOnPath(points.point35, aSkeleton),
    point36: findClosestPointOnPath(points.point36, aSkeleton),
    point37: findClosestPointOnPath(points.point37, aSkeleton),
    point38: findClosestPointOnPath(points.point38, aSkeleton),
    point39: findClosestPointOnPath(points.point39, aSkeleton),
    point40: findClosestPointOnPath(points.point40, aSkeleton),
    point41: findClosestPointOnPath(points.point41, aSkeleton),
    point42: findClosestPointOnPath(points.point42, aSkeleton),
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
                            aConfig.points.point4,
                            aConfig.skeletonEndpoints.point4,
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point5,
                            aConfig.skeletonEndpoints.point5,
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point6,
                            aConfig.skeletonEndpoints.point6,
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point7,
                            aConfig.skeletonEndpoints.point7,
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point8,
                            aConfig.skeletonEndpoints.point8,
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point9,
                            aConfig.skeletonEndpoints.point9,
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point10,
                            aConfig.skeletonEndpoints.point10,
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point11,
                            aConfig.skeletonEndpoints.point11,
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point12,
                            aConfig.skeletonEndpoints.point12,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            aConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point39,
                            aConfig.skeletonEndpoints.point39,
                            0,
                        )(base, val),
                },
                {
                    point: "point38",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point38,
                            aConfig.skeletonEndpoints.point38,
                            0,
                        )(base, val),
                },
                {
                    point: "point37",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point37,
                            aConfig.skeletonEndpoints.point37,
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point36,
                            aConfig.skeletonEndpoints.point36,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            aConfig.skeletonEndpoints.point35,
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
                            aConfig.points.point28,
                            aConfig.skeletonEndpoints.point28,
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point27,
                            aConfig.skeletonEndpoints.point27,
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point26,
                            aConfig.skeletonEndpoints.point26,
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point25,
                            aConfig.skeletonEndpoints.point25,
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point24,
                            aConfig.skeletonEndpoints.point24,
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point23,
                            aConfig.skeletonEndpoints.point23,
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point22,
                            aConfig.skeletonEndpoints.point22,
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point21,
                            aConfig.skeletonEndpoints.point21,
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point20,
                            aConfig.skeletonEndpoints.point20,
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point19,
                            aConfig.skeletonEndpoints.point19,
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point18,
                            aConfig.skeletonEndpoints.point18,
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point17,
                            aConfig.skeletonEndpoints.point17,
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point16,
                            aConfig.skeletonEndpoints.point16,
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point15,
                            aConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            aConfig.skeletonEndpoints.point13,
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
                            aConfig.points.point26,
                            aConfig.skeletonEndpoints.point26,
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point27,
                            aConfig.skeletonEndpoints.point27,
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point28,
                            aConfig.skeletonEndpoints.point28,
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point29,
                            aConfig.skeletonEndpoints.point29,
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point30,
                            aConfig.skeletonEndpoints.point30,
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point31,
                            aConfig.skeletonEndpoints.point31,
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point32,
                            aConfig.skeletonEndpoints.point32,
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point1,
                            aConfig.skeletonEndpoints.point1,
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point2,
                            aConfig.skeletonEndpoints.point2,
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point3,
                            aConfig.skeletonEndpoints.point3,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            aConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point41,
                            aConfig.skeletonEndpoints.point41,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            aConfig.skeletonEndpoints.point35,
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point42,
                            aConfig.skeletonEndpoints.point42,
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point34,
                            aConfig.skeletonEndpoints.point34,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            aConfig.skeletonEndpoints.point13,
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point14,
                            aConfig.skeletonEndpoints.point14,
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point15,
                            aConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point16,
                            aConfig.skeletonEndpoints.point16,
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point17,
                            aConfig.skeletonEndpoints.point17,
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point18,
                            aConfig.skeletonEndpoints.point18,
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
                            aConfig.points.point15,
                            aConfig.skeletonEndpoints.point15,
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point14,
                            aConfig.skeletonEndpoints.point14,
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            aConfig.skeletonEndpoints.point13,
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point12,
                            aConfig.skeletonEndpoints.point12,
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point36,
                            aConfig.skeletonEndpoints.point36,
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            aConfig.skeletonEndpoints.point35,
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point34,
                            aConfig.skeletonEndpoints.point34,
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point42,
                            aConfig.skeletonEndpoints.point42,
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
                            aConfig.points.point6,
                            aConfig.skeletonEndpoints.point6,
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point5,
                            aConfig.skeletonEndpoints.point5,
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point4,
                            aConfig.skeletonEndpoints.point4,
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point39,
                            aConfig.skeletonEndpoints.point39,
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            aConfig.skeletonEndpoints.point40,
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point41,
                            aConfig.skeletonEndpoints.point41,
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
