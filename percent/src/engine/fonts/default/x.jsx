import { makeCopyDeltaFromInterpolation } from "../../project";

export const xConfig = {
    unicode: 120,
    basePath: [
        {
            cmd: "M",
            points: ["point13"],
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
            cmd: "L",
            points: ["point13"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -36.81,
            y: 199.57,
        },
        point2: {
            x: -90.39,
            y: 131.38,
            attach: "xh",
        },
        point3: {
            x: -15.43,
            y: 131.38,
            attach: "xh",
        },
        point4: {
            x: 0,
            y: 163.04,
        },
        point5: {
            x: 16.24,
            y: 131.38,
            attach: "xh",
        },
        point6: {
            x: 90.39,
            y: 131.38,
            attach: "xh",
        },
        point7: {
            x: 36.54,
            y: 199.57,
        },
        point8: {
            x: 90.39,
            y: 267.76,
            attach: "base",
        },
        point9: {
            x: 13.54,
            y: 267.76,
            attach: "base",
        },
        point10: {
            x: 0.28,
            y: 239.89,
        },
        point11: {
            x: -13.25,
            y: 267.76,
            attach: "base",
        },
        point12: {
            x: -90.37,
            y: 267.76,
            attach: "base",
        },
        point13: {
            x: -36.79,
            y: 199.57,
        },
    },
    nodes: [
        {
            id: "0",
            name: "topLeft",
            default: 1,
            r: 27.56,
            pos: {
                x: -30.56,
                y: 163.58,
                attach: "xh",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point13,
                            { ...xConfig.points.point13, x: -24.77, y: 184.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point2,
                            { ...xConfig.points.point2, x: -62.86, y: 131.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point3,
                            { ...xConfig.points.point3, x: -37.12, y: 131.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point4,
                            { ...xConfig.points.point4, x: -6.44, y: 174.02 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "bottomLeft",
            default: 1,
            r: 28.45,
            pos: {
                x: -30.76,
                y: 238.08,
                attach: "base",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point10,
                            { ...xConfig.points.point10, x: -7.04, y: 226.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point11,
                            { ...xConfig.points.point11, x: -37.66, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point12,
                            { ...xConfig.points.point12, x: -65.3, y: 268.12 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point13,
                            { ...xConfig.points.point13, x: -24.93, y: 214.65 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "bottomRight",
            default: 1,
            r: 28.45,
            pos: {
                x: 30.9,
                y: 238.08,
                attach: "base",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point10,
                            { ...xConfig.points.point10, x: 6.47, y: 225.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point9,
                            { ...xConfig.points.point9, x: 37.67, y: 268.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point8,
                            { ...xConfig.points.point8, x: 65.31, y: 268.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point7,
                            { ...xConfig.points.point7, x: 24.82, y: 215.76 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "topRight",
            default: 1,
            r: 27.31,
            pos: {
                x: 30.39,
                y: 163.83,
                attach: "xh",
                ratio: 0.33,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point4,
                            { ...xConfig.points.point4, x: 5.65, y: 174.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point5,
                            { ...xConfig.points.point5, x: 36.59, y: 131.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point6,
                            { ...xConfig.points.point6, x: 63.69, y: 131.01 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            xConfig.points.point7,
                            { ...xConfig.points.point7, x: 24.65, y: 184.51 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
