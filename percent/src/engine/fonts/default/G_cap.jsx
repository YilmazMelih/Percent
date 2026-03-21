import { makeCopyDeltaFromInterpolation } from "../../project";

export const GCapConfig = {
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
            cmd: "C",
            points: ["point19", "point20", "point21"],
        },
        {
            cmd: "C",
            points: ["point22", "point23", "point24"],
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
            cmd: "C",
            points: ["point31", "point32", "point32"],
        },
        {
            cmd: "L",
            points: ["point33"],
        },
        {
            cmd: "L",
            points: ["point34"],
        },
        {
            cmd: "L",
            points: ["point35"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 103.61,
            y: 162.22,
        },
        point2: {
            x: 103.61,
            y: 267.76,
        },
        point3: {
            x: 61.66,
            y: 267.76,
        },
        point4: {
            x: 53.81,
            y: 225.81,
        },
        point5: {
            x: 42.86,
            y: 274.86,
        },
        point6: {
            x: -18.67,
            y: 274.86,
        },
        point7: {
            x: -73.06,
            y: 274.86,
        },
        point8: {
            x: -103.61,
            y: 227.08,
        },
        point9: {
            x: -103.61,
            y: 179.2,
        },
        point10: {
            x: -103.61,
            y: 107.64,
        },
        point11: {
            x: -51.46,
            y: 75.89,
        },
        point12: {
            x: 2.93,
            y: 75.62,
        },
        point13: {
            x: 38.92,
            y: 75.62,
        },
        point14: {
            x: 62.74,
            y: 86.99,
        },
        point15: {
            x: 78.97,
            y: 104.85,
        },
        point16: {
            x: 94.94,
            y: 122.44,
        },
        point17: {
            x: 96.83,
            y: 137.05,
        },
        point18: {
            x: 32.15,
            y: 151.93,
        },
        point19: {
            x: 27.82,
            y: 132.18,
        },
        point20: {
            x: 19.7,
            y: 123.79,
        },
        point21: {
            x: 2.38,
            y: 123.52,
        },
        point22: {
            x: -10.34,
            y: 123.52,
        },
        point23: {
            x: -22.52,
            y: 130.83,
        },
        point24: {
            x: -29.82,
            y: 145.44,
        },
        point25: {
            x: -35.5,
            y: 157.08,
        },
        point26: {
            x: -40.1,
            y: 191.99,
        },
        point27: {
            x: -22.24,
            y: 214.45,
        },
        point28: {
            x: -9.79,
            y: 229.6,
        },
        point29: {
            x: 15.92,
            y: 225.82,
        },
        point30: {
            x: 24.85,
            y: 218.24,
        },
        point31: {
            x: 33.51,
            y: 210.93,
        },
        point32: {
            x: 34.32,
            y: 202,
        },
        point33: {
            x: -1.67,
            y: 201.73,
        },
        point34: {
            x: -2.48,
            y: 162.22,
        },
        point35: {
            x: 103.6,
            y: 162.22,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 34.35,
            pos: {
                x: -67.87,
                y: 192.95,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point10,
                            { x: -80.28, y: 115.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point9,
                            { x: -80.28, y: 177.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point8,
                            { x: -80.28, y: 196.69 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point28,
                            { x: -37.64, y: 241.3 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point27,
                            { x: -48.23, y: 214.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point26,
                            { x: -57.05, y: 188.66 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point25,
                            { x: -55.24, y: 154.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point24,
                            { x: -50.23, y: 142.42 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point23,
                            { x: -41.9, y: 122.56 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 24.52,
            pos: {
                x: 18.47,
                y: 101.01,
            },
            affects: [
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point11,
                            { x: -52.43, y: 78.08 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point12,
                            { x: 1.97, y: 78.08 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point13,
                            { x: 20.64, y: 78.08 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point14,
                            { x: 44.04, y: 81.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point15,
                            { x: 59.31, y: 97.14 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point16,
                            { x: 75.54, y: 113.37 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point17,
                            { x: 77.91, y: 126.31 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point18,
                            { x: 54.88, y: 129.56 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point19,
                            { x: 50.55, y: 109.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point20,
                            { x: 27.17, y: 98.07 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point21,
                            { x: 9.85, y: 97.8 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point22,
                            { x: -2.87, y: 97.8 },
                            0,
                        )(base, val),
                },
                {
                    point: "point23",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point23,
                            { x: -22.16, y: 115.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point24",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point24,
                            { x: -30.96, y: 143.21 },
                            0,
                        )(base, val),
                },
                {
                    point: "point25",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point25,
                            { x: -34.83, y: 155.57 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 19.84,
            pos: {
                x: 29.69,
                y: 182.09,
            },
            affects: [
                {
                    point: "point26",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point26,
                            { x: -36.01, y: 240.42 },
                            0,
                        )(base, val),
                },
                {
                    point: "point27",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point27,
                            { x: -21.21, y: 246.5 },
                            0,
                        )(base, val),
                },
                {
                    point: "point28",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point28,
                            { x: 31.71, y: 267.61 },
                            0,
                        )(base, val),
                },
                {
                    point: "point29",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point29,
                            { x: 57.84, y: 226.52 },
                            0,
                        )(base, val),
                },
                {
                    point: "point30",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point30,
                            { x: 57.84, y: 220.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point31",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point31,
                            { x: 57.84, y: 212.43 },
                            0,
                        )(base, val),
                },
                {
                    point: "point32",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point32,
                            { x: 57.57, y: 191.63 },
                            0,
                        )(base, val),
                },
                {
                    point: "point33",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point33,
                            { x: 7.44, y: 191.63 },
                            0,
                        )(base, val),
                },
                {
                    point: "point34",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point34,
                            { x: 7.17, y: 172.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point35",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point35,
                            { x: 80.07, y: 172.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point1,
                            { x: 80.07, y: 172.39 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point2,
                            { x: 80.34, y: 269.67 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point3,
                            { x: 60.83, y: 269.67 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point4,
                            { x: 58.12, y: 252.06 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            GCapConfig.points.point5,
                            { x: 40.69, y: 274.77 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
