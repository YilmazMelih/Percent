import { makeCopyDeltaFromInterpolation } from "../../project";

export const RCapConfig = {
    unicode: 82,
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
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point15"],
        },
        {
            cmd: "C",
            points: ["point16", "point17", "point18"],
        },
        {
            cmd: "C",
            points: ["point19", "point1", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point21"],
        },
        {
            cmd: "C",
            points: ["point22", "point23", "point24"],
        },
        {
            cmd: "L",
            points: ["point25"],
        },
        {
            cmd: "L",
            points: ["point26"],
        },
        {
            cmd: "L",
            points: ["point27"],
        },
        {
            cmd: "C",
            points: ["point28", "point29", "point21"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 95.66,
            y: 267.49,
            attach: "base",
        },
        point2: {
            x: 23.41,
            y: 267.76,
            attach: "base",
        },
        point3: {
            x: 19.62,
            y: 262.08,
            attach: "base",
        },
        point4: {
            x: 16.64,
            y: 242.86,
            attach: "base",
        },
        point5: {
            x: 8.25,
            y: 187.38,
        },
        point6: {
            x: -26.93,
            y: 195.5,
        },
        point7: {
            x: -26.12,
            y: 267.21,
            attach: "base",
        },
        point8: {
            x: -94.04,
            y: 267.48,
            attach: "base",
        },
        point9: {
            x: -95.66,
            y: 80.49,
            attach: "cap",
        },
        point10: {
            x: -3.92,
            y: 79.95,
            attach: "cap",
        },
        point11: {
            x: 58.86,
            y: 77.79,
            attach: "cap",
        },
        point12: {
            x: 85.11,
            y: 101.87,
            attach: "cap",
        },
        point13: {
            x: 84.84,
            y: 134.61,
            attach: "cap",
            ratio: 0.5,
        },
        point14: {
            x: 84.57,
            y: 177.37,
        },
        point15: {
            x: 43.71,
            y: 180.61,
        },
        point16: {
            x: 62.38,
            y: 184.67,
        },
        point17: {
            x: 71.85,
            y: 193.87,
        },
        point18: {
            x: 78.62,
            y: 218.23,
        },
        point19: {
            x: 88.09,
            y: 253.14,
            attach: "base",
        },
        point20: {
            x: 95.66,
            y: 267.48,
            attach: "base",
        },
        point21: {
            x: 21.51,
            y: 137.33,
            attach: "cap",
            ratio: 0.5,
        },
        point22: {
            x: 21.51,
            y: 124.61,
            attach: "cap",
        },
        point23: {
            x: 16.1,
            y: 114.06,
            attach: "cap",
        },
        point24: {
            x: -2.57,
            y: 114.33,
            attach: "cap",
        },
        point25: {
            x: -26.92,
            y: 114.6,
            attach: "cap",
        },
        point26: {
            x: -26.38,
            y: 160.6,
        },
        point27: {
            x: -1.75,
            y: 160.6,
        },
        point28: {
            x: 18.55,
            y: 160.6,
        },
        point29: {
            x: 21.79,
            y: 146.8,
        },
        point30: {
            x: 21.52,
            y: 137.33,
            attach: "cap",
            ratio: 0.5,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 33.83,
            pos: {
                x: -60.39,
                y: 234.02,
                attach: "base",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point6,
                            { ...RCapConfig.points.point6, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point7,
                            { ...RCapConfig.points.point7, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point8,
                            { ...RCapConfig.points.point8, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point9,
                            { ...RCapConfig.points.point9, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point26,
                            { ...RCapConfig.points.point26, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point25,
                            { ...RCapConfig.points.point25, x: -60.39 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "rightTop",
            default: 1,
            r: 31.6,
            pos: {
                x: 53.12,
                y: 137.46,
                attach: "cap",
                ratio: 0.5,
            },
            affects: [
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point11,
                            { ...RCapConfig.points.point11, x: 38.02, y: 77.86 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point12,
                            { ...RCapConfig.points.point12, x: 62.46, y: 101.79 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point13,
                            { ...RCapConfig.points.point13, x: 62.56, y: 134.54 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point15,
                            { ...RCapConfig.points.point15, x: 14.77, y: 182.37 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point28,
                            { ...RCapConfig.points.point28, x: 18.55, y: 160.6 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point29,
                            { ...RCapConfig.points.point29, x: 35.71, y: 157 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point30,
                            { ...RCapConfig.points.point30, x: 36.87, y: 137.33 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point30,
                            { ...RCapConfig.points.point30, x: 36.87, y: 137.33 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point22,
                            { ...RCapConfig.points.point22, x: 38.46, y: 110.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point14,
                            { ...RCapConfig.points.point14, x: 62.71, y: 184.01 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point16,
                            { ...RCapConfig.points.point16, x: 33.44, y: 186.43 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point23,
                            { ...RCapConfig.points.point23, x: 14.38, y: 99.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point24,
                            { ...RCapConfig.points.point24, x: -2.57, y: 100.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point25,
                            { ...RCapConfig.points.point25, x: -26.92, y: 100.4 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "rightBottom",
            default: 1,
            r: 32.72,
            pos: {
                x: 49.12,
                y: 235.13,
                attach: "base",
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point5,
                            { ...RCapConfig.points.point5, x: 17.5, y: 188.94 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point4,
                            { ...RCapConfig.points.point4, x: 29.9, y: 236.02 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point3,
                            { ...RCapConfig.points.point3, x: 35.53, y: 255.34 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point2,
                            { ...RCapConfig.points.point2, x: 42.68, y: 268.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point20,
                            { ...RCapConfig.points.point20, x: 74.39, y: 268.26 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point20,
                            { ...RCapConfig.points.point20, x: 74.39, y: 268.26 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point19,
                            { ...RCapConfig.points.point19, x: 68.81, y: 262.23 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point18,
                            { ...RCapConfig.points.point18, x: 60.85, y: 244.58 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point17,
                            { ...RCapConfig.points.point17, x: 52.33, y: 221.97 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point16,
                            { ...RCapConfig.points.point16, x: 43.81, y: 199.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point15,
                            { ...RCapConfig.points.point15, x: 28.38, y: 185.36 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "middle",
            default: 1,
            r: 17.47,
            pos: {
                x: -15.99,
                y: 177.97,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point6,
                            { ...RCapConfig.points.point6, x: -27.01, y: 188.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point5,
                            { ...RCapConfig.points.point5, x: 14.46, y: 184.15 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point26,
                            { ...RCapConfig.points.point26, x: -26.28, y: 168.69 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point27,
                            { ...RCapConfig.points.point27, x: -1.75, y: 168.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point28,
                            { ...RCapConfig.points.point28, x: 18.55, y: 168.87 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            RCapConfig.points.point29,
                            { ...RCapConfig.points.point29, x: 21.54, y: 155.35 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
