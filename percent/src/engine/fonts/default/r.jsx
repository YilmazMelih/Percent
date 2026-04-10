import { makeCopyDeltaFromInterpolation } from "../../project";

export const rConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point14"],
        },
        {
            cmd: "C",
            points: ["point14", "point2", "point3"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point5"],
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
            cmd: "C",
            points: ["point9", "point10", "point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point13"],
        },
        {
            cmd: "L",
            points: ["point14"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 39.91,
            y: 190.91,
            attach: "xh",
        },
        point2: {
            x: 22.87,
            y: 174.94,
            attach: "xh",
        },
        point3: {
            x: 6.63,
            y: 188.47,
            attach: "xh",
        },
        point4: {
            x: -6.45,
            y: 201.55,
            attach: "xh",
        },
        point5: {
            x: 1.49,
            y: 267.76,
            attach: "base",
        },
        point6: {
            x: -61.56,
            y: 267.76,
            attach: "base",
        },
        point7: {
            x: -61.56,
            y: 132.45,
            attach: "xh",
        },
        point8: {
            x: 0.14,
            y: 132.45,
            attach: "xh",
        },
        point9: {
            x: 0.41,
            y: 160.59,
            attach: "xh",
        },
        point10: {
            x: 11.5,
            y: 131.63,
            attach: "xh",
        },
        point11: {
            x: 41.53,
            y: 131.63,
            attach: "xh",
        },
        point12: {
            x: 56.41,
            y: 131.63,
            attach: "xh",
        },
        point13: {
            x: 61.56,
            y: 135.42,
            attach: "xh",
        },
        point14: {
            x: 39.91,
            y: 190.9,
            attach: "xh",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 30.34,
            pos: {
                x: -31.23,
                y: 226,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point2,
                            { ...rConfig.points.point2, x: -3.09, y: 174.08 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point3,
                            { ...rConfig.points.point3, x: -13.37, y: 187.61 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point4,
                            { ...rConfig.points.point4, x: -26.45, y: 201.55 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point5,
                            { ...rConfig.points.point5, x: -19.53, y: 269.36 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point6,
                            { ...rConfig.points.point6, x: -43.11, y: 269.36 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point7,
                            { ...rConfig.points.point7, x: -43.38, y: 132.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point8,
                            { ...rConfig.points.point8, x: -19.8, y: 132.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point9,
                            { ...rConfig.points.point9, x: -19.53, y: 150.67 },
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
            r: 22.87,
            pos: {
                x: 27.33,
                y: 160.53,
                attach: "xh",
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point4,
                            { ...rConfig.points.point4, x: -9.47, y: 154.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point3,
                            { ...rConfig.points.point3, x: 6.63, y: 150.88 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point2,
                            { ...rConfig.points.point2, x: 24.28, y: 148.05 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point14,
                            { ...rConfig.points.point14, x: 32.52, y: 154.2 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point13,
                            { ...rConfig.points.point13, x: 43.36, y: 136.31 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point12,
                            { ...rConfig.points.point12, x: 34.46, y: 129.73 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point11,
                            { ...rConfig.points.point11, x: 17.33, y: 130.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point10,
                            { ...rConfig.points.point10, x: 7.56, y: 130.17 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            rConfig.points.point9,
                            { ...rConfig.points.point9, x: 0.14, y: 133.59 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
