import { makeCopyDeltaFromInterpolation } from "../../project";

export const aConfig = {
    unicode: 97,
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
    points: {
        point1: {
            x: 87.57,
            y: 267.76,
            attach: "base",
        },
        point2: {
            x: 19.1,
            y: 267.76,
            attach: "base",
        },
        point3: {
            x: 16.94,
            y: 248.82,
            attach: "base",
        },
        point4: {
            x: 6.94,
            y: 264.79,
            attach: "base",
        },
        point5: {
            x: -24.19,
            y: 269.93,
            attach: "base",
        },
        point6: {
            x: -39.34,
            y: 272.64,
            attach: "base",
        },
        point7: {
            x: -86.36,
            y: 270.68,
            attach: "base",
        },
        point8: {
            x: -86.97,
            y: 236.37,
            attach: "base",
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
            attach: "xh",
        },
        point14: {
            x: 12.88,
            y: 180.63,
            attach: "xh",
        },
        point15: {
            x: 14.77,
            y: 177.38,
            attach: "xh",
        },
        point16: {
            x: 13.96,
            y: 171.43,
            attach: "xh",
        },
        point17: {
            x: 10.71,
            y: 167.64,
            attach: "xh",
        },
        point18: {
            x: 4.22,
            y: 160.06,
            attach: "xh",
        },
        point19: {
            x: -15.54,
            y: 159.52,
            attach: "xh",
        },
        point20: {
            x: -17.43,
            y: 178.46,
            attach: "xh",
        },
        point21: {
            x: -78.86,
            y: 170.07,
            attach: "xh",
        },
        point22: {
            x: -77.24,
            y: 154.92,
            attach: "xh",
        },
        point23: {
            x: -68.31,
            y: 144.63,
            attach: "xh",
        },
        point24: {
            x: -56.94,
            y: 138.41,
            attach: "xh",
        },
        point25: {
            x: -19.05,
            y: 118.11,
            attach: "xh",
        },
        point26: {
            x: 43.19,
            y: 127.59,
            attach: "xh",
        },
        point27: {
            x: 56.72,
            y: 136.52,
            attach: "xh",
        },
        point28: {
            x: 80.53,
            y: 152.76,
            attach: "xh",
        },
        point29: {
            x: 80.8,
            y: 175.22,
            attach: "xh",
        },
        point30: {
            x: 80.8,
            y: 207.69,
        },
        point31: {
            x: 79.72,
            y: 246.39,
            attach: "base",
        },
        point32: {
            x: 82.42,
            y: 252.61,
            attach: "base",
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
            attach: "base",
            ratio: 0.5,
        },
        point38: {
            x: -27.44,
            y: 232.04,
            attach: "base",
        },
        point39: {
            x: -11.74,
            y: 243.68,
            attach: "base",
        },
        point40: {
            x: 5.58,
            y: 234.21,
            attach: "base",
        },
        point41: {
            x: 16.13,
            y: 228.26,
            attach: "base",
        },
        point42: {
            x: 14.51,
            y: 211.21,
        },
    },
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
                            { ...aConfig.points.point4, x: 15.34, y: 269.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point5,
                            { ...aConfig.points.point5, x: -16.2, y: 269.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point6,
                            { ...aConfig.points.point6, x: -39.86, y: 269.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point7,
                            { ...aConfig.points.point7, x: -62.01, y: 253.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point8,
                            { ...aConfig.points.point8, x: -62.7, y: 232.74 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point9,
                            { ...aConfig.points.point9, x: -63.84, y: 197.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point10,
                            { ...aConfig.points.point10, x: -32.29, y: 190.3 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point11,
                            { ...aConfig.points.point11, x: -24.39, y: 190.3 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point12,
                            { ...aConfig.points.point12, x: 1.39, y: 190.3 },
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            { ...aConfig.points.point40, x: 5.59, y: 234.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point39,
                            { ...aConfig.points.point39, x: -37.11, y: 260.52 },
                            0,
                        )(base, val),
                },
                {
                    point: "point38",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point38,
                            { ...aConfig.points.point38, x: -48.33, y: 229.14 },
                            0,
                        )(base, val),
                },
                {
                    point: "point37",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point37,
                            { ...aConfig.points.point37, x: -34.68, y: 215.49 },
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point36,
                            { ...aConfig.points.point36, x: -26.58, y: 207.4 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            { ...aConfig.points.point35, x: 4.51, y: 212.56 },
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
                            { ...aConfig.points.point28, x: 61.78, y: 151.8 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point27,
                            { ...aConfig.points.point27, x: 38.21, y: 136.91 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point26,
                            { ...aConfig.points.point26, x: 18.91, y: 124.54 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point25,
                            { ...aConfig.points.point25, x: -8.49, y: 126.02 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point24,
                            { ...aConfig.points.point24, x: -21.41, y: 129.59 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point23,
                            { ...aConfig.points.point23, x: -37.24, y: 133.98 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point22,
                            { ...aConfig.points.point22, x: -52.07, y: 145.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point21,
                            { ...aConfig.points.point21, x: -57.45, y: 162.11 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point20,
                            { ...aConfig.points.point20, x: -35.5, y: 167.26 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point19,
                            { ...aConfig.points.point19, x: -30.78, y: 145.68 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point18,
                            { ...aConfig.points.point18, x: 8.69, y: 140.05 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point17,
                            { ...aConfig.points.point17, x: 27.38, y: 155.07 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point16,
                            { ...aConfig.points.point16, x: 36.06, y: 164.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point15,
                            { ...aConfig.points.point15, x: 16.91, y: 177.92 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            { ...aConfig.points.point13, x: 5.1, y: 185.68 },
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
                            { ...aConfig.points.point26, x: 23.13, y: 122.16 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point27,
                            { ...aConfig.points.point27, x: 36.66, y: 131.09 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point28,
                            { ...aConfig.points.point28, x: 57.97, y: 145.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point29,
                            { ...aConfig.points.point29, x: 56.09, y: 154.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point30,
                            { ...aConfig.points.point30, x: 56.09, y: 186.77 },
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point31,
                            { ...aConfig.points.point31, x: 56.63, y: 242.32 },
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point32,
                            { ...aConfig.points.point32, x: 56.63, y: 242.32 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point1,
                            { ...aConfig.points.point1, x: 63.42, y: 266.98 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point2,
                            { ...aConfig.points.point2, x: 37.13, y: 266.98 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point3,
                            { ...aConfig.points.point3, x: 35.23, y: 246.93 },
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            { ...aConfig.points.point40, x: 26.81, y: 233.14 },
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point41,
                            { ...aConfig.points.point41, x: 36.67, y: 224.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            { ...aConfig.points.point35, x: 24.14, y: 204.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point42,
                            { ...aConfig.points.point42, x: 34.15, y: 203.38 },
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point34,
                            { ...aConfig.points.point34, x: 34.15, y: 197.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            { ...aConfig.points.point13, x: 28.74, y: 183.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point14,
                            { ...aConfig.points.point14, x: 33.34, y: 175.51 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point15,
                            { ...aConfig.points.point15, x: 35.69, y: 170.98 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point16,
                            { ...aConfig.points.point16, x: 33.22, y: 160.42 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point17,
                            { ...aConfig.points.point17, x: 27.36, y: 155.06 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point18,
                            { ...aConfig.points.point18, x: 19.8, y: 148.78 },
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
                            { ...aConfig.points.point15, x: 14.77, y: 180.78 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point14,
                            { ...aConfig.points.point14, x: 12.88, y: 184.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point13,
                            { ...aConfig.points.point13, x: 8.47, y: 185 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point12,
                            { ...aConfig.points.point12, x: -7.24, y: 189.38 },
                            0,
                        )(base, val),
                },
                {
                    point: "point36",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point36,
                            { ...aConfig.points.point36, x: -11.63, y: 202.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point35,
                            { ...aConfig.points.point35, x: -0.91, y: 207.16 },
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point34,
                            { ...aConfig.points.point34, x: 14.6, y: 203.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point42",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point42,
                            { ...aConfig.points.point42, x: 14.6, y: 209.39 },
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
                            { ...aConfig.points.point6, x: -21.15, y: 272.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point5,
                            { ...aConfig.points.point5, x: -6.14, y: 269.47 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point4,
                            { ...aConfig.points.point4, x: 13.33, y: 265.02 },
                            0,
                        )(base, val),
                },
                {
                    point: "point39",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point39,
                            { ...aConfig.points.point39, x: -12.9, y: 257.01 },
                            0,
                        )(base, val),
                },
                {
                    point: "point40",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point40,
                            { ...aConfig.points.point40, x: 7.47, y: 248.16 },
                            0,
                        )(base, val),
                },
                {
                    point: "point41",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            aConfig.points.point41,
                            { ...aConfig.points.point41, x: 18.02, y: 242.21 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
