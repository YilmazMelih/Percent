import { makeCopyDeltaFromInterpolation } from "../../project";

export const UCapConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
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
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "L",
            points: ["point14"],
        },
        {
            cmd: "L",
            points: ["point15"],
        },
        {
            cmd: "L",
            points: ["point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -2.47,
            y: 271.28,
        },
        point2: {
            x: -76.18,
            y: 271.28,
        },
        point3: {
            x: -91.33,
            y: 221.76,
        },
        point4: {
            x: -91.06,
            y: 190.1,
        },
        point5: {
            x: -91.33,
            y: 80.5,
        },
        point6: {
            x: -26.66,
            y: 80.5,
        },
        point7: {
            x: -25.84,
            y: 179,
        },
        point8: {
            x: -25.31,
            y: 200.11,
        },
        point9: {
            x: -25.84,
            y: 226.09,
        },
        point10: {
            x: -0.13,
            y: 225.82,
        },
        point11: {
            x: 26.66,
            y: 225.55,
        },
        point12: {
            x: 25.58,
            y: 197.95,
        },
        point13: {
            x: 25.84,
            y: 178.46,
        },
        point14: {
            x: 25.58,
            y: 80.5,
        },
        point15: {
            x: 91.34,
            y: 80.5,
        },
        point16: {
            x: 91.34,
            y: 190.64,
        },
        point17: {
            x: 91.34,
            y: 221.76,
        },
        point18: {
            x: 84.25,
            y: 271.28,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 32.62,
            pos: {
                x: -58.72,
                y: 137.46,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 22.72,
            pos: {
                x: -0.01,
                y: 248.55,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 32.8,
            pos: {
                x: 58.53,
                y: 137.46,
            },
            affects: [],
        },
    ],
};
