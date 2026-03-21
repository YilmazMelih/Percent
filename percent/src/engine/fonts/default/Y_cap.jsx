import { makeCopyDeltaFromInterpolation } from "../../project";

export const YCapConfig = {
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
            cmd: "L",
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 31.25,
            y: 187.39,
        },
        point2: {
            x: 32.34,
            y: 267.76,
        },
        point3: {
            x: -35.85,
            y: 267.49,
        },
        point4: {
            x: -35.04,
            y: 188.47,
        },
        point5: {
            x: -101.61,
            y: 81.04,
        },
        point6: {
            x: -29.63,
            y: 81.04,
        },
        point7: {
            x: -0.13,
            y: 150.86,
        },
        point8: {
            x: 31.53,
            y: 80.77,
        },
        point9: {
            x: 101.61,
            y: 81.31,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 33.48,
            pos: {
                x: -1.61,
                y: 226.13,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 28.75,
            pos: {
                x: -46.88,
                y: 114.52,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 27.61,
            pos: {
                x: 46.87,
                y: 114.07,
            },
            affects: [],
        },
    ],
};
