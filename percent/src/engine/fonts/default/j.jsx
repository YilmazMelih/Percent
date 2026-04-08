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
            name: "node1",
            default: 1,
            r: 22.33,
            pos: {
                x: 30.97,
                y: 103.1,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 32.3,
            pos: {
                x: 30.6,
                y: 194.82,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 22.36,
            pos: {
                x: -22.58,
                y: 302.82,
            },
            affects: [],
        },
    ],
};
