import { makeCopyDeltaFromInterpolation } from "../../project";

export const fConfig = {
    unicode: 102,
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
            cmd: "L",
            points: ["point4"],
        },
        {
            cmd: "L",
            points: ["point5"],
        },
        {
            cmd: "L",
            points: ["point6"],
        },
        {
            cmd: "L",
            points: ["point7"],
        },
        {
            cmd: "L",
            points: ["point8"],
        },
        {
            cmd: "L",
            points: ["point9"],
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
            cmd: "L",
            points: ["point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point19"],
        },
        {
            cmd: "C",
            points: ["point20", "point1", "point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 20.96,
            y: 132.72,
            attach: "xh",
        },
        point2: {
            x: 50.19,
            y: 132.18,
            attach: "xh",
        },
        point3: {
            x: 50.19,
            y: 172.77,
            attach: "xh",
        },
        point4: {
            x: 23.13,
            y: 171.96,
            attach: "xh",
        },
        point5: {
            x: 23.4,
            y: 267.49,
            attach: "base",
        },
        point6: {
            x: -38.3,
            y: 267.76,
            attach: "base",
        },
        point7: {
            x: -37.22,
            y: 171.96,
            attach: "xh",
        },
        point8: {
            x: -56.43,
            y: 172.5,
            attach: "xh",
        },
        point9: {
            x: -56.43,
            y: 132.18,
            attach: "xh",
        },
        point10: {
            x: -35.32,
            y: 132.99,
            attach: "xh",
        },
        point11: {
            x: -40.92,
            y: 106.66,
            attach: "cap",
        },
        point12: {
            x: -23.14,
            y: 88.88,
            attach: "cap",
        },
        point13: {
            x: -9.47,
            y: 75.21,
            attach: "cap",
        },
        point14: {
            x: 28.28,
            y: 68.04,
            attach: "cap",
        },
        point15: {
            x: 56.42,
            y: 80.76,
            attach: "cap",
        },
        point16: {
            x: 51.01,
            y: 120,
            attach: "cap",
        },
        point17: {
            x: 44.24,
            y: 114.59,
            attach: "cap",
        },
        point18: {
            x: 37.36,
            y: 114.21,
            attach: "cap",
        },
        point19: {
            x: 31.8,
            y: 115.7,
            attach: "cap",
        },
        point20: {
            x: 19.16,
            y: 119.09,
            attach: "cap",
        },
        point21: {
            x: 20.98,
            y: 132.71,
            attach: "xh",
        },
    },
    nodes: [
        {
            id: "0",
            name: "stem",
            default: 1,
            r: 30.33,
            pos: {
                x: -7.62,
                y: 213.77,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point6,
                            { ...fConfig.points.point6, x: -19.92, y: 265.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point7,
                            { ...fConfig.points.point7, x: -19.5, y: 171.96 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point10,
                            { ...fConfig.points.point10, x: -19.16, y: 132.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point11,
                            { ...fConfig.points.point11, x: -22, y: 109.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point12,
                            { ...fConfig.points.point12, x: -10.62, y: 93.22 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point13,
                            { ...fConfig.points.point13, x: -2.36, y: 81.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point14,
                            { ...fConfig.points.point14, x: 15.75, y: 76.18 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point15,
                            { ...fConfig.points.point15, x: 33.19, y: 76.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point16,
                            { ...fConfig.points.point16, x: 33.19, y: 96.15 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point17,
                            { ...fConfig.points.point17, x: 23.55, y: 96.31 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point18,
                            { ...fConfig.points.point18, x: 15.44, y: 97.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point19,
                            { ...fConfig.points.point19, x: 9.54, y: 103.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point20,
                            { ...fConfig.points.point20, x: 1.18, y: 112.15 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point21,
                            { ...fConfig.points.point21, x: 3.76, y: 132.71 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point4,
                            { ...fConfig.points.point4, x: 3.5, y: 171.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point5,
                            { ...fConfig.points.point5, x: 3.93, y: 265.53 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "crossbar",
            default: 1,
            r: 19.8,
            pos: {
                x: 29.32,
                y: 152.33,
                attach: "xh",
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point8,
                            { ...fConfig.points.point8, x: -56.43, y: 150.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point7,
                            { ...fConfig.points.point7, x: -37.22, y: 148.48 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point4,
                            { ...fConfig.points.point4, x: 23.13, y: 147.33 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point3,
                            { ...fConfig.points.point3, x: 50.19, y: 148.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point2,
                            { ...fConfig.points.point2, x: 50.19, y: 127.87 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point21,
                            { ...fConfig.points.point21, x: 20.98, y: 128.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point10,
                            { ...fConfig.points.point10, x: -35.32, y: 128.07 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            fConfig.points.point9,
                            { ...fConfig.points.point9, x: -56.43, y: 127.26 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
