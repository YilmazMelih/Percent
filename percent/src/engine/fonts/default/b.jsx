import { makeCopyDeltaFromInterpolation } from "../../project";

export const bConfig = {
    unicode: 98,
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
            cmd: "L",
            points: ["point11"],
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
            x: 88.63,
            y: 203.36,
        },
        point2: {
            x: 88.63,
            y: 243.14,
            attach: "base",
        },
        point3: {
            x: 65.9,
            y: 261,
            attach: "base",
        },
        point4: {
            x: 43.97,
            y: 266.68,
            attach: "base",
        },
        point5: {
            x: -7.17,
            y: 279.4,
            attach: "base",
        },
        point6: {
            x: -26.38,
            y: 250.71,
            attach: "base",
        },
        point7: {
            x: -26.38,
            y: 267.76,
            attach: "base",
        },
        point8: {
            x: -88.63,
            y: 267.76,
            attach: "base",
        },
        point9: {
            x: -88.63,
            y: 56.04,
            attach: "asc",
        },
        point10: {
            x: -26.38,
            y: 55.77,
            attach: "asc",
        },
        point11: {
            x: -26.38,
            y: 151.4,
            attach: "xh",
        },
        point12: {
            x: -15.28,
            y: 132.73,
            attach: "xh",
        },
        point13: {
            x: 8.53,
            y: 128.94,
            attach: "xh",
        },
        point14: {
            x: 52.91,
            y: 122.17,
            attach: "xh",
        },
        point15: {
            x: 88.63,
            y: 143.28,
            attach: "xh",
        },
        point16: {
            x: 26.66,
            y: 200.38,
        },
        point17: {
            x: 26.66,
            y: 178.73,
            attach: "xh",
        },
        point18: {
            x: 13.13,
            y: 163.3,
            attach: "xh",
        },
        point19: {
            x: -5,
            y: 167.09,
            attach: "xh",
        },
        point20: {
            x: -16.91,
            y: 169.8,
            attach: "xh",
        },
        point21: {
            x: -25.31,
            y: 183.6,
            attach: "xh",
        },
        point22: {
            x: -25.31,
            y: 200.65,
        },
        point23: {
            x: -25.31,
            y: 219.86,
            attach: "base",
        },
        point24: {
            x: -18.53,
            y: 234.21,
            attach: "base",
        },
        point25: {
            x: -4.19,
            y: 236.1,
            attach: "base",
        },
        point26: {
            x: 15.28,
            y: 238.81,
            attach: "base",
        },
        point27: {
            x: 26.66,
            y: 223.65,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.66,
            pos: {
                x: -56.96,
                y: 198.18,
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point8,
                            { ...bConfig.points.point8, x: -49.41, y: 267.73 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point9,
                            { ...bConfig.points.point9, x: -49.41, y: 79.12 },
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
            r: 30.99,
            pos: {
                x: 57.65,
                y: 201.47,
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point12,
                            { ...bConfig.points.point12, x: -15.58, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point13,
                            { ...bConfig.points.point13, x: 8.53, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point14,
                            { ...bConfig.points.point14, x: 53.77, y: 128.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point15,
                            { ...bConfig.points.point15, x: 67.7, y: 162.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point1,
                            { ...bConfig.points.point1, x: 67.7, y: 201.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point2,
                            { ...bConfig.points.point2, x: 67.7, y: 241.25 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point3,
                            { ...bConfig.points.point3, x: 48.48, y: 271.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point4,
                            { ...bConfig.points.point4, x: 9.98, y: 271.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point5,
                            { ...bConfig.points.point5, x: -12.22, y: 271.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point23,
                            { ...bConfig.points.point23, x: -25.3, y: 235.34 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point24,
                            { ...bConfig.points.point24, x: -5.44, y: 251.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point25,
                            { ...bConfig.points.point25, x: 5.1, y: 251.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point26,
                            { ...bConfig.points.point26, x: 35.86, y: 251.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point27,
                            { ...bConfig.points.point27, x: 45.18, y: 223.65 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point16,
                            { ...bConfig.points.point16, x: 45.18, y: 200.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point17,
                            { ...bConfig.points.point17, x: 45.18, y: 165.3 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point18,
                            { ...bConfig.points.point18, x: 31.27, y: 146.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point19,
                            { ...bConfig.points.point19, x: 5.1, y: 146.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point20,
                            { ...bConfig.points.point20, x: -4.05, y: 146.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            bConfig.points.point21,
                            { ...bConfig.points.point21, x: -25.3, y: 159.83 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
