import { makeCopyDeltaFromInterpolation } from "../../project";

export const QCapConfig = {
    unicode: 81,
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
            points: ["point1"],
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
            points: ["point29", "point30", "point19"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 99.99,
            y: 210.73,
            attach: "base",
        },
        point2: {
            x: 107.56,
            y: 270.26,
            attach: "base",
        },
        point3: {
            x: -0.14,
            y: 269.99,
            attach: "base",
        },
        point4: {
            x: -61.84,
            y: 270.26,
            attach: "base",
        },
        point5: {
            x: -107.57,
            y: 238.06,
            attach: "base",
        },
        point6: {
            x: -107.57,
            y: 174.46,
        },
        point7: {
            x: -107.57,
            y: 110.86,
            attach: "cap",
        },
        point8: {
            x: -61.57,
            y: 77.85,
            attach: "cap",
        },
        point9: {
            x: -0.14,
            y: 77.85,
            attach: "cap",
        },
        point10: {
            x: 53.44,
            y: 77.85,
            attach: "cap",
        },
        point11: {
            x: 87,
            y: 99.5,
            attach: "cap",
        },
        point12: {
            x: 100.26,
            y: 140.09,
            attach: "cap",
        },
        point13: {
            x: 104.32,
            y: 152.27,
            attach: "cap",
        },
        point14: {
            x: 106.21,
            y: 178.79,
            attach: "cap",
            ratio: 0.5,
        },
        point15: {
            x: 95.94,
            y: 196.65,
            attach: "base",
        },
        point16: {
            x: 82.67,
            y: 219.92,
            attach: "base",
        },
        point17: {
            x: 41,
            y: 242.66,
            attach: "base",
        },
        point18: {
            x: 100,
            y: 210.73,
            attach: "base",
        },
        point19: {
            x: 35.03,
            y: 173.11,
        },
        point20: {
            x: 34.76,
            y: 138.47,
            attach: "cap",
        },
        point21: {
            x: 20.69,
            y: 115.74,
            attach: "cap",
        },
        point22: {
            x: -0.96,
            y: 116.01,
            attach: "cap",
        },
        point23: {
            x: -22.34,
            y: 116.28,
            attach: "cap",
        },
        point24: {
            x: -38.3,
            y: 137.66,
            attach: "cap",
        },
        point25: {
            x: -37.76,
            y: 174.46,
        },
        point26: {
            x: -37.22,
            y: 212.35,
            attach: "base",
        },
        point27: {
            x: -21.79,
            y: 232.37,
            attach: "base",
        },
        point28: {
            x: 0.67,
            y: 231.83,
            attach: "base",
        },
        point29: {
            x: 22.59,
            y: 231.29,
            attach: "base",
        },
        point30: {
            x: 35.58,
            y: 208.56,
            attach: "base",
        },
        point31: {
            x: 35.04,
            y: 173.11,
        },
    },
    nodes: [
        {
            id: "0",
            name: "bottom",
            default: 1,
            r: 19.21,
            pos: {
                x: -0.01,
                y: 251.06,
                attach: "base",
            },
            affects: [
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point26,
                            { ...QCapConfig.points.point26, x: -37.75, y: 224.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point27,
                            { ...QCapConfig.points.point27, x: -30.56, y: 250.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point28,
                            { ...QCapConfig.points.point28, x: 0.14, y: 250.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point29,
                            { ...QCapConfig.points.point29, x: 30.84, y: 250.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point30,
                            { ...QCapConfig.points.point30, x: 35.05, y: 222.29 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "left",
            default: 1,
            r: 34.9,
            pos: {
                x: -72.67,
                y: 174.06,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point5,
                            { ...QCapConfig.points.point5, x: -93.36, y: 235.23 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point6,
                            { ...QCapConfig.points.point6, x: -93.36, y: 174.05 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point7,
                            { ...QCapConfig.points.point7, x: -93.36, y: 112.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point8,
                            { ...QCapConfig.points.point8, x: -60.32, y: 77.85 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point23,
                            { ...QCapConfig.points.point23, x: -32.41, y: 116 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point24,
                            { ...QCapConfig.points.point24, x: -68.71, y: 117.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point25,
                            { ...QCapConfig.points.point25, x: -68.71, y: 174.59 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point26,
                            { ...QCapConfig.points.point26, x: -68.71, y: 231.37 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point27,
                            { ...QCapConfig.points.point27, x: -34.69, y: 231.82 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 34.48,
            pos: {
                x: 68.97,
                y: 160.69,
            },
            affects: [
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point11,
                            { ...QCapConfig.points.point11, x: 77.76, y: 106.17 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point12,
                            { ...QCapConfig.points.point12, x: 88.45, y: 139.15 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point13,
                            { ...QCapConfig.points.point13, x: 93.35, y: 153.34 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point14,
                            { ...QCapConfig.points.point14, x: 98.19, y: 197.34 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point15,
                            { ...QCapConfig.points.point15, x: 81.25, y: 224.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point16,
                            { ...QCapConfig.points.point16, x: 66.9, y: 246.65 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point17,
                            { ...QCapConfig.points.point17, x: 57.04, y: 251.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point29,
                            { ...QCapConfig.points.point29, x: 28.63, y: 231.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point30,
                            { ...QCapConfig.points.point30, x: 68.42, y: 228.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point31,
                            { ...QCapConfig.points.point31, x: 68.42, y: 173.11 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point31,
                            { ...QCapConfig.points.point31, x: 68.42, y: 173.11 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point20,
                            { ...QCapConfig.points.point20, x: 68.41, y: 121.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point21,
                            { ...QCapConfig.points.point21, x: 35.45, y: 116.01 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "top",
            default: 1,
            r: 19.08,
            pos: {
                x: -1.36,
                y: 96.94,
                attach: "cap",
            },
            affects: [
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point24,
                            { ...QCapConfig.points.point24, x: -37.77, y: 126.21 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point23,
                            { ...QCapConfig.points.point23, x: -31.55, y: 97.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point22,
                            { ...QCapConfig.points.point22, x: 0.13, y: 97.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point21,
                            { ...QCapConfig.points.point21, x: 31.79, y: 97.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point20,
                            { ...QCapConfig.points.point20, x: 35.03, y: 126.2 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "4",
            name: "tail",
            default: 1,
            r: 23.11,
            pos: {
                x: 81.25,
                y: 247.15,
            },
            affects: [
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point17,
                            { ...QCapConfig.points.point17, x: 57.03, y: 251.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point16,
                            { ...QCapConfig.points.point16, x: 68.98, y: 244.58 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point18,
                            { ...QCapConfig.points.point18, x: 89.56, y: 248.04 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point18,
                            { ...QCapConfig.points.point18, x: 89.56, y: 248.04 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            QCapConfig.points.point2,
                            { ...QCapConfig.points.point2, x: 93.35, y: 271.07 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
