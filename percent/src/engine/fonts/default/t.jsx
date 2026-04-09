import { makeCopyDeltaFromInterpolation } from "../../project";

export const tConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point26"],
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
            cmd: "L",
            points: ["point16"],
        },
        {
            cmd: "L",
            points: ["point17"],
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
            cmd: "C",
            points: ["point21", "point22", "point23"],
        },
        {
            cmd: "C",
            points: ["point24", "point25", "point25"],
        },
        {
            cmd: "L",
            points: ["point26"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 62.65,
            y: 258.56,
        },
        point2: {
            x: 31.53,
            y: 277.77,
        },
        point3: {
            x: -21.78,
            y: 276.15,
        },
        point4: {
            x: -34.77,
            y: 256.67,
        },
        point5: {
            x: -42.62,
            y: 244.49,
        },
        point6: {
            x: -42.35,
            y: 231.23,
        },
        point7: {
            x: -42.35,
            y: 209.04,
        },
        point8: {
            x: -41.81,
            y: 170.61,
        },
        point9: {
            x: -62.65,
            y: 171.15,
        },
        point10: {
            x: -62.65,
            y: 132.18,
        },
        point11: {
            x: -42.08,
            y: 132.45,
        },
        point12: {
            x: -42.35,
            y: 98.08,
        },
        point13: {
            x: 20.43,
            y: 82.11,
        },
        point14: {
            x: 19.62,
            y: 132.44,
        },
        point15: {
            x: 36.13,
            y: 131.9,
        },
        point16: {
            x: 51.01,
            y: 131.9,
        },
        point17: {
            x: 51.01,
            y: 171.14,
        },
        point18: {
            x: 34.5,
            y: 171.14,
        },
        point19: {
            x: 19.62,
            y: 170.6,
        },
        point20: {
            x: 20.16,
            y: 198.74,
        },
        point21: {
            x: 20.16,
            y: 213.89,
        },
        point22: {
            x: 19.62,
            y: 224.72,
        },
        point23: {
            x: 34.77,
            y: 224.18,
        },
        point24: {
            x: 42.62,
            y: 223.91,
        },
        point25: {
            x: 53.44,
            y: 217.41,
        },
        point26: {
            x: 62.64,
            y: 258.54,
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 31.1,
            pos: {
                x: -11.22,
                y: 205.85,
            },
            affects: [
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point13,
                            { ...tConfig.points.point13, x: 3.79, y: 81.44 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point14,
                            { ...tConfig.points.point14, x: 3.01, y: 132.44 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point19,
                            { ...tConfig.points.point19, x: 3.14, y: 170.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point20,
                            { ...tConfig.points.point20, x: 3.39, y: 231.02 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point21,
                            { ...tConfig.points.point21, x: 3.39, y: 242.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point22,
                            { ...tConfig.points.point22, x: 4.51, y: 246.76 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point23,
                            { ...tConfig.points.point23, x: 8.42, y: 249.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point24,
                            { ...tConfig.points.point24, x: 16.57, y: 256.75 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point25,
                            { ...tConfig.points.point25, x: 35.23, y: 248.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point26,
                            { ...tConfig.points.point26, x: 40.64, y: 270.06 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point2,
                            { ...tConfig.points.point2, x: 1.98, y: 277.11 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point3,
                            { ...tConfig.points.point3, x: -7.83, y: 268.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point4,
                            { ...tConfig.points.point4, x: -13.17, y: 261.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point5,
                            { ...tConfig.points.point5, x: -21.02, y: 248.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point6,
                            { ...tConfig.points.point6, x: -19.77, y: 231.29 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point7,
                            { ...tConfig.points.point7, x: -19.77, y: 209.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point8,
                            { ...tConfig.points.point8, x: -19.52, y: 170.59 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point11,
                            { ...tConfig.points.point11, x: -19.52, y: 132.43 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point12,
                            { ...tConfig.points.point12, x: -19.52, y: 90.65 },
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
            r: 19.19,
            pos: {
                x: 24.25,
                y: 151.55,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point9,
                            { ...tConfig.points.point9, x: -62.65, y: 151.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point8,
                            { ...tConfig.points.point8, x: -41.81, y: 151.1 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point19,
                            { ...tConfig.points.point19, x: 19.62, y: 150.82 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            tConfig.points.point17,
                            { ...tConfig.points.point17, x: 51.01, y: 151.36 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
