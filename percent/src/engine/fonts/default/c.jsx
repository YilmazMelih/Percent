import { makeCopyDeltaFromInterpolation } from "../../project";

export const cConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point23"],
        },
        {
            cmd: "L",
            points: ["point2"],
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
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point12"],
        },
        {
            cmd: "L",
            points: ["point13"],
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
            points: ["point22", "point23", "point23"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 30.18,
            y: 208.76,
        },
        point2: {
            x: 85.66,
            y: 216.88,
            attach: "base",
        },
        point3: {
            x: 70.22,
            y: 269.92,
            attach: "base",
        },
        point4: {
            x: -2.83,
            y: 269.92,
            attach: "base",
        },
        point5: {
            x: -48.84,
            y: 269.92,
            attach: "base",
        },
        point6: {
            x: -85.67,
            y: 244.89,
            attach: "base",
        },
        point7: {
            x: -85.67,
            y: 197.33,
        },
        point8: {
            x: -85.67,
            y: 134.36,
            attach: "xh",
        },
        point9: {
            x: -19.82,
            y: 124.74,
            attach: "xh",
        },
        point10: {
            x: -0.01,
            y: 124.74,
            attach: "xh",
        },
        point11: {
            x: 70.83,
            y: 124.74,
            attach: "xh",
        },
        point12: {
            x: 83.22,
            y: 171.15,
            attach: "xh",
        },
        point13: {
            x: 27.2,
            y: 180.62,
            attach: "xh",
        },
        point14: {
            x: 25.03,
            y: 161.14,
            attach: "xh",
        },
        point15: {
            x: 2.03,
            y: 162.49,
            attach: "xh",
        },
        point16: {
            x: -7.71,
            y: 163.3,
            attach: "xh",
        },
        point17: {
            x: -26.87,
            y: 167.64,
            attach: "xh",
        },
        point18: {
            x: -26.87,
            y: 196.37,
        },
        point19: {
            x: -26.87,
            y: 225.1,
            attach: "base",
        },
        point20: {
            x: -4.39,
            y: 229.67,
            attach: "base",
        },
        point21: {
            x: 1.8,
            y: 229.67,
            attach: "base",
        },
        point22: {
            x: 26.36,
            y: 229.67,
            attach: "base",
        },
        point23: {
            x: 30.18,
            y: 208.77,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 29.47,
            pos: {
                x: -56.21,
                y: 197.33,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point6,
                            { ...cConfig.points.point6, x: -61.39, y: 229.81 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point7,
                            { ...cConfig.points.point7, x: -61.39, y: 194.76 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point8,
                            { ...cConfig.points.point8, x: -61.39, y: 138.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point17,
                            { ...cConfig.points.point17, x: -37.01, y: 160.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point18,
                            { ...cConfig.points.point18, x: -37.01, y: 195.3 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point19,
                            { ...cConfig.points.point19, x: -37.01, y: 233.63 },
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
            r: 18.94,
            pos: {
                x: -0.02,
                y: 143.63,
                attach: "xh",
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point9,
                            { ...cConfig.points.point9, x: -19.83, y: 126.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point10,
                            { ...cConfig.points.point10, x: -0.01, y: 126.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point11,
                            { ...cConfig.points.point11, x: 50.96, y: 126.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point12,
                            { ...cConfig.points.point12, x: 58.66, y: 162.5 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point13,
                            { ...cConfig.points.point13, x: 35.35, y: 168.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point14,
                            { ...cConfig.points.point14, x: 28.49, y: 144.61 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point15,
                            { ...cConfig.points.point15, x: 1.84, y: 144.61 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point16,
                            { ...cConfig.points.point16, x: -19.95, y: 144.61 },
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
            r: 20.08,
            pos: {
                x: 1.82,
                y: 249.89,
                attach: "base",
            },
            affects: [
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point20,
                            { ...cConfig.points.point20, x: -19.76, y: 247.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point21,
                            { ...cConfig.points.point21, x: 2.83, y: 247.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point22,
                            { ...cConfig.points.point22, x: 29.98, y: 247.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point23,
                            { ...cConfig.points.point23, x: 37.79, y: 226.19 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point2,
                            { ...cConfig.points.point2, x: 61.37, y: 231.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point3,
                            { ...cConfig.points.point3, x: 52.96, y: 268.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point4,
                            { ...cConfig.points.point4, x: -0.01, y: 268.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            cConfig.points.point5,
                            { ...cConfig.points.point5, x: -46.02, y: 268.2 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
