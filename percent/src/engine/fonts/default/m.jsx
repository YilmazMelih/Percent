import { makeCopyDeltaFromInterpolation } from "../../project";

export const mConfig = {
    unicode: 109,
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
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
            points: ["point4", "point5", "point6"],
        },
        {
            cmd: "C",
            points: ["point7", "point8", "point9"],
        },
        {
            cmd: "L",
            points: ["point10"],
        },
        {
            cmd: "L",
            points: ["point11"],
        },
        {
            cmd: "L",
            points: ["point12"],
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
            cmd: "L",
            points: ["point19"],
        },
        {
            cmd: "L",
            points: ["point20"],
        },
        {
            cmd: "L",
            points: ["point21"],
        },
        {
            cmd: "L",
            points: ["point22"],
        },
        {
            cmd: "L",
            points: ["point23"],
        },
        {
            cmd: "C",
            points: ["point23", "point24", "point25"],
        },
        {
            cmd: "C",
            points: ["point26", "point27", "point28"],
        },
        {
            cmd: "C",
            points: ["point29", "point30", "point31"],
        },
        {
            cmd: "C",
            points: ["point32", "point33", "point34"],
        },
        {
            cmd: "C",
            points: ["point35", "point36", "point36"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 137.95,
            y: 267.49,
            attach: "base",
        },
        point2: {
            x: 75.72,
            y: 267.49,
            attach: "base",
        },
        point3: {
            x: 75.44,
            y: 209.43,
            attach: "xh",
        },
        point4: {
            x: 75.44,
            y: 179.54,
            attach: "xh",
        },
        point5: {
            x: 68.23,
            y: 170.07,
            attach: "xh",
        },
        point6: {
            x: 53.85,
            y: 170.07,
            attach: "xh",
        },
        point7: {
            x: 37.45,
            y: 170.07,
            attach: "xh",
        },
        point8: {
            x: 30.78,
            y: 189.61,
            attach: "xh",
        },
        point9: {
            x: 30.78,
            y: 205.52,
            attach: "xh",
        },
        point10: {
            x: 31.59,
            y: 267.22,
            attach: "base",
        },
        point11: {
            x: -30.65,
            y: 267.22,
            attach: "base",
        },
        point12: {
            x: -30.92,
            y: 211.2,
            attach: "xh",
        },
        point13: {
            x: -30.92,
            y: 178.8,
            attach: "xh",
        },
        point14: {
            x: -38.34,
            y: 170.88,
            attach: "xh",
        },
        point15: {
            x: -51.49,
            y: 170.88,
            attach: "xh",
        },
        point16: {
            x: -65.85,
            y: 170.88,
            attach: "xh",
        },
        point17: {
            x: -76.39,
            y: 181.66,
            attach: "xh",
        },
        point18: {
            x: -76.39,
            y: 198.75,
            attach: "xh",
        },
        point19: {
            x: -76.12,
            y: 267.76,
            attach: "base",
        },
        point20: {
            x: -138.62,
            y: 267.76,
            attach: "base",
        },
        point21: {
            x: -138.62,
            y: 132.18,
            attach: "xh",
        },
        point22: {
            x: -77.19,
            y: 131.91,
            attach: "xh",
        },
        point23: {
            x: -77.19,
            y: 151.39,
            attach: "xh",
        },
        point24: {
            x: -60.96,
            y: 129.47,
            attach: "xh",
        },
        point25: {
            x: -24.69,
            y: 129.47,
            attach: "xh",
        },
        point26: {
            x: 16.45,
            y: 129.47,
            attach: "xh",
        },
        point27: {
            x: 23.75,
            y: 150.04,
            attach: "xh",
        },
        point28: {
            x: 25.64,
            y: 155.99,
            attach: "xh",
        },
        point29: {
            x: 37.82,
            y: 138.67,
            attach: "xh",
        },
        point30: {
            x: 60.56,
            y: 130.28,
            attach: "xh",
        },
        point31: {
            x: 81.66,
            y: 129.74,
            attach: "xh",
        },
        point32: {
            x: 111.44,
            y: 129.2,
            attach: "xh",
        },
        point33: {
            x: 130.56,
            y: 138.91,
            attach: "xh",
        },
        point34: {
            x: 135.25,
            y: 166,
            attach: "xh",
        },
        point35: {
            x: 138.62,
            y: 189.79,
            attach: "xh",
        },
        point36: {
            x: 137.95,
            y: 267.48,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.15,
            pos: {
                x: -107.47,
                y: 215.39,
            },
            affects: [
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point20,
                            { ...mConfig.points.point20, x: -101.96, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point21,
                            { ...mConfig.points.point21, x: -102.23, y: 131.54 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 30.85,
            pos: {
                x: -0.04,
                y: 220.11,
            },
            affects: [
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point17,
                            { ...mConfig.points.point17, x: -76.38, y: 167.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point16,
                            { ...mConfig.points.point16, x: -60.72, y: 149.05 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point15,
                            { ...mConfig.points.point15, x: -46.41, y: 147.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point14,
                            { ...mConfig.points.point14, x: -12, y: 144.78 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point13,
                            { ...mConfig.points.point13, x: -12.72, y: 171.96 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point12,
                            { ...mConfig.points.point12, x: -12.72, y: 210.79 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point11,
                            { ...mConfig.points.point11, x: -12.53, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point10,
                            { ...mConfig.points.point10, x: 11.32, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point9,
                            { ...mConfig.points.point9, x: 11.32, y: 198.61 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point8,
                            { ...mConfig.points.point8, x: 11.32, y: 172.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point24,
                            { ...mConfig.points.point24, x: -64.89, y: 129.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point25,
                            { ...mConfig.points.point25, x: -36.38, y: 129.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point26,
                            { ...mConfig.points.point26, x: -3.71, y: 129.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point27,
                            { ...mConfig.points.point27, x: 4.54, y: 150.52 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point28",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point28,
                            { ...mConfig.points.point28, x: 6.44, y: 156.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point29",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point29,
                            { ...mConfig.points.point29, x: 18.63, y: 139.15 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 30.85,
            pos: {
                x: 107.1,
                y: 220.11,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point7,
                            { ...mConfig.points.point7, x: 33.26, y: 149.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point6,
                            { ...mConfig.points.point6, x: 51.96, y: 148.15 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point5,
                            { ...mConfig.points.point5, x: 72.98, y: 146.54 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point4,
                            { ...mConfig.points.point4, x: 77.02, y: 170.3 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point3,
                            { ...mConfig.points.point3, x: 77.02, y: 208.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point2,
                            { ...mConfig.points.point2, x: 77.44, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point36",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point36,
                            { ...mConfig.points.point36, x: 101.56, y: 268.11 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point35",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point35,
                            { ...mConfig.points.point35, x: 100.92, y: 213.56 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point34",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point34,
                            { ...mConfig.points.point34, x: 100.92, y: 185.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point33",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point33,
                            { ...mConfig.points.point33, x: 100.92, y: 137.19 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point32",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point32,
                            { ...mConfig.points.point32, x: 75.97, y: 128.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point31",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point31,
                            { ...mConfig.points.point31, x: 62.23, y: 129.44 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point30",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point30,
                            { ...mConfig.points.point30, x: 40.71, y: 131.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point29",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            mConfig.points.point29,
                            { ...mConfig.points.point29, x: 29.54, y: 142.4 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
