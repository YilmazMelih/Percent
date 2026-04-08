import { makeCopyDeltaFromInterpolation } from "../../project";

export const cConfig = {
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
            cmd: "C",
            points: ["point5", "point6", "point7"],
        },
        {
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point12"],
        },
        {
            cmd: "L",
            points: ["point13"],
        },
        {
            cmd: "C",
            points: ["point13", "point14", "point15"],
        },
        {
            cmd: "C",
            points: ["point16", "point17", "point18"],
        },
        {
            cmd: "C",
            points: ["point19", "point20", "point21"],
        },
        {
            cmd: "C",
            points: ["point22", "point23", "point23"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 30.18,
            y: 208.76,
        },
        point2: {
            x: 85.66,
            y: 216.88,
        },
        point3: {
            x: 70.22,
            y: 269.92,
        },
        point4: {
            x: -2.83,
            y: 269.92,
        },
        point5: {
            x: -48.84,
            y: 269.92,
        },
        point6: {
            x: -85.67,
            y: 244.89,
        },
        point7: {
            x: -85.67,
            y: 197.33,
        },
        point8: {
            x: -85.67,
            y: 134.36,
        },
        point9: {
            x: -19.82,
            y: 124.74,
        },
        point10: {
            x: -0.01,
            y: 124.74,
        },
        point11: {
            x: 70.83,
            y: 124.74,
        },
        point12: {
            x: 83.22,
            y: 171.15,
        },
        point13: {
            x: 27.2,
            y: 180.62,
        },
        point14: {
            x: 25.03,
            y: 161.14,
        },
        point15: {
            x: 2.03,
            y: 162.49,
        },
        point16: {
            x: -7.71,
            y: 163.3,
        },
        point17: {
            x: -26.87,
            y: 167.64,
        },
        point18: {
            x: -26.87,
            y: 196.37,
        },
        point19: {
            x: -26.87,
            y: 225.1,
        },
        point20: {
            x: -4.39,
            y: 229.67,
        },
        point21: {
            x: 1.8,
            y: 229.67,
        },
        point22: {
            x: 26.36,
            y: 229.67,
        },
        point23: {
            x: 30.18,
            y: 208.77,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 29.47,
            pos: {
                x: -56.21,
                y: 197.33,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 18.94,
            pos: {
                x: -0.02,
                y: 143.63,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 20.08,
            pos: {
                x: 1.82,
                y: 249.89,
            },
            affects: [],
        },
    ],
};
