import { makeCopyDeltaFromInterpolation } from "../../project";

export const dConfig = {
    unicode: 100,
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point2", "point3", "point3"],
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
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point19"],
        },
        {
            cmd: "C",
            points: ["point20", "point21", "point22"],
        },
        {
            cmd: "C",
            points: ["point23", "point24", "point25"],
        },
        {
            cmd: "C",
            points: ["point26", "point27", "point16"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -8.53,
            y: 128.94,
            attach: "xh",
        },
        point2: {
            x: 15.28,
            y: 132.73,
            attach: "xh",
        },
        point3: {
            x: 26.39,
            y: 151.4,
            attach: "xh",
        },
        point4: {
            x: 26.39,
            y: 55.77,
            attach: "asc",
        },
        point5: {
            x: 88.63,
            y: 56.04,
            attach: "asc",
        },
        point6: {
            x: 88.63,
            y: 267.76,
            attach: "base",
        },
        point7: {
            x: 26.39,
            y: 267.76,
            attach: "base",
        },
        point8: {
            x: 26.39,
            y: 250.71,
            attach: "base",
        },
        point9: {
            x: 7.18,
            y: 279.39,
            attach: "base",
        },
        point10: {
            x: -43.97,
            y: 266.68,
            attach: "base",
        },
        point11: {
            x: -65.89,
            y: 261,
            attach: "base",
        },
        point12: {
            x: -88.63,
            y: 243.14,
            attach: "base",
        },
        point13: {
            x: -88.63,
            y: 203.36,
        },
        point14: {
            x: -88.63,
            y: 143.28,
            attach: "xh",
        },
        point15: {
            x: -52.91,
            y: 122.18,
            attach: "xh",
        },
        point16: {
            x: 4.19,
            y: 236.1,
            attach: "base",
        },
        point17: {
            x: 18.53,
            y: 233.93,
            attach: "base",
        },
        point18: {
            x: 25.31,
            y: 219.86,
            attach: "base",
        },
        point19: {
            x: 25.31,
            y: 200.65,
        },
        point20: {
            x: 25.31,
            y: 183.6,
            attach: "xh",
        },
        point21: {
            x: 16.91,
            y: 169.8,
            attach: "xh",
        },
        point22: {
            x: 5,
            y: 167.09,
            attach: "xh",
        },
        point23: {
            x: -13.13,
            y: 163.3,
            attach: "xh",
        },
        point24: {
            x: -26.66,
            y: 178.73,
            attach: "xh",
        },
        point25: {
            x: -26.66,
            y: 200.38,
        },
        point26: {
            x: -26.66,
            y: 223.65,
            attach: "base",
        },
        point27: {
            x: -15.28,
            y: 238.81,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 30.99,
            pos: {
                x: -57.65,
                y: 201.47,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point2,
                            { ...dConfig.points.point2, x: 15.59, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point1,
                            { ...dConfig.points.point1, x: -8.52, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point15,
                            { ...dConfig.points.point15, x: -49.48, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point14,
                            { ...dConfig.points.point14, x: -59.61, y: 166.89 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point13,
                            { ...dConfig.points.point13, x: -59.61, y: 203.36 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point12,
                            { ...dConfig.points.point12, x: -59.61, y: 239.83 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point11,
                            { ...dConfig.points.point11, x: -43.21, y: 262.34 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point10,
                            { ...dConfig.points.point10, x: -21.29, y: 268.02 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point9,
                            { ...dConfig.points.point9, x: 22.82, y: 278.02 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point18,
                            { ...dConfig.points.point18, x: 25.31, y: 227.5 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point17,
                            { ...dConfig.points.point17, x: 19.38, y: 248.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point16,
                            { ...dConfig.points.point16, x: 4.2, y: 251.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point27,
                            { ...dConfig.points.point27, x: -28.42, y: 257.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point26,
                            { ...dConfig.points.point26, x: -37.12, y: 226.22 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point25,
                            { ...dConfig.points.point25, x: -37.12, y: 200.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point24,
                            { ...dConfig.points.point24, x: -37.12, y: 178.73 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point23,
                            { ...dConfig.points.point23, x: -32.44, y: 137.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point22,
                            { ...dConfig.points.point22, x: 0.55, y: 146.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point21,
                            { ...dConfig.points.point21, x: 14.51, y: 150.28 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point20,
                            { ...dConfig.points.point20, x: 25.31, y: 173.8 },
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
            r: 31.66,
            pos: {
                x: 56.96,
                y: 201.47,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point6,
                            { ...dConfig.points.point6, x: 49.42 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            dConfig.points.point5,
                            { ...dConfig.points.point5, x: 49.42 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
