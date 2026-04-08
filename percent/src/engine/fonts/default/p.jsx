import { makeCopyDeltaFromInterpolation } from "../../project";

export const pConfig = {
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
            points: ["point5", "point6", "point6"],
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
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point16"],
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
            points: ["point23", "point24", "point25"],
        },
        {
            cmd: "C",
            points: ["point26", "point27", "point16"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 88.63,
            y: 202.82,
        },
        point2: {
            x: 88.63,
            y: 242.6,
        },
        point3: {
            x: 65.9,
            y: 260.73,
        },
        point4: {
            x: 43.97,
            y: 266.14,
        },
        point5: {
            x: -7.17,
            y: 279.13,
        },
        point6: {
            x: -26.38,
            y: 247.2,
        },
        point7: {
            x: -26.38,
            y: 332.44,
        },
        point8: {
            x: -88.63,
            y: 332.44,
        },
        point9: {
            x: -88.63,
            y: 131.38,
        },
        point10: {
            x: -26.38,
            y: 131.38,
        },
        point11: {
            x: -26.38,
            y: 153.57,
        },
        point12: {
            x: -13.13,
            y: 131.92,
        },
        point13: {
            x: 8.53,
            y: 128.4,
        },
        point14: {
            x: 52.91,
            y: 121.36,
        },
        point15: {
            x: 88.63,
            y: 143.01,
        },
        point16: {
            x: 26.66,
            y: 196.86,
        },
        point17: {
            x: 26.66,
            y: 174.94,
        },
        point18: {
            x: 13.13,
            y: 159.52,
        },
        point19: {
            x: -5,
            y: 163.57,
        },
        point20: {
            x: -16.91,
            y: 166.01,
        },
        point21: {
            x: -25.31,
            y: 180.08,
        },
        point22: {
            x: -25.31,
            y: 197.13,
        },
        point23: {
            x: -25.31,
            y: 216.34,
        },
        point24: {
            x: -18.53,
            y: 230.69,
        },
        point25: {
            x: -4.19,
            y: 232.58,
        },
        point26: {
            x: 15.28,
            y: 235.56,
        },
        point27: {
            x: 26.66,
            y: 220.4,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 31.15,
            pos: {
                x: -57.47,
                y: 278.71,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 31.15,
            pos: {
                x: 57.81,
                y: 197.94,
            },
            affects: [],
        },
    ],
};
