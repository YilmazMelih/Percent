import { makeCopyDeltaFromInterpolation } from "../../project";

export const bConfig = {
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
            y: 203.36,
        },
        point2: {
            x: 88.63,
            y: 243.14,
        },
        point3: {
            x: 65.9,
            y: 261,
        },
        point4: {
            x: 43.97,
            y: 266.68,
        },
        point5: {
            x: -7.17,
            y: 279.4,
        },
        point6: {
            x: -26.38,
            y: 250.71,
        },
        point7: {
            x: -26.38,
            y: 267.76,
        },
        point8: {
            x: -88.63,
            y: 267.76,
        },
        point9: {
            x: -88.63,
            y: 81.04,
        },
        point10: {
            x: -26.38,
            y: 80.77,
        },
        point11: {
            x: -26.38,
            y: 151.4,
        },
        point12: {
            x: -15.28,
            y: 132.73,
        },
        point13: {
            x: 8.53,
            y: 128.94,
        },
        point14: {
            x: 52.91,
            y: 122.17,
        },
        point15: {
            x: 88.63,
            y: 143.28,
        },
        point16: {
            x: 26.66,
            y: 200.38,
        },
        point17: {
            x: 26.66,
            y: 178.73,
        },
        point18: {
            x: 13.13,
            y: 163.3,
        },
        point19: {
            x: -5,
            y: 167.09,
        },
        point20: {
            x: -16.91,
            y: 169.8,
        },
        point21: {
            x: -25.31,
            y: 183.6,
        },
        point22: {
            x: -25.31,
            y: 200.65,
        },
        point23: {
            x: -25.31,
            y: 219.86,
        },
        point24: {
            x: -18.53,
            y: 234.21,
        },
        point25: {
            x: -4.19,
            y: 236.1,
        },
        point26: {
            x: 15.28,
            y: 238.81,
        },
        point27: {
            x: 26.66,
            y: 223.65,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.66,
            pos: {
                x: -56.96,
                y: 198.18,
            },
            affects: [],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 30.99,
            pos: {
                x: 57.65,
                y: 201.47,
            },
            affects: [],
        },
    ],
};
