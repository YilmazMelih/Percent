import { makeCopyDeltaFromInterpolation } from "../../project";

export const uConfig = {
    unicode: 117,
    basePath: [
        {
            cmd: "M",
            points: ["point20"],
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
            cmd: "L",
            points: ["point13"],
        },
        {
            cmd: "L",
            points: ["point14"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point19"],
        },
        {
            cmd: "L",
            points: ["point20"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -85.1,
            y: 132.72,
            attach: "xh",
        },
        point2: {
            x: -23.13,
            y: 132.72,
            attach: "xh",
        },
        point3: {
            x: -22.59,
            y: 188.74,
            attach: "base",
        },
        point4: {
            x: -23.13,
            y: 227.98,
            attach: "base",
        },
        point5: {
            x: -11.77,
            y: 228.52,
            attach: "base",
        },
        point6: {
            x: -4.46,
            y: 229.06,
            attach: "base",
        },
        point7: {
            x: 11.78,
            y: 230.68,
            attach: "base",
        },
        point8: {
            x: 22.87,
            y: 219.05,
            attach: "base",
        },
        point9: {
            x: 22.87,
            y: 201.19,
            attach: "base",
        },
        point10: {
            x: 22.6,
            y: 132.18,
            attach: "xh",
        },
        point11: {
            x: 85.11,
            y: 132.45,
            attach: "xh",
        },
        point12: {
            x: 85.11,
            y: 267.76,
            attach: "base",
        },
        point13: {
            x: 23.68,
            y: 267.76,
            attach: "base",
        },
        point14: {
            x: 23.68,
            y: 245.57,
            attach: "base",
        },
        point15: {
            x: 3.65,
            y: 270.47,
            attach: "base",
        },
        point16: {
            x: -28.82,
            y: 270.47,
            attach: "base",
        },
        point17: {
            x: -61.29,
            y: 270.47,
            attach: "base",
        },
        point18: {
            x: -85.11,
            y: 263.1,
            attach: "base",
        },
        point19: {
            x: -85.11,
            y: 191.99,
            attach: "base",
        },
        point20: {
            x: -85.11,
            y: 132.72,
            attach: "xh",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.14,
            pos: {
                x: -53.96,
                y: 178.64,
            },
            affects: [
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point15,
                            { ...uConfig.points.point15, x: 18.7, y: 270.53 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point16,
                            { ...uConfig.points.point16, x: -9.08, y: 271.11 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point17,
                            { ...uConfig.points.point17, x: -58.39, y: 272.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point18,
                            { ...uConfig.points.point18, x: -57.86, y: 228.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point19,
                            { ...uConfig.points.point19, x: -57.86, y: 195.48 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point20,
                            { ...uConfig.points.point20, x: -58.39, y: 131.81 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point2,
                            { ...uConfig.points.point2, x: -33.73, y: 131.82 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point3,
                            { ...uConfig.points.point3, x: -33.3, y: 192.56 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point4,
                            { ...uConfig.points.point4, x: -33.84, y: 231.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point5,
                            { ...uConfig.points.point5, x: -29.45, y: 252.29 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point6,
                            { ...uConfig.points.point6, x: -4.45, y: 251.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point7,
                            { ...uConfig.points.point7, x: 15.04, y: 251.02 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 31.14,
            pos: {
                x: 53.97,
                y: 178.64,
            },
            affects: [
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point15,
                            { ...uConfig.points.point15, x: 19.61, y: 270.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point14,
                            { ...uConfig.points.point14, x: 35.1, y: 248.89 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point13,
                            { ...uConfig.points.point13, x: 35.36, y: 268.67 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point12,
                            { ...uConfig.points.point12, x: 58.39, y: 268.67 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point11,
                            { ...uConfig.points.point11, x: 58.13, y: 131.82 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point10,
                            { ...uConfig.points.point10, x: 34.27, y: 131.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point9,
                            { ...uConfig.points.point9, x: 34.04, y: 190.76 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point8,
                            { ...uConfig.points.point8, x: 34.04, y: 208.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            uConfig.points.point7,
                            { ...uConfig.points.point7, x: 30.58, y: 229.07 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
