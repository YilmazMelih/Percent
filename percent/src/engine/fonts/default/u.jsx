import { makeCopyDeltaFromInterpolation } from "../../project";

export const uConfig = {
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
            cmd: "L",
            points: ["point20"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -85.1,
            y: 132.72,
        },
        point2: {
            x: -23.13,
            y: 132.72,
        },
        point3: {
            x: -22.59,
            y: 188.74,
        },
        point4: {
            x: -23.13,
            y: 227.98,
        },
        point5: {
            x: -11.77,
            y: 228.52,
        },
        point6: {
            x: -4.46,
            y: 229.06,
        },
        point7: {
            x: 11.78,
            y: 230.68,
        },
        point8: {
            x: 22.87,
            y: 219.05,
        },
        point9: {
            x: 22.87,
            y: 201.19,
        },
        point10: {
            x: 22.6,
            y: 132.18,
        },
        point11: {
            x: 85.11,
            y: 132.45,
        },
        point12: {
            x: 85.11,
            y: 267.76,
        },
        point13: {
            x: 23.68,
            y: 267.76,
        },
        point14: {
            x: 23.68,
            y: 245.57,
        },
        point15: {
            x: 3.65,
            y: 270.47,
        },
        point16: {
            x: -28.82,
            y: 270.47,
        },
        point17: {
            x: -61.29,
            y: 270.47,
        },
        point18: {
            x: -85.11,
            y: 263.1,
        },
        point19: {
            x: -85.11,
            y: 191.99,
        },
        point20: {
            x: -85.11,
            y: 132.72,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 31.14,
            pos: {
                x: -53.96,
                y: 178.64,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 31.14,
            pos: {
                x: 53.97,
                y: 178.64,
            },
            affects: [],
        },
    ],
};
