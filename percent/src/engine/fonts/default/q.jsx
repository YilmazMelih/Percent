import { makeCopyDeltaFromInterpolation } from "../../project";

export const qConfig = {
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
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point16"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point17"],
        },
        {
            cmd: "C",
            points: ["point18", "point19", "point20"],
        },
        {
            cmd: "C",
            points: ["point21", "point22", "point23"],
        },
        {
            cmd: "C",
            points: ["point24", "point25", "point26"],
        },
        {
            cmd: "C",
            points: ["point27", "point28", "point17"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -8.53,
            y: 128.19,
        },
        point2: {
            x: 13.13,
            y: 131.71,
        },
        point3: {
            x: 26.39,
            y: 153.09,
        },
        point4: {
            x: 26.39,
            y: 130.9,
        },
        point5: {
            x: 88.63,
            y: 131.17,
        },
        point6: {
            x: 88.63,
            y: 332.24,
        },
        point7: {
            x: 26.39,
            y: 332.24,
        },
        point8: {
            x: 26.39,
            y: 247,
        },
        point9: {
            x: 7.18,
            y: 278.66,
        },
        point10: {
            x: -43.97,
            y: 265.94,
        },
        point11: {
            x: -65.89,
            y: 260.26,
        },
        point12: {
            x: -88.63,
            y: 242.12,
        },
        point13: {
            x: -88.63,
            y: 202.62,
        },
        point14: {
            x: -88.63,
            y: 142.54,
        },
        point15: {
            x: -52.91,
            y: 121.16,
        },
        point16: {
            x: -8.53,
            y: 128.2,
        },
        point17: {
            x: 4.19,
            y: 232.38,
        },
        point18: {
            x: 18.53,
            y: 230.49,
        },
        point19: {
            x: 25.31,
            y: 215.87,
        },
        point20: {
            x: 25.31,
            y: 196.93,
        },
        point21: {
            x: 25.31,
            y: 179.88,
        },
        point22: {
            x: 16.91,
            y: 165.81,
        },
        point23: {
            x: 5,
            y: 163.1,
        },
        point24: {
            x: -13.13,
            y: 159.31,
        },
        point25: {
            x: -26.66,
            y: 174.74,
        },
        point26: {
            x: -26.66,
            y: 196.39,
        },
        point27: {
            x: -26.66,
            y: 219.93,
        },
        point28: {
            x: -15.28,
            y: 235.09,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 30.99,
            pos: {
                x: -57.65,
                y: 198.85,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 31.16,
            pos: {
                x: 57.46,
                y: 285.43,
            },
            affects: [],
        },
    ],
};
