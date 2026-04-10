import { makeCopyDeltaFromInterpolation } from "../../project";

export const eConfig = {
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
            cmd: "C",
            points: ["point3", "point4", "point5"],
        },
        {
            cmd: "C",
            points: ["point6", "point7", "point7"],
        },
        {
            cmd: "L",
            points: ["point8"],
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
            points: ["point18", "point1", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point19"],
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
            cmd: "L",
            points: ["point19"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 78.86,
            y: 208.84,
        },
        point2: {
            x: -32.36,
            y: 208.84,
        },
        point3: {
            x: -32.36,
            y: 220.27,
            attach: "base",
        },
        point4: {
            x: -25.49,
            y: 234.41,
            attach: "base",
        },
        point5: {
            x: -6.13,
            y: 234.41,
            attach: "base",
        },
        point6: {
            x: 16.22,
            y: 234.41,
            attach: "base",
        },
        point7: {
            x: 18.78,
            y: 218.85,
            attach: "base",
        },
        point8: {
            x: 78.05,
            y: 227.24,
            attach: "base",
        },
        point9: {
            x: 69.88,
            y: 242.34,
            attach: "base",
        },
        point10: {
            x: 62.47,
            y: 269.92,
            attach: "base",
        },
        point11: {
            x: -6.13,
            y: 269.92,
            attach: "base",
        },
        point12: {
            x: -50.78,
            y: 269.92,
            attach: "base",
        },
        point13: {
            x: -91.4,
            y: 254.31,
            attach: "base",
        },
        point14: {
            x: -91.4,
            y: 194.82,
        },
        point15: {
            x: -91.4,
            y: 135.33,
            attach: "xh",
        },
        point16: {
            x: -25.05,
            y: 124.97,
            attach: "xh",
        },
        point17: {
            x: -6.13,
            y: 124.97,
            attach: "xh",
        },
        point18: {
            x: 91.41,
            y: 124.97,
            attach: "xh",
        },
        point19: {
            x: 20.95,
            y: 180.7,
        },
        point20: {
            x: 17.97,
            y: 165.82,
            attach: "xh",
        },
        point21: {
            x: 9.03,
            y: 157.16,
            attach: "xh",
        },
        point22: {
            x: -6.11,
            y: 157.97,
            attach: "xh",
        },
        point23: {
            x: -19.1,
            y: 158.78,
            attach: "xh",
        },
        point24: {
            x: -29.11,
            y: 167.71,
            attach: "xh",
        },
        point25: {
            x: -30.74,
            y: 180.7,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 26.67,
            pos: {
                x: -54.73,
                y: 229.36,
                attach: "base",
                ratio: 0.75,
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point12,
                            { ...eConfig.points.point12, x: -33.72, y: 268.76 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point13,
                            { ...eConfig.points.point13, x: -67.61, y: 254.31 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point14,
                            { ...eConfig.points.point14, x: -67.61, y: 194.82 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point15,
                            { ...eConfig.points.point15, x: -67.61, y: 138.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point16,
                            { ...eConfig.points.point16, x: -28.61, y: 124.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point23,
                            { ...eConfig.points.point23, x: -24.28, y: 158.78 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point24,
                            { ...eConfig.points.point24, x: -40.08, y: 167.71 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point25,
                            { ...eConfig.points.point25, x: -41.7, y: 180.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point2,
                            { ...eConfig.points.point2, x: -41.71, y: 208.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point3,
                            { ...eConfig.points.point3, x: -41.71, y: 220.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point4,
                            { ...eConfig.points.point4, x: -38.91, y: 234.41 },
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
            r: 21.61,
            pos: {
                x: 32.93,
                y: 154.05,
                attach: "xh",
                ratio: 0.9,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point1,
                            { ...eConfig.points.point1, x: 55.38, y: 208.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point18,
                            { ...eConfig.points.point18, x: 63.75, y: 126.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point17,
                            { ...eConfig.points.point17, x: -6.11, y: 126.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point19,
                            { ...eConfig.points.point19, x: 30.73, y: 180.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point20,
                            { ...eConfig.points.point20, x: 26.86, y: 161.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point21,
                            { ...eConfig.points.point21, x: 15.23, y: 157.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point22,
                            { ...eConfig.points.point22, x: -0.29, y: 157.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point23,
                            { ...eConfig.points.point23, x: -13.31, y: 157.97 },
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
            r: 21.79,
            pos: {
                x: 26.85,
                y: 245.47,
                attach: "base",
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point3,
                            { ...eConfig.points.point3, x: -32.36, y: 233.06 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point4,
                            { ...eConfig.points.point4, x: -25.49, y: 248.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point5,
                            { ...eConfig.points.point5, x: -6.13, y: 248.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point6,
                            { ...eConfig.points.point6, x: 25.34, y: 248.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point7,
                            { ...eConfig.points.point7, x: 30.98, y: 228.98 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point8,
                            { ...eConfig.points.point8, x: 53.74, y: 235.48 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point9,
                            { ...eConfig.points.point9, x: 45.56, y: 250.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point10,
                            { ...eConfig.points.point10, x: 33.52, y: 268 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "middle",
            default: 1,
            r: 14.11,
            pos: {
                x: -6.13,
                y: 194.81,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point2,
                            { ...eConfig.points.point2, x: -32.36, y: 204.08 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point1,
                            { ...eConfig.points.point1, x: 78.86, y: 204.08 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point19,
                            { ...eConfig.points.point19, x: 20.95, y: 186.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            eConfig.points.point25,
                            { ...eConfig.points.point25, x: -30.74, y: 186.66 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
