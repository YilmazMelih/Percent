import { makeCopyDeltaFromInterpolation } from "../../project";

export const OCapConfig = {
    unicode: 79,
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
            attach: "base",
        },
        point3: {
            x: 71.31,
            y: 270.64,
            attach: "base",
        },
        point4: {
            x: -0.41,
            y: 270.64,
            attach: "base",
        },
        point5: {
            x: -67.52,
            y: 270.64,
            attach: "base",
        },
        point6: {
            x: -107.29,
            y: 238.17,
            attach: "base",
        },
        point7: {
            x: -107.29,
            y: 174.57,
        },
        point8: {
            x: -107.29,
            y: 110.97,
            attach: "cap",
        },
        point9: {
            x: -61.83,
            y: 78.5,
            attach: "cap",
        },
        point10: {
            x: -0.41,
            y: 78.5,
            attach: "cap",
        },
        point11: {
            x: 69.15,
            y: 78.5,
            attach: "cap",
        },
        point12: {
            x: 107.29,
            y: 118.01,
            attach: "cap",
        },
        point13: {
            x: 35.59,
            y: 174.57,
        },
        point14: {
            x: 35.05,
            y: 141.01,
            attach: "cap",
        },
        point15: {
            x: 20.44,
            y: 118.01,
            attach: "cap",
        },
        point16: {
            x: -1.22,
            y: 118.01,
            attach: "cap",
        },
        point17: {
            x: -21.25,
            y: 118.01,
            attach: "cap",
        },
        point18: {
            x: -36.94,
            y: 138.85,
            attach: "cap",
        },
        point19: {
            x: -36.13,
            y: 174.57,
        },
        point20: {
            x: -35.59,
            y: 211.64,
            attach: "base",
        },
        point21: {
            x: -20.16,
            y: 230.86,
            attach: "base",
        },
        point22: {
            x: 0.68,
            y: 230.86,
            attach: "base",
        },
        point23: {
            x: 21.5,
            y: 230.86,
            attach: "base",
        },
        point24: {
            x: 36.13,
            y: 209.21,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 35.57,
            pos: {
                x: -71.73,
                y: 174.44,
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point8,
                            { ...OCapConfig.points.point8, x: -93.35, y: 110.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point7,
                            { ...OCapConfig.points.point7, x: -93.35, y: 174.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point6,
                            { ...OCapConfig.points.point6, x: -93.35, y: 238.17 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point21,
                            { ...OCapConfig.points.point21, x: -35.35, y: 230.86 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point20,
                            { ...OCapConfig.points.point20, x: -68.69, y: 226.52 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point19,
                            { ...OCapConfig.points.point19, x: -68.69, y: 174.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point18,
                            { ...OCapConfig.points.point18, x: -68.69, y: 122.62 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point17,
                            { ...OCapConfig.points.point17, x: -35.66, y: 118.01 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 35.57,
            pos: {
                x: 71.16,
                y: 174.44,
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point12,
                            { ...OCapConfig.points.point12, x: 93.35, y: 127.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point1,
                            { ...OCapConfig.points.point1, x: 93.35, y: 174.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point2,
                            { ...OCapConfig.points.point2, x: 93.35, y: 217.99 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point23,
                            { ...OCapConfig.points.point23, x: 34.4, y: 230.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point24,
                            { ...OCapConfig.points.point24, x: 68.43, y: 226.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point13,
                            { ...OCapConfig.points.point13, x: 68.43, y: 174.45 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point14,
                            { ...OCapConfig.points.point14, x: 68.43, y: 119.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point15,
                            { ...OCapConfig.points.point15, x: 30.14, y: 118.02 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 1,
            r: 19.75,
            pos: {
                x: -0.28,
                y: 98.26,
                attach: "cap",
            },
            affects: [
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point18,
                            { ...OCapConfig.points.point18, x: -36.13, y: 127.6 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point17,
                            { ...OCapConfig.points.point17, x: -35.32, y: 98.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point16,
                            { ...OCapConfig.points.point16, x: 0.14, y: 98.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point15,
                            { ...OCapConfig.points.point15, x: 35.59, y: 98.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point14,
                            { ...OCapConfig.points.point14, x: 35.59, y: 132.28 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "bottom",
            default: 1,
            r: 19.75,
            pos: {
                x: -0.01,
                y: 250.89,
                attach: "base",
            },
            affects: [
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point20,
                            { ...OCapConfig.points.point20, x: -36.13, y: 223.68 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point21,
                            { ...OCapConfig.points.point21, x: -36.16, y: 250.86 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point22,
                            { ...OCapConfig.points.point22, x: 0.14, y: 250.86 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point23,
                            { ...OCapConfig.points.point23, x: 36.43, y: 250.86 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            OCapConfig.points.point24,
                            { ...OCapConfig.points.point24, x: 35.59, y: 225.74 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
