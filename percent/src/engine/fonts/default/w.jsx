import { makeCopyDeltaFromInterpolation } from "../../project";

export const wConfig = {
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
            cmd: "L",
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 139.5,
            y: 131.64,
        },
        point2: {
            x: 88.9,
            y: 268.03,
        },
        point3: {
            x: 16.38,
            y: 267.76,
        },
        point4: {
            x: -0.13,
            y: 199.84,
        },
        point5: {
            x: -17.18,
            y: 268.03,
        },
        point6: {
            x: -89.7,
            y: 267.76,
        },
        point7: {
            x: -139.51,
            y: 131.64,
        },
        point8: {
            x: -70.23,
            y: 131.64,
        },
        point9: {
            x: -55.62,
            y: 218.24,
        },
        point10: {
            x: -34.78,
            y: 131.64,
        },
        point11: {
            x: 35.85,
            y: 131.64,
        },
        point12: {
            x: 56.15,
            y: 218.51,
        },
        point13: {
            x: 71.03,
            y: 131.64,
        },
    },
    nodes: [
        {
            id: "0",
            name: "leftOuter",
            default: 1,
            r: 27.89,
            pos: {
                x: -89.2,
                y: 187.78,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point6,
                            { ...wConfig.points.point6, x: -50.69, y: 268.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point7,
                            { ...wConfig.points.point7, x: -94.86, y: 131.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point8,
                            { ...wConfig.points.point8, x: -71.55, y: 131.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point9,
                            { ...wConfig.points.point9, x: -51.03, y: 199.18 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "rightOuter",
            default: 1,
            r: 27.54,
            pos: {
                x: 89.37,
                y: 187.46,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point2,
                            { ...wConfig.points.point2, x: 49.58, y: 268.25 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point1,
                            { ...wConfig.points.point1, x: 94.84, y: 131.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point13,
                            { ...wConfig.points.point13, x: 71.03, y: 131.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point12,
                            { ...wConfig.points.point12, x: 51.06, y: 198.95 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "leftInner",
            default: 1,
            r: 24.5,
            pos: {
                x: -26.53,
                y: 203.04,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point5,
                            { ...wConfig.points.point5, x: -34.96, y: 268.27 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point4,
                            { ...wConfig.points.point4, x: -4.94, y: 180.07 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point10,
                            { ...wConfig.points.point10, x: -8.95, y: 131.41 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point9,
                            { ...wConfig.points.point9, x: -50.37, y: 256.61 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "rightInner",
            default: 1,
            r: 24.92,
            pos: {
                x: 26.41,
                y: 202.62,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point3,
                            { ...wConfig.points.point3, x: 34.69, y: 268.25 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point4,
                            { ...wConfig.points.point4, x: 0, y: 165.54 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point11,
                            { ...wConfig.points.point11, x: 9.21, y: 131.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            wConfig.points.point12,
                            { ...wConfig.points.point12, x: 49.86, y: 255.21 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
