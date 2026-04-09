import { makeCopyDeltaFromInterpolation } from "../../project";

export const sConfig = {
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
            points: ["point5", "point6", "point6"],
        },
        {
            cmd: "L",
            points: ["point7"],
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
            points: ["point25", "point26", "point26"],
        },
        {
            cmd: "L",
            points: ["point27"],
        },
        {
            cmd: "C",
            points: ["point27", "point28", "point29"],
        },
        {
            cmd: "C",
            points: ["point30", "point31", "point32"],
        },
        {
            cmd: "C",
            points: ["point33", "point34", "point35"],
        },
        {
            cmd: "C",
            points: ["point36", "point37", "point38"],
        },
        {
            cmd: "C",
            points: ["point39", "point40", "point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 47.22,
            y: 264.57,
        },
        point2: {
            x: 23.95,
            y: 272.69,
        },
        point3: {
            x: -21.52,
            y: 274.85,
        },
        point4: {
            x: -47.77,
            y: 263.49,
        },
        point5: {
            x: -77.27,
            y: 251.04,
        },
        point6: {
            x: -81.87,
            y: 226.96,
        },
        point7: {
            x: -20.97,
            y: 219.11,
        },
        point8: {
            x: -21.52,
            y: 226.42,
        },
        point9: {
            x: -16.91,
            y: 230.21,
        },
        point10: {
            x: -8.8,
            y: 237.25,
        },
        point11: {
            x: 14.2,
            y: 235.62,
        },
        point12: {
            x: 14.2,
            y: 227.23,
        },
        point13: {
            x: 14.47,
            y: 218.3,
        },
        point14: {
            x: 0.68,
            y: 215.05,
        },
        point15: {
            x: -20.44,
            y: 212.62,
        },
        point16: {
            x: -36.68,
            y: 210.73,
        },
        point17: {
            x: -67.25,
            y: 205.85,
        },
        point18: {
            x: -75.37,
            y: 181.77,
        },
        point19: {
            x: -81.05,
            y: 164.99,
        },
        point20: {
            x: -73.2,
            y: 146.59,
        },
        point21: {
            x: -53.72,
            y: 137.12,
        },
        point22: {
            x: -24.49,
            y: 123.32,
        },
        point23: {
            x: 30.44,
            y: 123.05,
        },
        point24: {
            x: 55.07,
            y: 143.61,
        },
        point25: {
            x: 68.34,
            y: 154.43,
        },
        point26: {
            x: 72.13,
            y: 168.24,
        },
        point27: {
            x: 16.91,
            y: 178.25,
        },
        point28: {
            x: 16.65,
            y: 162.55,
        },
        point29: {
            x: -1.22,
            y: 162.55,
        },
        point30: {
            x: -13.13,
            y: 162.55,
        },
        point31: {
            x: -22.59,
            y: 167.96,
        },
        point32: {
            x: -15.56,
            y: 176.08,
        },
        point33: {
            x: -11.22,
            y: 180.95,
        },
        point34: {
            x: 9.34,
            y: 179.87,
        },
        point35: {
            x: 32.88,
            y: 186.09,
        },
        point36: {
            x: 57.51,
            y: 192.58,
        },
        point37: {
            x: 71.59,
            y: 200.16,
        },
        point38: {
            x: 77.26,
            y: 217.75,
        },
        point39: {
            x: 81.87,
            y: 231.55,
        },
        point40: {
            x: 78.62,
            y: 253.47,
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 17.67,
            pos: {
                x: -0.32,
                y: 197.99,
            },
            affects: [
                {
                    point: "point31",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point31,
                            { ...sConfig.points.point31, x: -23.16, y: 177.32 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point32",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point32,
                            { ...sConfig.points.point32, x: -16.12, y: 185.44 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point33",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point33,
                            { ...sConfig.points.point33, x: -8.91, y: 187.22 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point34",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point34,
                            { ...sConfig.points.point34, x: 4.25, y: 188.52 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point35",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point35,
                            { ...sConfig.points.point35, x: 28.22, y: 193.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point36",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point36,
                            { ...sConfig.points.point36, x: 53.13, y: 198.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point16,
                            { ...sConfig.points.point16, x: -34.22, y: 205.37 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point15,
                            { ...sConfig.points.point15, x: -17.99, y: 207.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point14,
                            { ...sConfig.points.point14, x: 3.13, y: 209.69 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 21.21,
            pos: {
                x: 28.2,
                y: 153.33,
            },
            affects: [
                {
                    point: "point30",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point30,
                            { ...sConfig.points.point30, x: -12.21, y: 146.02 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point29",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point29,
                            { ...sConfig.points.point29, x: -0.31, y: 146.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point28",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point28,
                            { ...sConfig.points.point28, x: 30.23, y: 147.98 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point27,
                            { ...sConfig.points.point27, x: 33.41, y: 169.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point26,
                            { ...sConfig.points.point26, x: 54.82, y: 162.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point25,
                            { ...sConfig.points.point25, x: 52.06, y: 150.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point24,
                            { ...sConfig.points.point24, x: 40.59, y: 140.53 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point23,
                            { ...sConfig.points.point23, x: 15.97, y: 119.97 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 21.74,
            pos: {
                x: -31.53,
                y: 246.22,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point10,
                            { ...sConfig.points.point10, x: 6.26, y: 255.98 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point9,
                            { ...sConfig.points.point9, x: -18.93, y: 247.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point8,
                            { ...sConfig.points.point8, x: -34.43, y: 240.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point7,
                            { ...sConfig.points.point7, x: -35.18, y: 230.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point6,
                            { ...sConfig.points.point6, x: -59.04, y: 235 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point5,
                            { ...sConfig.points.point5, x: -55.13, y: 253.86 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point4,
                            { ...sConfig.points.point4, x: -31.57, y: 264.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point3,
                            { ...sConfig.points.point3, x: -2.58, y: 277.37 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "left",
            default: 1,
            r: 29.52,
            pos: {
                x: -47.52,
                y: 170.89,
            },
            affects: [
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point17,
                            { ...sConfig.points.point17, x: -48.65, y: 202.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point18,
                            { ...sConfig.points.point18, x: -56.77, y: 178.9 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point19,
                            { ...sConfig.points.point19, x: -62.45, y: 162.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point20,
                            { ...sConfig.points.point20, x: -52.57, y: 141.78 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point21,
                            { ...sConfig.points.point21, x: -36.23, y: 134.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point22,
                            { ...sConfig.points.point22, x: -6.93, y: 120.52 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point31",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point31,
                            { ...sConfig.points.point31, x: -39.55, y: 164.09 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point32",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point32,
                            { ...sConfig.points.point32, x: -34.82, y: 172.9 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point33",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point33,
                            { ...sConfig.points.point33, x: -30.29, y: 179.44 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "4",
            name: "right",
            default: 1,
            r: 32.33,
            pos: {
                x: 46.61,
                y: 227.63,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point2,
                            { ...sConfig.points.point2, x: 5.04, y: 275.04 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point1,
                            { ...sConfig.points.point1, x: 28.22, y: 266.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point40",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point40,
                            { ...sConfig.points.point40, x: 58.41, y: 255.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point39",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point39,
                            { ...sConfig.points.point39, x: 57.45, y: 231.74 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point38",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point38,
                            { ...sConfig.points.point38, x: 53.82, y: 217.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point37",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point37,
                            { ...sConfig.points.point37, x: 49.43, y: 200.68 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point36",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point36,
                            { ...sConfig.points.point36, x: 39.97, y: 188.33 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point11,
                            { ...sConfig.points.point11, x: 33.19, y: 235.96 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point12,
                            { ...sConfig.points.point12, x: 32.13, y: 227.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            sConfig.points.point13,
                            { ...sConfig.points.point13, x: 31, y: 218.54 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
