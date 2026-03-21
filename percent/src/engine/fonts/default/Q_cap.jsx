import { makeCopyDeltaFromInterpolation } from "../../project";

export const QCapConfig = {
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
            cmd: "L",
            points: ["point3"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point6"],
        },
        {
            cmd: "C",
            points: ["point7", "point8", "point9"],
        },
        {
            cmd: "C",
            points: ["point10", "point11", "point12"],
        },
        {
            cmd: "C",
            points: ["point13", "point14", "point15"],
        },
        {
            cmd: "C",
            points: ["point16", "point17", "point17"],
        },
        {
            cmd: "L",
            points: ["point18"],
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
            cmd: "C",
            points: ["point26", "point27", "point28"],
        },
        {
            cmd: "C",
            points: ["point29", "point30", "point31"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 99.99,
            y: 210.73,
        },
        point2: {
            x: 107.56,
            y: 270.26,
        },
        point3: {
            x: -0.14,
            y: 269.99,
        },
        point4: {
            x: -61.84,
            y: 270.26,
        },
        point5: {
            x: -107.57,
            y: 238.06,
        },
        point6: {
            x: -107.57,
            y: 174.46,
        },
        point7: {
            x: -107.57,
            y: 110.86,
        },
        point8: {
            x: -61.57,
            y: 77.85,
        },
        point9: {
            x: -0.14,
            y: 77.85,
        },
        point10: {
            x: 53.44,
            y: 77.85,
        },
        point11: {
            x: 87,
            y: 99.5,
        },
        point12: {
            x: 100.26,
            y: 140.09,
        },
        point13: {
            x: 104.32,
            y: 152.27,
        },
        point14: {
            x: 106.21,
            y: 178.79,
        },
        point15: {
            x: 95.94,
            y: 196.65,
        },
        point16: {
            x: 82.67,
            y: 219.92,
        },
        point17: {
            x: 41,
            y: 242.66,
        },
        point18: {
            x: 100,
            y: 210.73,
        },
        point19: {
            x: 35.03,
            y: 173.11,
        },
        point20: {
            x: 34.76,
            y: 138.47,
        },
        point21: {
            x: 20.69,
            y: 115.74,
        },
        point22: {
            x: -0.96,
            y: 116.01,
        },
        point23: {
            x: -22.34,
            y: 116.28,
        },
        point24: {
            x: -38.3,
            y: 137.66,
        },
        point25: {
            x: -37.76,
            y: 174.46,
        },
        point26: {
            x: -37.22,
            y: 212.35,
        },
        point27: {
            x: -21.79,
            y: 232.37,
        },
        point28: {
            x: 0.67,
            y: 231.83,
        },
        point29: {
            x: 22.59,
            y: 231.29,
        },
        point30: {
            x: 35.58,
            y: 208.56,
        },
        point31: {
            x: 35.04,
            y: 173.11,
        },
    },
    nodes: [
        {
            id: "0",
            name: "node1",
            default: 1,
            r: 19.21,
            pos: {
                x: -0.01,
                y: 251.06,
            },
            affects: [],
        },
        {
            id: "1",
            name: "node2",
            default: 1,
            r: 34.9,
            pos: {
                x: -72.67,
                y: 174.06,
            },
            affects: [],
        },
        {
            id: "2",
            name: "node3",
            default: 1,
            r: 34.48,
            pos: {
                x: 68.97,
                y: 160.69,
            },
            affects: [],
        },
        {
            id: "3",
            name: "node4",
            default: 1,
            r: 19.08,
            pos: {
                x: -1.36,
                y: 96.94,
            },
            affects: [],
        },
        {
            id: "4",
            name: "node5",
            default: 1,
            r: 23.11,
            pos: {
                x: 81.25,
                y: 247.15,
            },
            affects: [],
        },
    ],
};
