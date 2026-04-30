import { makeCopyDeltaFromInterpolation } from "../../project";

export const kConfig = {
    unicode: 107,
    basePath: [
        {
            cmd: "M",
            points: ["point12"],
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
            x: 6.62,
            y: 267.49,
        },
        point2: {
            x: -24.23,
            y: 208.5,
        },
        point3: {
            x: -23.96,
            y: 267.49,
            attach: "base",
        },
        point4: {
            x: -87.82,
            y: 267.49,
            attach: "base",
        },
        point5: {
            x: -87.82,
            y: 55.77,
            attach: "asc",
        },
        point6: {
            x: -23.96,
            y: 55.77,
            attach: "asc",
        },
        point7: {
            x: -24.23,
            y: 179,
        },
        point8: {
            x: 4.73,
            y: 131.91,
            attach: "xh",
        },
        point9: {
            x: 82.13,
            y: 131.91,
            attach: "xh",
        },
        point10: {
            x: 31.53,
            y: 193.88,
        },
        point11: {
            x: 87.82,
            y: 267.49,
            attach: "base",
        },
        point12: {
            x: 6.64,
            y: 267.49,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "stem",
            default: 1,
            r: 31.86,
            pos: {
                x: -55.96,
                y: 150.36,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point4,
                            { ...kConfig.points.point4, x: -59.76, y: 268.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point3,
                            { ...kConfig.points.point3, x: -35.37, y: 268.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point2,
                            { ...kConfig.points.point2, x: -36.18, y: 199.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point7,
                            { ...kConfig.points.point7, x: -36.18, y: 187.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point6,
                            { ...kConfig.points.point6, x: -35.37 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point5,
                            { ...kConfig.points.point5, x: -59.76 },
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
            r: 28.71,
            pos: {
                x: 18.09,
                y: 164.95,
                attach: "xh",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point7,
                            { ...kConfig.points.point7, x: -24.23, y: 176.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point8,
                            { ...kConfig.points.point8, x: 24.52, y: 131.45 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point9,
                            { ...kConfig.points.point9, x: 54.87, y: 131.45 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point10,
                            { ...kConfig.points.point10, x: 12.99, y: 169.67 },
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
            r: 30.72,
            pos: {
                x: 23.84,
                y: 234.34,
                attach: "base",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point2,
                            { ...kConfig.points.point2, x: -24.21, y: 212.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point12,
                            { ...kConfig.points.point12, x: 29.4, y: 268.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point11,
                            { ...kConfig.points.point11, x: 59.76, y: 268.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            kConfig.points.point10,
                            { ...kConfig.points.point10, x: 11.09, y: 218.91 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
