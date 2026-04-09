import { makeCopyDeltaFromInterpolation } from "../../project";

export const jConfig = {
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
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point17"],
        },
        {
            cmd: "L",
            points: ["point18"],
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
            points: ["point17"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -1.77,
            y: 132.46,
        },
        point2: {
            x: 62.91,
            y: 132.46,
        },
        point3: {
            x: 62.1,
            y: 256.67,
        },
        point4: {
            x: 62.64,
            y: 301.86,
        },
        point5: {
            x: 32.88,
            y: 326.49,
        },
        point6: {
            x: -9.61,
            y: 326.49,
        },
        point7: {
            x: -26.93,
            y: 326.49,
        },
        point8: {
            x: -44.52,
            y: 322.43,
        },
        point9: {
            x: -62.92,
            y: 304.84,
        },
        point10: {
            x: -37.48,
            y: 271.01,
        },
        point11: {
            x: -30.44,
            y: 279.67,
        },
        point12: {
            x: -21.51,
            y: 280.48,
        },
        point13: {
            x: -13.39,
            y: 281.02,
        },
        point14: {
            x: -2.3,
            y: 280.48,
        },
        point15: {
            x: -1.75,
            y: 258.56,
        },
        point16: {
            x: -1.75,
            y: 132.45,
        },
        point17: {
            x: -0.96,
            y: 125.42,
        },
        point18: {
            x: -0.96,
            y: 80.77,
        },
        point19: {
            x: 62.9,
            y: 80.77,
        },
        point20: {
            x: 62.9,
            y: 125.42,
        },
    },
    nodes: [
        {
            id: "0",
            name: "dot",
            default: 1,
            r: 22.33,
            pos: {
                x: 30.97,
                y: 103.1,
            },
            affects: [
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point18,
                            { ...jConfig.points.point18, x: -0.96, y: 80.77 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point17,
                            { ...jConfig.points.point17, x: -0.96, y: 104.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point20,
                            { ...jConfig.points.point20, x: 22.63, y: 104.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point19,
                            { ...jConfig.points.point19, x: 22.63, y: 80.77 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "bar",
            default: 1,
            r: 32.3,
            pos: {
                x: 30.6,
                y: 194.82,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point2,
                            { ...jConfig.points.point2, x: 22.63 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point3,
                            { ...jConfig.points.point3, x: 22.17, y: 253.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point4,
                            { ...jConfig.points.point4, x: 22.71, y: 299.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point5,
                            { ...jConfig.points.point5, x: 19.15, y: 327.3 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "tail",
            default: 1,
            r: 22.36,
            pos: {
                x: -22.58,
                y: 302.82,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point4,
                            { ...jConfig.points.point4, x: 62.69, y: 294.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point5,
                            { ...jConfig.points.point5, x: 32.39, y: 312.73 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point6,
                            { ...jConfig.points.point6, x: -9.01, y: 322.31 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point7,
                            { ...jConfig.points.point7, x: -17.32, y: 324.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point8,
                            { ...jConfig.points.point8, x: -26.22, y: 324.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point9,
                            { ...jConfig.points.point9, x: -29.55, y: 324.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point10,
                            { ...jConfig.points.point10, x: -29.55, y: 300.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point11,
                            { ...jConfig.points.point11, x: -20.47, y: 302.82 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point12,
                            { ...jConfig.points.point12, x: -10.97, y: 298.59 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            jConfig.points.point13,
                            { ...jConfig.points.point13, x: -3.54, y: 295.28 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
