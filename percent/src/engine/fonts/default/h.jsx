import { makeCopyDeltaFromInterpolation } from "../../project";

export const hConfig = {
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
            cmd: "C",
            points: ["point20", "point21", "point21"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 84.58,
            y: 267.22,
        },
        point2: {
            x: 22.61,
            y: 267.22,
        },
        point3: {
            x: 21.91,
            y: 210.58,
        },
        point4: {
            x: 21.91,
            y: 184.65,
        },
        point5: {
            x: 17.09,
            y: 174.26,
        },
        point6: {
            x: 3.62,
            y: 174.26,
        },
        point7: {
            x: -11.45,
            y: 174.26,
        },
        point8: {
            x: -23.12,
            y: 183.57,
        },
        point9: {
            x: -23.12,
            y: 211.47,
        },
        point10: {
            x: -23.12,
            y: 267.76,
        },
        point11: {
            x: -85.63,
            y: 267.76,
        },
        point12: {
            x: -85.63,
            y: 80.76,
        },
        point13: {
            x: -24.2,
            y: 80.76,
        },
        point14: {
            x: -24.2,
            y: 158.7,
        },
        point15: {
            x: -5.53,
            y: 129.74,
        },
        point16: {
            x: 28.3,
            y: 129.47,
        },
        point17: {
            x: 58.07,
            y: 129.2,
        },
        point18: {
            x: 75.93,
            y: 139.48,
        },
        point19: {
            x: 81.88,
            y: 165.73,
        },
        point20: {
            x: 85.63,
            y: 185.76,
        },
        point21: {
            x: 84.59,
            y: 267.21,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.26,
            pos: {
                x: -54.38,
                y: 216,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point10,
                            { ...hConfig.points.point10, x: -34.79, y: 268.56 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point9,
                            { ...hConfig.points.point9, x: -34.79, y: 211.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point8,
                            { ...hConfig.points.point8, x: -34.79, y: 183.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point14,
                            { ...hConfig.points.point14, x: -35.61, y: 151.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point15,
                            { ...hConfig.points.point15, x: -21.56, y: 129.47 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point13,
                            { ...hConfig.points.point13, x: -35.88, y: 79.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point12,
                            { ...hConfig.points.point12, x: -58.91, y: 79.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point11,
                            { ...hConfig.points.point11, x: -58.64, y: 268.56 },
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
            r: 31.26,
            pos: {
                x: 53.46,
                y: 216,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point7,
                            { ...hConfig.points.point7, x: -22.26, y: 148.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point6,
                            { ...hConfig.points.point6, x: 3.63, y: 148.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point5,
                            { ...hConfig.points.point5, x: 31.7, y: 148.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point4,
                            { ...hConfig.points.point4, x: 32.77, y: 174.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point3,
                            { ...hConfig.points.point3, x: 32.77, y: 203.76 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point2,
                            { ...hConfig.points.point2, x: 33.22, y: 268.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point21,
                            { ...hConfig.points.point21, x: 57.88, y: 268.56 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point20,
                            { ...hConfig.points.point20, x: 57.08, y: 196 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point19,
                            { ...hConfig.points.point19, x: 56.55, y: 176.3 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point18,
                            { ...hConfig.points.point18, x: 56.55, y: 145.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point17,
                            { ...hConfig.points.point17, x: 33.65, y: 129.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point16,
                            { ...hConfig.points.point16, x: 8.57, y: 129.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            hConfig.points.point15,
                            { ...hConfig.points.point15, x: -25.27, y: 129.27 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
