import { makeCopyDeltaFromInterpolation } from "../../project";

export const TCapConfig = {
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 88.63,
            y: 125.69,
        },
        point2: {
            x: 33.41,
            y: 125.96,
        },
        point3: {
            x: 33.69,
            y: 267.76,
        },
        point4: {
            x: -33.97,
            y: 267.76,
        },
        point5: {
            x: -33.97,
            y: 125.96,
        },
        point6: {
            x: -88.63,
            y: 125.69,
        },
        point7: {
            x: -88.63,
            y: 80.5,
        },
        point8: {
            x: 88.63,
            y: 80.5,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 33.76,
            pos: {
                x: -0.19,
                y: 189.05,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 22.65,
            pos: {
                x: 58.11,
                y: 103.15,
            },
            affects: [],
        },
    ],
};
