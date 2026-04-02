import { makeCopyDeltaFromInterpolation } from "../../project";

export const CCapConfig = {
    unicode: 67,
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point1", "point2", "point3"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point6"],
        },
        {
            cmd: "C",
            points: ["point7", "point8", "point9"],
        },
        {
            cmd: "C",
            points: ["point10", "point11", "point12"],
        },
        {
            cmd: "C",
            points: ["point13", "point14", "point15"],
        },
        {
            cmd: "C",
            points: ["point16", "point17", "point17"],
        },
        {
            cmd: "L",
            points: ["point18"],
        },
        {
            cmd: "C",
            points: ["point19", "point20", "point21"],
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
            points: ["point31", "point32", "point33"],
        },
        {
            cmd: "C",
            points: ["point34", "point35", "point35"],
        },
        {
            cmd: "L",
            points: ["point36"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 103.63,
            y: 198.75,
            attach: "base",
        },
        point2: {
            x: 103.09,
            y: 207.14,
            attach: "base",
        },
        point3: {
            x: 97.95,
            y: 219.86,
            attach: "base",
        },
        point4: {
            x: 90.64,
            y: 239.35,
            attach: "base",
        },
        point5: {
            x: 65.75,
            y: 267.76,
            attach: "base",
        },
        point6: {
            x: 3.51,
            y: 269.92,
            attach: "base",
        },
        point7: {
            x: -56.57,
            y: 271.81,
            attach: "base",
        },
        point8: {
            x: -103.65,
            y: 246.4,
            attach: "base",
        },
        point9: {
            x: -103.65,
            y: 173.85,
        },
        point10: {
            x: -103.65,
            y: 101.3,
            attach: "cap",
        },
        point11: {
            x: -52.5,
            y: 77.51,
            attach: "cap",
        },
        point12: {
            x: 3.51,
            y: 77.51,
            attach: "cap",
        },
        point13: {
            x: 40.85,
            y: 77.51,
            attach: "cap",
        },
        point14: {
            x: 66.56,
            y: 87.52,
            attach: "cap",
        },
        point15: {
            x: 81.99,
            y: 106.2,
            attach: "cap",
        },
        point16: {
            x: 97.69,
            y: 124.87,
            attach: "cap",
        },
        point17: {
            x: 102.83,
            y: 146.25,
            attach: "cap",
        },
        point18: {
            x: 34.09,
            y: 156.26,
            attach: "cap",
        },
        point19: {
            x: 31.38,
            y: 137.59,
            attach: "cap",
        },
        point20: {
            x: 21.38,
            y: 125.95,
            attach: "cap",
        },
        point21: {
            x: 2.97,
            y: 124.6,
            attach: "cap",
        },
        point22: {
            x: -10.02,
            y: 123.79,
            attach: "cap",
        },
        point23: {
            x: -23.01,
            y: 130.55,
            attach: "cap",
        },
        point24: {
            x: -30.05,
            y: 144.9,
            attach: "cap",
        },
        point25: {
            x: -33.7,
            y: 152.31,
            attach: "cap",
            ratio: 0.66,
        },
        point26: {
            x: -35.34,
            y: 161.77,
            attach: "cap",
            ratio: 0.33,
        },
        point27: {
            x: -35.17,
            y: 171.42,
        },
        point28: {
            x: -34.89,
            y: 187.5,
            attach: "base",
            ratio: 0.33,
        },
        point29: {
            x: -29.61,
            y: 204.1,
            attach: "base",
            ratio: 0.66,
        },
        point30: {
            x: -20.3,
            y: 212.55,
            attach: "base",
        },
        point31: {
            x: -10.02,
            y: 221.75,
            attach: "base",
        },
        point32: {
            x: 10.55,
            y: 221.75,
            attach: "base",
        },
        point33: {
            x: 19.48,
            y: 216.34,
            attach: "base",
        },
        point34: {
            x: 33.28,
            y: 207.68,
            attach: "base",
        },
        point35: {
            x: 34.63,
            y: 190.9,
            attach: "base",
        },
        point36: {
            x: 103.64,
            y: 198.75,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 34.25,
            pos: {
                x: -69.42,
                y: 173.77,
            },
            affects: [
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point31,
                            { ...CCapConfig.points.point31, x: -35.91, y: 232.78 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point30,
                            { ...CCapConfig.points.point30, x: -48.97, y: 209.74 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point29,
                            { ...CCapConfig.points.point29, x: -51.82, y: 204.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point28,
                            { ...CCapConfig.points.point28, x: -54.32, y: 184.33 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point27,
                            { ...CCapConfig.points.point27, x: -54.48, y: 171.46 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point26,
                            { ...CCapConfig.points.point26, x: -54.6, y: 161.47 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point25,
                            { ...CCapConfig.points.point25, x: -53.18, y: 146.02 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point24,
                            { ...CCapConfig.points.point24, x: -49.52, y: 138.61 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point23,
                            { ...CCapConfig.points.point23, x: -42.48, y: 124.27 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point10,
                            { ...CCapConfig.points.point10, x: -80.22, y: 119.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point9,
                            { ...CCapConfig.points.point9, x: -80.22, y: 171.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point8,
                            { ...CCapConfig.points.point8, x: -80.22, y: 222.65 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 23.51,
            pos: {
                x: -0.02,
                y: 101.03,
                attach: "cap",
            },
            affects: [
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point13,
                            { ...CCapConfig.points.point13, x: 21.84, y: 76.62 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point14,
                            { ...CCapConfig.points.point14, x: 46.55, y: 81.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point15,
                            { ...CCapConfig.points.point15, x: 62.04, y: 96.68 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point16,
                            { ...CCapConfig.points.point16, x: 76.03, y: 110.67 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point17,
                            { ...CCapConfig.points.point17, x: 78.31, y: 124.58 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point18,
                            { ...CCapConfig.points.point18, x: 55.28, y: 128.1 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point19,
                            { ...CCapConfig.points.point19, x: 49.26, y: 107.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point20,
                            { ...CCapConfig.points.point20, x: 25.98, y: 96.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point21,
                            { ...CCapConfig.points.point21, x: 16.45, y: 96.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point22,
                            { ...CCapConfig.points.point22, x: -5.37, y: 96.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point23,
                            { ...CCapConfig.points.point23, x: -24.07, y: 124.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point24,
                            { ...CCapConfig.points.point24, x: -29.21, y: 138.66 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point25,
                            { ...CCapConfig.points.point25, x: -32.1, y: 146.4 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 24.94,
            pos: {
                x: -0.02,
                y: 245.09,
                attach: "base",
            },
            affects: [
                //OG POINTS:
                //             point13 (26.69, 212.7) Workspace.jsx:28:17
                // point24 (-29.11, 165.55) Workspace.jsx:28:17
                // point12 (15.29, 225.55) 2 Workspace.jsx:28:17
                // point13 (13.67, 212.02) Workspace.jsx:28:17
                // point14 (13.67, 177.11) Workspace.jsx:28:17
                // point15 (13.67, 80.5) Workspace.jsx:28:17
                // point1 (89.44, 80.5) Workspace.jsx:28:17
                // point2 (89.44, 186.85) Workspace.jsx:28:17
                // point3 (89.44, 250.98) Workspace.jsx:28:17
                // point4 (55.88, 272.09)
                //TO GO TO:
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point5,
                            { ...CCapConfig.points.point5, x: 30.59, y: 270.17 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point4,
                            { ...CCapConfig.points.point4, x: 48.76, y: 264.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point3,
                            { ...CCapConfig.points.point3, x: 64.43, y: 251.04 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point2,
                            { ...CCapConfig.points.point2, x: 75.96, y: 240.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point1,
                            { ...CCapConfig.points.point1, x: 80.2, y: 225.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point36,
                            { ...CCapConfig.points.point36, x: 80.2, y: 225.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point35,
                            { ...CCapConfig.points.point35, x: 57.44, y: 219.43 },
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point34,
                            { ...CCapConfig.points.point34, x: 54.65, y: 233.4 },
                            0,
                        )(base, val),
                },
                {
                    point: "point33",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point33,
                            { ...CCapConfig.points.point33, x: 38.84, y: 242.76 },
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point32,
                            { ...CCapConfig.points.point32, x: 27.24, y: 249.67 },
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point31,
                            { ...CCapConfig.points.point31, x: 4.11, y: 252.66 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point30,
                            { ...CCapConfig.points.point30, x: -7.88, y: 248.93 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            CCapConfig.points.point29,
                            { ...CCapConfig.points.point29, x: -34.43, y: 239.82 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
