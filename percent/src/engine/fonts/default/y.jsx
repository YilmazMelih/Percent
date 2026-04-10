import { makeCopyDeltaFromInterpolation } from "../../project";

export const yConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point12"],
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
            cmd: "C",
            points: ["point4", "point5", "point6"],
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
            cmd: "L",
            points: ["point12"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 28.01,
            y: 277.23,
            attach: "desc",
        },
        point2: {
            x: -1.22,
            y: 344.61,
            attach: "desc",
        },
        point3: {
            x: -74.82,
            y: 321.61,
            attach: "desc",
        },
        point4: {
            x: -61.83,
            y: 281.02,
            attach: "desc",
        },
        point5: {
            x: -42.35,
            y: 293.74,
            attach: "desc",
        },
        point6: {
            x: -27.19,
            y: 265.05,
            attach: "base",
        },
        point7: {
            x: -83.48,
            y: 131.64,
            attach: "xh",
        },
        point8: {
            x: -19.62,
            y: 131.64,
            attach: "xh",
        },
        point9: {
            x: 1.22,
            y: 199.29,
        },
        point10: {
            x: 19.62,
            y: 131.64,
            attach: "xh",
        },
        point11: {
            x: 83.48,
            y: 131.64,
            attach: "xh",
        },
        point12: {
            x: 28,
            y: 277.23,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 27.89,
            pos: {
                x: -34.57,
                y: 177.86,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point9,
                            { ...yConfig.points.point9, x: -4.83, y: 223.98 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point8,
                            { ...yConfig.points.point8, x: -40.39, y: 131.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point7,
                            { ...yConfig.points.point7, x: -66.95, y: 131.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point6,
                            { ...yConfig.points.point6, x: -12.67, y: 261.68 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point5,
                            { ...yConfig.points.point5, x: -27.83, y: 290.36 },
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
            r: 27.89,
            pos: {
                x: 36.25,
                y: 177.86,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point2,
                            { ...yConfig.points.point2, x: -18.78, y: 346.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point12,
                            { ...yConfig.points.point12, x: 10.44, y: 279.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point11,
                            { ...yConfig.points.point11, x: 66.93, y: 131.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point10,
                            { ...yConfig.points.point10, x: 42, y: 131.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point9,
                            { ...yConfig.points.point9, x: 9.56, y: 226.39 },
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
            r: 21.73,
            pos: {
                x: -38.81,
                y: 303.67,
                attach: "desc",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point6,
                            { ...yConfig.points.point6, x: -16.88, y: 286.78 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point5,
                            { ...yConfig.points.point5, x: -29.97, y: 304.83 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point4,
                            { ...yConfig.points.point4, x: -47.96, y: 299.29 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point3,
                            { ...yConfig.points.point3, x: -52.3, y: 322.05 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            yConfig.points.point2,
                            { ...yConfig.points.point2, x: 4.82, y: 330.59 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
