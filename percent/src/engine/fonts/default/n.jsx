import { makeCopyDeltaFromInterpolation } from "../../project";

export const nConfig = {
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
            points: ["point23"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 85.1,
            y: 267.22,
        },
        point2: {
            x: 23.13,
            y: 267.22,
        },
        point3: {
            x: 22.59,
            y: 211.2,
        },
        point4: {
            x: 23.13,
            y: 172.23,
        },
        point5: {
            x: 11.77,
            y: 171.42,
        },
        point6: {
            x: 4.46,
            y: 170.88,
        },
        point7: {
            x: -11.78,
            y: 169.26,
        },
        point8: {
            x: -22.87,
            y: 180.89,
        },
        point9: {
            x: -22.87,
            y: 199.02,
        },
        point10: {
            x: -22.6,
            y: 267.76,
        },
        point11: {
            x: -85.11,
            y: 267.76,
        },
        point12: {
            x: -85.11,
            y: 132.19,
        },
        point13: {
            x: -23.68,
            y: 132.19,
        },
        point14: {
            x: -23.68,
            y: 154.38,
        },
        point15: {
            x: -3.93,
            y: 129.48,
        },
        point16: {
            x: 28.82,
            y: 129.48,
        },
        point17: {
            x: 79.03,
            y: 129.48,
        },
        point18: {
            x: 85.11,
            y: 156.5,
        },
        point19: {
            x: 85.11,
            y: 207.96,
        },
        point20: {
            x: 84.57,
            y: 174.67,
        },
        point21: {
            x: 85.11,
            y: 191.72,
        },
        point22: {
            x: 85.11,
            y: 207.96,
        },
        point23: {
            x: 85.11,
            y: 267.22,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.12,
            pos: {
                x: -54,
                y: 223.68,
            },
            affects: [
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point15,
                            { ...nConfig.points.point15, x: -18.08, y: 129.48 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point14,
                            { ...nConfig.points.point14, x: -35.09, y: 151.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point13,
                            { ...nConfig.points.point13, x: -35.36, y: 131.42 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point12,
                            { ...nConfig.points.point12, x: -58.39, y: 131.42 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point11,
                            { ...nConfig.points.point11, x: -58.12, y: 268.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point10,
                            { ...nConfig.points.point10, x: -34.27, y: 268.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point9,
                            { ...nConfig.points.point9, x: -34.27, y: 198.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point8,
                            { ...nConfig.points.point8, x: -34.27, y: 180.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point7,
                            { ...nConfig.points.point7, x: -20.93, y: 170.88 },
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
            r: 32.32,
            pos: {
                x: 47.89,
                y: 166.3,
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point8,
                            { ...nConfig.points.point8, x: -22.88, y: 170.61 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point7,
                            { ...nConfig.points.point7, x: -12.42, y: 149.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point6,
                            { ...nConfig.points.point6, x: 3.87, y: 148.18 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point5,
                            { ...nConfig.points.point5, x: 11.73, y: 147.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point4,
                            { ...nConfig.points.point4, x: 33.73, y: 150.71 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point3,
                            { ...nConfig.points.point3, x: 33.19, y: 189.68 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point2,
                            { ...nConfig.points.point2, x: 33.73, y: 268.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point23,
                            { ...nConfig.points.point23, x: 58.4, y: 268.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point19,
                            { ...nConfig.points.point19, x: 57.62, y: 196.42 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point18,
                            { ...nConfig.points.point18, x: 57.35, y: 176.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point17,
                            { ...nConfig.points.point17, x: 60.11, y: 129 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point16,
                            { ...nConfig.points.point16, x: 10.39, y: 129 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            nConfig.points.point15,
                            { ...nConfig.points.point15, x: -11.89, y: 129 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
