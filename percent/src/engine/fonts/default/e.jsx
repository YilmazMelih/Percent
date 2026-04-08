import { makeCopyDeltaFromInterpolation } from "../../project";

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
            y: 208.84,
        },
        point2: {
            x: -32.36,
            y: 208.84,
        },
        point3: {
            x: -32.36,
            y: 220.27,
        },
        point4: {
            x: -25.49,
            y: 234.41,
        },
        point5: {
            x: -6.13,
            y: 234.41,
        },
        point6: {
            x: 16.22,
            y: 234.41,
        },
        point7: {
            x: 18.78,
            y: 218.85,
        },
        point8: {
            x: 78.05,
            y: 227.24,
        },
        point9: {
            x: 69.88,
            y: 242.34,
        },
        point10: {
            x: 62.47,
            y: 269.92,
        },
        point11: {
            x: -6.13,
            y: 269.92,
        },
        point12: {
            x: -50.78,
            y: 269.92,
        },
        point13: {
            x: -91.4,
            y: 254.31,
        },
        point14: {
            x: -91.4,
            y: 194.82,
        },
        point15: {
            x: -91.4,
            y: 135.33,
        },
        point16: {
            x: -25.05,
            y: 124.97,
        },
        point17: {
            x: -6.13,
            y: 124.97,
        },
        point18: {
            x: 91.41,
            y: 124.97,
        },
        point19: {
            x: 20.95,
            y: 180.7,
        },
        point20: {
            x: 17.97,
            y: 165.82,
        },
        point21: {
            x: 9.03,
            y: 157.16,
        },
        point22: {
            x: -6.11,
            y: 157.97,
        },
        point23: {
            x: -19.1,
            y: 158.78,
        },
        point24: {
            x: -29.11,
            y: 167.71,
        },
        point25: {
            x: -30.74,
            y: 180.7,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 26.67,
            pos: {
                x: -54.73,
                y: 229.36,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 21.61,
            pos: {
                x: 32.93,
                y: 154.05,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 14.11,
            pos: {
                x: -6.13,
                y: 194.81,
            },
            affects: [],
        },
        {
            id: "3",
            name: "node4",
            default: 1,
            r: 21.79,
            pos: {
                x: 26.85,
                y: 245.47,
            },
            affects: [],
        },
    ],
};
