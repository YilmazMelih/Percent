import { makeCopyDeltaFromInterpolation } from "../../project";

export const OCapConfig = {
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
            cmd: "C",
            points: ["point5", "point6", "point7"],
        },
        {
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point13"],
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
            points: ["point20", "point21", "point22"],
        },
        {
            cmd: "C",
            points: ["point23", "point24", "point13"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 107.29,
            y: 174.57,
        },
        point2: {
            x: 107.29,
            y: 232.75,
        },
        point3: {
            x: 71.31,
            y: 270.64,
        },
        point4: {
            x: -0.41,
            y: 270.64,
        },
        point5: {
            x: -67.52,
            y: 270.64,
        },
        point6: {
            x: -107.29,
            y: 238.17,
        },
        point7: {
            x: -107.29,
            y: 174.57,
        },
        point8: {
            x: -107.29,
            y: 110.97,
        },
        point9: {
            x: -61.83,
            y: 78.5,
        },
        point10: {
            x: -0.41,
            y: 78.5,
        },
        point11: {
            x: 69.15,
            y: 78.5,
        },
        point12: {
            x: 107.29,
            y: 118.01,
        },
        point13: {
            x: 35.59,
            y: 174.57,
        },
        point14: {
            x: 35.05,
            y: 141.01,
        },
        point15: {
            x: 20.44,
            y: 118.01,
        },
        point16: {
            x: -1.22,
            y: 118.01,
        },
        point17: {
            x: -21.25,
            y: 118.01,
        },
        point18: {
            x: -36.94,
            y: 138.85,
        },
        point19: {
            x: -36.13,
            y: 174.57,
        },
        point20: {
            x: -35.59,
            y: 211.64,
        },
        point21: {
            x: -20.16,
            y: 230.86,
        },
        point22: {
            x: 0.68,
            y: 230.86,
        },
        point23: {
            x: 21.5,
            y: 230.86,
        },
        point24: {
            x: 36.13,
            y: 209.21,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 35.57,
            pos: {
                x: -71.73,
                y: 174.44,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 35.57,
            pos: {
                x: 71.16,
                y: 174.44,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 19.75,
            pos: {
                x: -0.28,
                y: 98.26,
            },
            affects: [],
        },
        {
            id: "3",
            name: "node4",
            default: 1,
            r: 19.75,
            pos: {
                x: -0.01,
                y: 250.89,
            },
            affects: [],
        },
    ],
};
