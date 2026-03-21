import { makeCopyDeltaFromInterpolation } from "../../project";

export const VCapConfig = {
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
            x: 105.13,
            y: 81.04,
        },
        point2: {
            x: 35.85,
            y: 267.76,
        },
        point3: {
            x: -36.67,
            y: 267.49,
        },
        point4: {
            x: -105.14,
            y: 80.5,
        },
        point5: {
            x: -29.1,
            y: 80.5,
        },
        point6: {
            x: 0.4,
            y: 205.25,
        },
        point7: {
            x: 1.48,
            y: 205.25,
        },
        point8: {
            x: 29.62,
            y: 80.77,
        },
        point9: {
            x: 105.13,
            y: 81.04,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 30.68,
            pos: {
                x: -39.69,
                y: 169.74,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 30.03,
            pos: {
                x: 40.06,
                y: 169.74,
            },
            affects: [],
        },
    ],
};
