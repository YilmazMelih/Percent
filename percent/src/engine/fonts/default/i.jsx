import { makeCopyDeltaFromInterpolation } from "../../project";

export const iConfig = {
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
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
            points: ["point5"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -32.06,
            y: 132.45,
        },
        point2: {
            x: 31.53,
            y: 132.45,
        },
        point3: {
            x: 30.44,
            y: 267.76,
        },
        point4: {
            x: -32.06,
            y: 267.76,
        },
        point5: {
            x: -31.53,
            y: 125.69,
        },
        point6: {
            x: -31.53,
            y: 80.77,
        },
        point7: {
            x: 32.06,
            y: 80.77,
        },
        point8: {
            x: 32.06,
            y: 125.69,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 31.49,
            pos: {
                x: -0.57,
                y: 190.24,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 22.46,
            pos: {
                x: 0,
                y: 103.23,
            },
            affects: [],
        },
    ],
};
