import { makeCopyDeltaFromInterpolation } from "../../project";

export const rConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point1", "point2", "point3"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point5"],
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
            cmd: "C",
            points: ["point9", "point10", "point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point13"],
        },
        {
            cmd: "L",
            points: ["point14"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 39.91,
            y: 190.91,
        },
        point2: {
            x: 22.87,
            y: 174.94,
        },
        point3: {
            x: 6.63,
            y: 188.47,
        },
        point4: {
            x: -6.45,
            y: 201.55,
        },
        point5: {
            x: 1.49,
            y: 267.76,
        },
        point6: {
            x: -61.56,
            y: 267.76,
        },
        point7: {
            x: -61.56,
            y: 132.45,
        },
        point8: {
            x: 0.14,
            y: 132.45,
        },
        point9: {
            x: 0.41,
            y: 160.59,
        },
        point10: {
            x: 11.5,
            y: 131.63,
        },
        point11: {
            x: 41.53,
            y: 131.63,
        },
        point12: {
            x: 56.41,
            y: 131.63,
        },
        point13: {
            x: 61.56,
            y: 135.42,
        },
        point14: {
            x: 39.91,
            y: 190.9,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 30.34,
            pos: {
                x: -31.23,
                y: 226,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 22.87,
            pos: {
                x: 27.33,
                y: 160.53,
            },
            affects: [],
        },
    ],
};
