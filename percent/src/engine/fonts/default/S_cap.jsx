import { makeCopyDeltaFromInterpolation } from "../../project";

export const SCapConfig = {
    unicode: 83,
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point2", "point3", "point4"],
        },
        {
            cmd: "C",
            points: ["point5", "point6", "point7"],
        },
        {
            cmd: "C",
            points: ["point8", "point9", "point9"],
        },
        {
            cmd: "L",
            points: ["point10"],
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
            points: ["point16", "point17", "point18"],
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
            cmd: "L",
            points: ["point28"],
        },
        {
            cmd: "C",
            points: ["pointA", "point29", "point30"],
        },
        {
            cmd: "C",
            points: ["point31", "point32", "point33"],
        },
        {
            cmd: "C",
            points: ["point34", "point35", "point36"],
        },
        {
            cmd: "C",
            points: ["point37", "point38", "point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 84.56,
            y: 241.32,
            attach: "base",
        },
        point2: {
            x: 77.25,
            y: 252.12,
            attach: "base",
        },
        point3: {
            x: 68.05,
            y: 260.24,
            attach: "base",
        },
        point4: {
            x: 55.33,
            y: 264.57,
            attach: "base",
        },
        point5: {
            x: 29.08,
            y: 273.5,
            attach: "base",
        },
        point6: {
            x: -19.36,
            y: 274.85,
            attach: "base",
        },
        point7: {
            x: -49.4,
            y: 263.76,
            attach: "base",
        },
        point8: {
            x: -84.85,
            y: 250.77,
            attach: "base",
        },
        point9: {
            x: -88.91,
            y: 218.57,
            attach: "base",
        },
        point10: {
            x: -24.77,
            y: 208.29,
            attach: "base",
        },
        point11: {
            x: -23.96,
            y: 215.33,
            attach: "base",
        },
        point12: {
            x: -17.73,
            y: 219.93,
            attach: "base",
        },
        point13: {
            x: -8.53,
            y: 226.42,
            attach: "base",
        },
        point14: {
            x: 19.34,
            y: 225.88,
            attach: "base",
        },
        point15: {
            x: 19.89,
            y: 214.79,
            attach: "base",
            ratio: 0.75,
        },
        point16: {
            x: 20.16,
            y: 202.34,
            ratio: 0.5,
            attach: "base",
        },
        point17: {
            x: 2.03,
            y: 199.36,
            ratio: 0.25,
            attach: "base",
        },
        point18: {
            x: -22.06,
            y: 192.33,
            ratio: 0.25,
            attach: "cap",
        },
        point19: {
            x: -40.46,
            y: 187.19,
            ratio: 0.5,
            attach: "cap",
        },
        point20: {
            x: -78.35,
            y: 177.99,
            ratio: 0.75,
            attach: "cap",
        },
        point21: {
            x: -84.84,
            y: 147.14,
            attach: "cap",
        },
        point22: {
            x: -94.04,
            y: 104.92,
            attach: "cap",
        },
        point23: {
            x: -59.4,
            y: 74.34,
            attach: "cap",
        },
        point24: {
            x: 6.9,
            y: 75.97,
            attach: "cap",
        },
        point25: {
            x: 44.52,
            y: 77.05,
            attach: "cap",
        },
        point26: {
            x: 74.82,
            y: 87.61,
            attach: "cap",
        },
        point27: {
            x: 85.65,
            y: 125.22,
            attach: "cap",
        },
        point28: {
            x: 23.68,
            y: 134.15,
            attach: "cap",
        },
        pointA: {
            x: 23.68,
            y: 134.15,
            attach: "cap",
        },
        point29: {
            x: 21.79,
            y: 121.16,
            attach: "cap",
        },
        point30: {
            x: 7.44,
            y: 119.27,
            attach: "cap",
        },
        point31: {
            x: -18.54,
            y: 115.75,
            attach: "cap",
        },
        point32: {
            x: -24.22,
            y: 136.05,
            ratio: 0.66,
            attach: "cap",
        },
        point33: {
            x: 3.65,
            y: 142.54,
            attach: "cap",
            ratio: 0.33,
        },
        point34: {
            x: 56.42,
            y: 154.99,
            attach: "base",
            ratio: 0.33,
        },
        point35: {
            x: 82.94,
            y: 169.6,
            ratio: 0.66,
            attach: "base",
        },
        point36: {
            x: 90.25,
            y: 198.29,
            attach: "base",
        },
        point37: {
            x: 94.04,
            y: 213.17,
            attach: "base",
        },
        point38: {
            x: 92.42,
            y: 229.41,
            attach: "base",
        },
        point39: {
            x: 84.57,
            y: 241.32,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "top",
            default: 1,
            r: 21.5,
            pos: {
                x: 1.03,
                y: 97.39,
                attach: "cap",
            },
            affects: [
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point23,
                            { ...SCapConfig.points.point23, x: -64.67, y: 76.46 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point24,
                            { ...SCapConfig.points.point24, x: 1.65, y: 76.46 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point25,
                            { ...SCapConfig.points.point25, x: 28.46, y: 76.46 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point26,
                            { ...SCapConfig.points.point26, x: 53.58, y: 88.58 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point27,
                            { ...SCapConfig.points.point27, x: 66.13, y: 116.47 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point28,
                            { ...SCapConfig.points.point28, x: 44.45, y: 125.14 },
                            0,
                        )(base, val),
                },
                {
                    point: "pointA",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.pointA,
                            { ...SCapConfig.points.pointA, x: 39.69, y: 106.93 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point29,
                            { ...SCapConfig.points.point29, x: 21.14, y: 97.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point30,
                            { ...SCapConfig.points.point30, x: 6.13, y: 97.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point31,
                            { ...SCapConfig.points.point31, x: -20.09, y: 97.97 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "bottom",
            default: 1,
            r: 23.77,
            pos: {
                x: 1.03,
                y: 247.9,
                attach: "base",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point6,
                            { ...SCapConfig.points.point6, x: -5.87, y: 277.27 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point7,
                            { ...SCapConfig.points.point7, x: -34.61, y: 263.15 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point8,
                            { ...SCapConfig.points.point8, x: -58.4, y: 251.47 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point9,
                            { ...SCapConfig.points.point9, x: -65.86, y: 229.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point10,
                            { ...SCapConfig.points.point10, x: -42.28, y: 219.98 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point11,
                            { ...SCapConfig.points.point11, x: -38.5, y: 235.68 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point12,
                            { ...SCapConfig.points.point12, x: -24.92, y: 242.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point13,
                            { ...SCapConfig.points.point13, x: 6.66, y: 257.55 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point14,
                            { ...SCapConfig.points.point14, x: 41.94, y: 245.42 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point15,
                            { ...SCapConfig.points.point15, x: 43.6, y: 221.41 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point16,
                            { ...SCapConfig.points.point16, x: 44.46, y: 208.99 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "middle",
            default: 1,
            r: 27.42,
            pos: {
                x: 1.03,
                y: 170.22,
            },
            affects: [
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point23,
                            { ...SCapConfig.points.point23, x: -28.85, y: 75.91 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point22,
                            { ...SCapConfig.points.point22, x: -64.01, y: 92.46 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point21,
                            { ...SCapConfig.points.point21, x: -65.84, y: 123.05 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point20,
                            { ...SCapConfig.points.point20, x: -67.68, y: 153.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point19,
                            { ...SCapConfig.points.point19, x: -50.74, y: 169.04 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point18,
                            { ...SCapConfig.points.point18, x: -13.26, y: 179.75 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point17,
                            { ...SCapConfig.points.point17, x: 17.59, y: 188.56 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point16,
                            { ...SCapConfig.points.point16, x: 39.92, y: 195.45 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point15,
                            { ...SCapConfig.points.point15, x: 43.4, y: 214.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point14,
                            { ...SCapConfig.points.point14, x: 45.37, y: 225.74 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point5,
                            { ...SCapConfig.points.point5, x: 23.71, y: 275.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point4,
                            { ...SCapConfig.points.point4, x: 48.24, y: 258.74 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point3,
                            { ...SCapConfig.points.point3, x: 58.01, y: 251.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point2,
                            { ...SCapConfig.points.point2, x: 64.37, y: 244.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point39,
                            { ...SCapConfig.points.point39, x: 67.06, y: 234.33 },
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point39,
                            { ...SCapConfig.points.point39, x: 67.06, y: 234.33 },
                            0,
                        )(base, val),
                },
                {
                    point: "point38",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point38,
                            { ...SCapConfig.points.point38, x: 70.25, y: 222.93 },
                            0,
                        )(base, val),
                },
                {
                    point: "point37",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point37,
                            { ...SCapConfig.points.point37, x: 70.09, y: 212.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point36,
                            { ...SCapConfig.points.point36, x: 65.33, y: 201.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point35,
                            { ...SCapConfig.points.point35, x: 54.68, y: 179.77 },
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point34,
                            { ...SCapConfig.points.point34, x: 46.75, y: 173.8 },
                            0,
                        )(base, val),
                },
                {
                    point: "point33",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point33,
                            { ...SCapConfig.points.point33, x: 8.15, y: 162.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            SCapConfig.points.point32,
                            { ...SCapConfig.points.point32, x: -38.04, y: 148.31 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
