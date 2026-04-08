import { makeCopyDeltaFromInterpolation } from "../../project";

export const yConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point2", "point3", "point3"],
        },
        {
            cmd: "L",
            points: ["point4"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point6"],
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
            x: 28.01,
            y: 277.23,
        },
        point2: {
            x: -1.22,
            y: 344.61,
        },
        point3: {
            x: -74.82,
            y: 321.61,
        },
        point4: {
            x: -61.83,
            y: 281.02,
        },
        point5: {
            x: -42.35,
            y: 293.74,
        },
        point6: {
            x: -27.19,
            y: 265.05,
        },
        point7: {
            x: -83.48,
            y: 131.64,
        },
        point8: {
            x: -19.62,
            y: 131.64,
        },
        point9: {
            x: 1.22,
            y: 199.29,
        },
        point10: {
            x: 19.62,
            y: 131.64,
        },
        point11: {
            x: 83.48,
            y: 131.64,
        },
        point12: {
            x: 28,
            y: 277.23,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 27.89,
            pos: {
                x: -34.57,
                y: 177.86,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 27.89,
            pos: {
                x: 36.25,
                y: 177.86,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 21.73,
            pos: {
                x: -38.81,
                y: 303.67,
            },
            affects: [],
        },
    ],
};
