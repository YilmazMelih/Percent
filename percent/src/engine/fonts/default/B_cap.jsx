import { makeCopyDeltaFromInterpolation } from "../../project";

export const BCapConfig = {
    unicode: 66,
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
            cmd: "L",
            points: ["point4"],
        },
        {
            cmd: "C",
            points: ["point5", "point6", "point7"],
        },
        {
            cmd: "C",
            points: ["point8", "point9", "point9"],
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
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point15"],
        },
        {
            cmd: "L",
            points: ["point16"],
        },
        {
            cmd: "L",
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
            cmd: "L",
            points: ["point15"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point24"],
        },
        {
            cmd: "C",
            points: ["point25", "point26", "point27"],
        },
        {
            cmd: "C",
            points: ["point28", "point29", "point30"],
        },
        {
            cmd: "L",
            points: ["point31"],
        },
        {
            cmd: "L",
            points: ["point32"],
        },
        {
            cmd: "L",
            points: ["point33"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -3.93,
            y: 267.77,
        },
        point2: {
            x: -91.07,
            y: 267.5,
        },
        point3: {
            x: -91.07,
            y: 80.51,
        },
        point4: {
            x: 5.27,
            y: 80.51,
        },
        point5: {
            x: 59.4,
            y: 80.51,
        },
        point6: {
            x: 74.01,
            y: 98.64,
        },
        point7: {
            x: 74.82,
            y: 126.51,
        },
        point8: {
            x: 75.9,
            y: 163.31,
        },
        point9: {
            x: 36.39,
            y: 167.91,
        },
        point10: {
            x: 91.07,
            y: 171.49,
        },
        point11: {
            x: 91.07,
            y: 215.44,
        },
        point12: {
            x: 91.07,
            y: 250.71,
        },
        point13: {
            x: 68.79,
            y: 267.76,
        },
        point14: {
            x: -3.93,
            y: 267.76,
        },
        point15: {
            x: -25.04,
            y: 116.5,
        },
        point16: {
            x: -25.04,
            y: 151.68,
        },
        point17: {
            x: -9.07,
            y: 151.68,
        },
        point18: {
            x: 3.65,
            y: 151.68,
        },
        point19: {
            x: 12.85,
            y: 148.7,
        },
        point20: {
            x: 12.85,
            y: 135.71,
        },
        point21: {
            x: 12.85,
            y: 121.1,
        },
        point22: {
            x: 3.65,
            y: 116.5,
        },
        point23: {
            x: -7.99,
            y: 116.5,
        },
        point24: {
            x: -8.81,
            y: 226.64,
        },
        point25: {
            x: 11.49,
            y: 226.91,
        },
        point26: {
            x: 19.33,
            y: 219.87,
        },
        point27: {
            x: 17.98,
            y: 205.53,
        },
        point28: {
            x: 16.9,
            y: 192.81,
        },
        point29: {
            x: 9.59,
            y: 185.5,
        },
        point30: {
            x: -9.62,
            y: 185.5,
        },
        point31: {
            x: -25.05,
            y: 185.5,
        },
        point32: {
            x: -25.05,
            y: 226.63,
        },
        point33: {
            x: -8.81,
            y: 226.63,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 33.01,
            pos: {
                x: -58.06,
                y: 167.09,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point2,
                            { x: -58.06, y: BCapConfig.points.point2.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point3,
                            { x: -58.06, y: BCapConfig.points.point3.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point15,
                            { x: -58.06, y: BCapConfig.points.point15.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point16,
                            { x: -58.06, y: BCapConfig.points.point16.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point31",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point31,
                            { x: -58.06, y: BCapConfig.points.point31.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point32",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point32,
                            { x: -58.06, y: BCapConfig.points.point32.y },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 31.23,
            pos: {
                x: 43.58,
                y: 127.18,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point5,
                            { x: 30.62, y: 80.51 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point6,
                            { x: 58.9, y: 92.1 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point7,
                            { x: 58.9, y: 126.32 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point8,
                            { x: 58.9, y: 160.54 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point9,
                            { x: 30.17, y: 167.51 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point19,
                            { x: 32.52, y: 153.41 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point20,
                            { x: 34.74, y: 134.94 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point21,
                            { x: 37.21, y: 114.38 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 36.46,
            pos: {
                x: 54.6,
                y: 215.09,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point9,
                            { x: 30.18, y: 167.51 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point10,
                            { x: 71.72, y: 175.16 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point11,
                            { x: 71.72, y: 215.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point12,
                            { x: 71.72, y: 256.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point13,
                            { x: 40.91, y: 268.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point14,
                            { x: 7.53, y: 268.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point26,
                            { x: 51.93, y: 227.93 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point27,
                            { x: 46.23, y: 206.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            BCapConfig.points.point28,
                            { x: 39.84, y: 181.87 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
