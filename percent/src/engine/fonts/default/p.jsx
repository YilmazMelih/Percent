import { makeCopyDeltaFromInterpolation } from "../../project";

export const pConfig = {
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
            cmd: "L",
            points: ["point11"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point16"],
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
            points: ["point23", "point24", "point25"],
        },
        {
            cmd: "C",
            points: ["point26", "point27", "point16"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 88.63,
            y: 202.82,
        },
        point2: {
            x: 88.63,
            y: 242.6,
        },
        point3: {
            x: 65.9,
            y: 260.73,
        },
        point4: {
            x: 43.97,
            y: 266.14,
        },
        point5: {
            x: -7.17,
            y: 279.13,
        },
        point6: {
            x: -26.38,
            y: 247.2,
        },
        point7: {
            x: -26.38,
            y: 332.44,
        },
        point8: {
            x: -88.63,
            y: 332.44,
        },
        point9: {
            x: -88.63,
            y: 131.38,
        },
        point10: {
            x: -26.38,
            y: 131.38,
        },
        point11: {
            x: -26.38,
            y: 153.57,
        },
        point12: {
            x: -13.13,
            y: 131.92,
        },
        point13: {
            x: 8.53,
            y: 128.4,
        },
        point14: {
            x: 52.91,
            y: 121.36,
        },
        point15: {
            x: 88.63,
            y: 143.01,
        },
        point16: {
            x: 26.66,
            y: 196.86,
        },
        point17: {
            x: 26.66,
            y: 174.94,
        },
        point18: {
            x: 13.13,
            y: 159.52,
        },
        point19: {
            x: -5,
            y: 163.57,
        },
        point20: {
            x: -16.91,
            y: 166.01,
        },
        point21: {
            x: -25.31,
            y: 180.08,
        },
        point22: {
            x: -25.31,
            y: 197.13,
        },
        point23: {
            x: -25.31,
            y: 216.34,
        },
        point24: {
            x: -18.53,
            y: 230.69,
        },
        point25: {
            x: -4.19,
            y: 232.58,
        },
        point26: {
            x: 15.28,
            y: 235.56,
        },
        point27: {
            x: 26.66,
            y: 220.4,
        },
    },
    nodes: [
        {
            id: "0",
            name: "stem",
            default: 1,
            r: 31.15,
            pos: {
                x: -57.47,
                y: 278.71,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point9,
                            { ...pConfig.points.point9, x: -45.34, y: 131.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point8,
                            { ...pConfig.points.point8, x: -45.34, y: 332.44 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "bowl",
            default: 1,
            r: 31.15,
            pos: {
                x: 57.81,
                y: 197.94,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point5,
                            { ...pConfig.points.point5, x: -9.26, y: 285.21 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point4,
                            { ...pConfig.points.point4, x: 22.22, y: 278.04 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point3,
                            { ...pConfig.points.point3, x: 44.14, y: 272.63 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point2,
                            { ...pConfig.points.point2, x: 61.31, y: 252.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point1,
                            { ...pConfig.points.point1, x: 59.5, y: 201.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point15,
                            { ...pConfig.points.point15, x: 57.81, y: 153.75 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point14,
                            { ...pConfig.points.point14, x: 29.72, y: 133.53 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point13,
                            { ...pConfig.points.point13, x: -2.94, y: 138.11 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point12,
                            { ...pConfig.points.point12, x: -18.09, y: 140.23 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point24,
                            { ...pConfig.points.point24, x: -21.38, y: 254.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point25,
                            { ...pConfig.points.point25, x: 8.39, y: 260.56 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point26,
                            { ...pConfig.points.point26, x: 31.96, y: 265.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point27,
                            { ...pConfig.points.point27, x: 40.25, y: 227.32 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point16,
                            { ...pConfig.points.point16, x: 36.4, y: 195.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point17,
                            { ...pConfig.points.point17, x: 33.72, y: 174.04 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point18,
                            { ...pConfig.points.point18, x: 19.43, y: 150.48 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point19,
                            { ...pConfig.points.point19, x: -4.22, y: 156.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            pConfig.points.point20,
                            { ...pConfig.points.point20, x: -19.63, y: 160.55 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
