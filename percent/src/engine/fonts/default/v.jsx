import { makeCopyDeltaFromInterpolation } from "../../project";

export const vConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 86.45,
            y: 131.64,
        },
        point2: {
            x: 35.85,
            y: 268.03,
        },
        point3: {
            x: -36.67,
            y: 267.76,
        },
        point4: {
            x: -86.46,
            y: 131.64,
        },
        point5: {
            x: -17.18,
            y: 131.64,
        },
        point6: {
            x: -0.67,
            y: 218.51,
        },
        point7: {
            x: 0.68,
            y: 218.51,
        },
        point8: {
            x: 18.27,
            y: 131.64,
        },
        point9: {
            x: 86.46,
            y: 131.64,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 28.49,
            pos: {
                x: -35.52,
                y: 187.74,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 28.11,
            pos: {
                x: 35.6,
                y: 187.74,
            },
            affects: [],
        },
    ],
};
