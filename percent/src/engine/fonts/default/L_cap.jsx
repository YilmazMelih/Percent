import { makeCopyDeltaFromInterpolation } from "../../project";

export const LCapConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 80.5,
            y: 215.8,
        },
        point2: {
            x: 80.5,
            y: 267.76,
        },
        point3: {
            x: -80.51,
            y: 267.76,
        },
        point4: {
            x: -80.51,
            y: 80.76,
        },
        point5: {
            x: -3.11,
            y: 80.76,
        },
        point6: {
            x: -3.11,
            y: 216.61,
        },
        point7: {
            x: 80.51,
            y: 215.8,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 38.7,
            pos: {
                x: -41.82,
                y: 161.62,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 25.71,
            pos: {
                x: 37.23,
                y: 242.05,
            },
            affects: [],
        },
    ],
};
