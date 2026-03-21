import { makeCopyDeltaFromInterpolation } from "../../project";

export const ZCapConfig = {
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
            cmd: "C",
            points: ["point2", "point3", "point4"],
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 1.9,
            y: 221.21,
        },
        point2: {
            x: 84.71,
            y: 220.67,
        },
        point3: {
            x: 84.16,
            y: 260.18,
        },
        point4: {
            x: 84.16,
            y: 267.76,
        },
        point5: {
            x: -84.16,
            y: 267.76,
        },
        point6: {
            x: -84.7,
            y: 232.04,
        },
        point7: {
            x: 0,
            y: 125.42,
        },
        point8: {
            x: -84.7,
            y: 125.42,
        },
        point9: {
            x: -84.16,
            y: 80.77,
        },
        point10: {
            x: 84.69,
            y: 80.77,
        },
        point11: {
            x: 84.69,
            y: 113.79,
        },
        point12: {
            x: 1.89,
            y: 221.22,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 22.31,
            pos: {
                x: -19.2,
                y: 103.08,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 23.34,
            pos: {
                x: 38.97,
                y: 244.42,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 30.24,
            pos: {
                x: -2.4,
                y: 177.26,
            },
            affects: [],
        },
    ],
};
