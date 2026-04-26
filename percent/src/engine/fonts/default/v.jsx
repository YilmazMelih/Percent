import { makeCopyDeltaFromInterpolation } from "../../project";

export const vConfig = {
    unicode: 118,
    basePath: [
        {
            cmd: "M",
            points: ["point9"],
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 86.45,
            y: 131.64,
            attach: "base",
        },
        point2: {
            x: 35.85,
            y: 268.03,
            attach: "base",
        },
        point3: {
            x: -36.67,
            y: 267.76,
            attach: "base",
        },
        point4: {
            x: -86.46,
            y: 131.64,
            attach: "xh",
        },
        point5: {
            x: -17.18,
            y: 131.64,
            attach: "xh",
        },
        point6: {
            x: -0.67,
            y: 218.51,
            attach: "base",
        },
        point7: {
            x: 0.68,
            y: 218.51,
            attach: "base",
        },
        point8: {
            x: 18.27,
            y: 131.64,
            attach: "xh",
        },
        point9: {
            x: 86.46,
            y: 131.64,
            attach: "xh",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 28.49,
            pos: {
                x: -35.52,
                y: 187.74,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point3,
                            { ...vConfig.points.point3, x: -10.71, y: 268.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point4,
                            { ...vConfig.points.point4, x: -64.91, y: 131.28 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point5,
                            { ...vConfig.points.point5, x: -38.35, y: 131.28 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point6,
                            { ...vConfig.points.point6, x: -7, y: 218.51 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 28.11,
            pos: {
                x: 35.6,
                y: 187.74,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point2,
                            { ...vConfig.points.point2, x: 12.33, y: 268.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point9,
                            { ...vConfig.points.point9, x: 64.9, y: 131.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point8,
                            { ...vConfig.points.point8, x: 39.97, y: 131.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            vConfig.points.point7,
                            { ...vConfig.points.point7, x: 9.29, y: 218.51 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
