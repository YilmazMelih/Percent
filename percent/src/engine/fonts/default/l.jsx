import { makeCopyDeltaFromInterpolation } from "../../project";

export const lConfig = {
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
    ],
    points: {
        point1: {
            x: -31.12,
            y: 267.76,
        },
        point2: {
            x: -31.12,
            y: 81.04,
        },
        point3: {
            x: 31.12,
            y: 81.04,
        },
        point4: {
            x: 31.12,
            y: 267.76,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 31.12,
            pos: {
                x: 0,
                y: 174.4,
            },
            affects: [],
        },
    ],
};
