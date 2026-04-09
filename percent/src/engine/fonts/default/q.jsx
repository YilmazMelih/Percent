import { makeCopyDeltaFromInterpolation } from "../../project";

export const qConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point16"],
        },
        {
            cmd: "C",
            points: ["point2", "point3", "point3"],
        },
        {
            cmd: "L",
            points: ["point4"],
        },
        {
            cmd: "L",
            points: ["point5"],
        },
        {
            cmd: "L",
            points: ["point6"],
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
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point16"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
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
            cmd: "C",
            points: ["point24", "point25", "point26"],
        },
        {
            cmd: "C",
            points: ["point27", "point28", "point17"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -8.53,
            y: 128.19,
        },
        point2: {
            x: 13.13,
            y: 131.71,
        },
        point3: {
            x: 26.39,
            y: 153.09,
        },
        point4: {
            x: 26.39,
            y: 130.9,
        },
        point5: {
            x: 88.63,
            y: 131.17,
        },
        point6: {
            x: 88.63,
            y: 332.24,
        },
        point7: {
            x: 26.39,
            y: 332.24,
        },
        point8: {
            x: 26.39,
            y: 247,
        },
        point9: {
            x: 7.18,
            y: 278.66,
        },
        point10: {
            x: -43.97,
            y: 265.94,
        },
        point11: {
            x: -65.89,
            y: 260.26,
        },
        point12: {
            x: -88.63,
            y: 242.12,
        },
        point13: {
            x: -88.63,
            y: 202.62,
        },
        point14: {
            x: -88.63,
            y: 142.54,
        },
        point15: {
            x: -52.91,
            y: 121.16,
        },
        point16: {
            x: -8.53,
            y: 128.2,
        },
        point17: {
            x: 4.19,
            y: 232.38,
        },
        point18: {
            x: 18.53,
            y: 230.49,
        },
        point19: {
            x: 25.31,
            y: 215.87,
        },
        point20: {
            x: 25.31,
            y: 196.93,
        },
        point21: {
            x: 25.31,
            y: 179.88,
        },
        point22: {
            x: 16.91,
            y: 165.81,
        },
        point23: {
            x: 5,
            y: 163.1,
        },
        point24: {
            x: -13.13,
            y: 159.31,
        },
        point25: {
            x: -26.66,
            y: 174.74,
        },
        point26: {
            x: -26.66,
            y: 196.39,
        },
        point27: {
            x: -26.66,
            y: 219.93,
        },
        point28: {
            x: -15.28,
            y: 235.09,
        },
    },
    nodes: [
        {
            id: "0",
            name: "bowl",
            default: 1,
            r: 30.99,
            pos: {
                x: -57.65,
                y: 198.85,
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point8,
                            { ...qConfig.points.point8, x: 26.39, y: 267.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point9,
                            { ...qConfig.points.point9, x: 9.77, y: 286.42 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point10,
                            { ...qConfig.points.point10, x: -23.17, y: 277.37 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point11,
                            { ...qConfig.points.point11, x: -45.1, y: 271.69 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point12,
                            { ...qConfig.points.point12, x: -60.03, y: 248.89 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point13,
                            { ...qConfig.points.point13, x: -60.03, y: 209.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point14,
                            { ...qConfig.points.point14, x: -60.03, y: 169.87 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point15,
                            { ...qConfig.points.point15, x: -46.17, y: 140.03 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point16,
                            { ...qConfig.points.point16, x: -8.76, y: 137.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point2,
                            { ...qConfig.points.point2, x: 15.99, y: 135.94 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point22,
                            { ...qConfig.points.point22, x: 20.39, y: 157.16 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point23,
                            { ...qConfig.points.point23, x: 4.06, y: 156.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point24,
                            { ...qConfig.points.point24, x: -23.79, y: 154.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point25,
                            { ...qConfig.points.point25, x: -37.26, y: 174.85 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point26,
                            { ...qConfig.points.point26, x: -37.26, y: 209.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point27,
                            { ...qConfig.points.point27, x: -37.26, y: 241.83 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point28",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point28,
                            { ...qConfig.points.point28, x: -26.29, y: 261.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point17,
                            { ...qConfig.points.point17, x: 0.67, y: 261.14 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point18,
                            { ...qConfig.points.point18, x: 28.39, y: 261.14 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "stem",
            default: 1,
            r: 31.16,
            pos: {
                x: 57.46,
                y: 285.43,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point5,
                            { ...qConfig.points.point5, x: 49.42, y: 131.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            qConfig.points.point6,
                            { ...qConfig.points.point6, x: 49.42, y: 332.24 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
