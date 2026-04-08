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
            name: "node1",
            default: 1,
            r: 31.26,
            pos: {
                x: -54.38,
                y: 216,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 31.26,
            pos: {
                x: 53.46,
                y: 216,
            },
            affects: [],
        },
    ],
};
