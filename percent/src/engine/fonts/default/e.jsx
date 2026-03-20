import { interpolateFromBase } from "../../project";

export const eConfig = {
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
            points: ["point3", "point4", "point5"],
        },
        {
            cmd: "C",
            points: ["point6", "point7", "point7"],
        },
        {
            cmd: "L",
            points: ["point8"],
        },
        {
            cmd: "C",
            points: ["point9", "point10", "point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point14"],
        },
        {
            cmd: "C",
            points: ["point15", "point16", "point17"],
        },
        {
            cmd: "C",
            points: ["point18", "point1", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point19"],
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
            cmd: "L",
            points: ["point19"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 78.86,
            y: 206.68,
        },
        point2: {
            x: -32.36,
            y: 206.68,
        },
        point3: {
            x: -32.36,
            y: 218.11,
        },
        point4: {
            x: -25.49,
            y: 232.25,
        },
        point5: {
            x: -6.13,
            y: 232.25,
        },
        point6: {
            x: 16.22,
            y: 232.25,
        },
        point7: {
            x: 18.78,
            y: 216.69,
        },
        point8: {
            x: 78.05,
            y: 225.08,
        },
        point9: {
            x: 69.88,
            y: 240.18,
        },
        point10: {
            x: 62.47,
            y: 267.76,
        },
        point11: {
            x: -6.13,
            y: 267.76,
        },
        point12: {
            x: -50.78,
            y: 267.76,
        },
        point13: {
            x: -91.4,
            y: 252.15,
        },
        point14: {
            x: -91.4,
            y: 192.66,
        },
        point15: {
            x: -91.4,
            y: 133.17,
        },
        point16: {
            x: -25.05,
            y: 122.81,
        },
        point17: {
            x: -6.13,
            y: 122.81,
        },
        point18: {
            x: 91.41,
            y: 122.81,
        },
        point19: {
            x: 20.95,
            y: 178.54,
        },
        point20: {
            x: 17.97,
            y: 163.66,
        },
        point21: {
            x: 9.03,
            y: 155,
        },
        point22: {
            x: -6.11,
            y: 155.81,
        },
        point23: {
            x: -19.1,
            y: 156.62,
        },
        point24: {
            x: -29.11,
            y: 165.55,
        },
        point25: {
            x: -30.74,
            y: 178.54,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 26.67,
            pos: {
                x: -54.73,
                y: 227.2,
            },
            affects: [],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 21.61,
            pos: {
                x: 32.93,
                y: 151.89,
            },
            affects: [],
        },
        {
            id: "2",
            name: "middle",
            default: 1,
            r: 14.11,
            pos: {
                x: -6.13,
                y: 192.65,
            },
            affects: [],
        },
        {
            id: "3",
            name: "bottom",
            default: 1,
            r: 21.79,
            pos: {
                x: 26.85,
                y: 243.31,
            },
            affects: [],
        },
    ],
};
