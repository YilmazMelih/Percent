import { makeCopyDeltaFromInterpolation } from "../../project";

export const zConfig = {
    unicode: 122,
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
            cmd: "L",
            points: ["point9"],
        },
        {
            cmd: "L",
            points: ["point10"],
        },
        {
            cmd: "L",
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -70.36,
            y: 131.91,
            attach: "xh",
        },
        point2: {
            x: 67.65,
            y: 131.91,
            attach: "xh",
        },
        point3: {
            x: 67.92,
            y: 163.3,
            attach: "xh",
        },
        point4: {
            x: 10.28,
            y: 224.73,
            attach: "base",
        },
        point5: {
            x: 70.36,
            y: 224.73,
            attach: "base",
        },
        point6: {
            x: 70.36,
            y: 267.76,
            attach: "base",
        },
        point7: {
            x: -70.36,
            y: 267.76,
            attach: "base",
        },
        point8: {
            x: -70.36,
            y: 237.72,
            attach: "base",
        },
        point9: {
            x: -7.85,
            y: 172.5,
            attach: "xh",
        },
        point10: {
            x: -70.09,
            y: 172.77,
            attach: "xh",
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 24.56,
            pos: {
                x: 0,
                y: 199.83,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point7,
                            { ...zConfig.points.point7, x: -57.04, y: 268.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point8,
                            { ...zConfig.points.point8, x: -57.04, y: 250.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point9,
                            { ...zConfig.points.point9, x: 8.72, y: 172.43 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point4,
                            { ...zConfig.points.point4, x: -5.13, y: 224.73 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point3,
                            { ...zConfig.points.point3, x: 57.04, y: 149.29 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point2,
                            { ...zConfig.points.point2, x: 57.04, y: 131.41 },
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
            r: 20.29,
            pos: {
                x: -39.23,
                y: 152.2,
                attach: "xh",
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point9,
                            { ...zConfig.points.point9, x: 13.14, y: 150.6 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point10,
                            { ...zConfig.points.point10, x: -57.05, y: 150.37 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point1,
                            { ...zConfig.points.point1, x: -57.05, y: 131.4 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 21.68,
            pos: {
                x: 41.53,
                y: 246.08,
                attach: "base",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point6,
                            { ...zConfig.points.point6, x: 57.04, y: 268.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point5,
                            { ...zConfig.points.point5, x: 57.04, y: 247.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            zConfig.points.point4,
                            { ...zConfig.points.point4, x: -11.46, y: 247.89 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
