import { makeCopyDeltaFromInterpolation } from "../../project";

export const WCapConfig = {
    unicode: 87,
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
            x: 142.21,
            y: 81.04,
            attach: "cap",
        },
        point2: {
            x: 97.55,
            y: 267.76,
            attach: "base",
        },
        point3: {
            x: 24.49,
            y: 267.49,
            attach: "base",
        },
        point4: {
            x: -0.14,
            y: 195.51,
        },
        point5: {
            x: -24.22,
            y: 267.76,
            attach: "base",
        },
        point6: {
            x: -94.04,
            y: 267.22,
            attach: "base",
        },
        point7: {
            x: -142.2,
            y: 80.5,
            attach: "cap",
        },
        point8: {
            x: -69.95,
            y: 80.5,
            attach: "cap",
        },
        point9: {
            x: -55.07,
            y: 188.2,
        },
        point10: {
            x: -22.34,
            y: 80.5,
            attach: "cap",
        },
        point11: {
            x: 23.66,
            y: 80.5,
            attach: "cap",
        },
        point12: {
            x: 57.5,
            y: 186.85,
        },
        point13: {
            x: 68.87,
            y: 80.5,
            attach: "cap",
        },
    },
    nodes: [
        {
            id: "0",
            name: "leftOuter",
            default: 1,
            r: 32.26,
            pos: {
                x: -93.68,
                y: 139.37,
                attach: "cap",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point6,
                            { ...WCapConfig.points.point6, x: -65.72, y: 268.49 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point7,
                            { ...WCapConfig.points.point7, x: -121.28, y: 79.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point8,
                            { ...WCapConfig.points.point8, x: -96.34, y: 79.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point9,
                            { ...WCapConfig.points.point9, x: -60.44, y: 201.58 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "leftInner",
            default: 1,
            r: 27.21,
            pos: {
                x: -27.21,
                y: 190.84,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point9,
                            { ...WCapConfig.points.point9, x: -45.35, y: 218.06 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point10,
                            { ...WCapConfig.points.point10, x: -11.25, y: 79.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point4,
                            { ...WCapConfig.points.point4, x: -12.84, y: 158.38 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point5,
                            { ...WCapConfig.points.point5, x: -46.48, y: 268.49 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "rightInner",
            default: 1,
            r: 28.62,
            pos: {
                x: 28.62,
                y: 190.84,
            },
            affects: [
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point11,
                            { ...WCapConfig.points.point11, x: 11.24, y: 80.16 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point12,
                            { ...WCapConfig.points.point12, x: 54.16, y: 218.06 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point3,
                            { ...WCapConfig.points.point3, x: 46.47, y: 268.49 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point4,
                            { ...WCapConfig.points.point4, x: 12.66, y: 157.14 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "rightOuter",
            default: 1,
            r: 31.71,
            pos: {
                x: 94.51,
                y: 143.01,
                attach: "cap",
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point12,
                            { ...WCapConfig.points.point12, x: 62.18, y: 201.58 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point13,
                            { ...WCapConfig.points.point13, x: 96.33, y: 79.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point1,
                            { ...WCapConfig.points.point1, x: 121.26, y: 79.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            WCapConfig.points.point2,
                            { ...WCapConfig.points.point2, x: 65.45, y: 268.5 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
