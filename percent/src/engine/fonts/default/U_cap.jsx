import { makeCopyDeltaFromInterpolation } from "../../project";

export const UCapConfig = {
    unicode: 85,
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
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point13"],
        },
        {
            cmd: "L",
            points: ["point14"],
        },
        {
            cmd: "L",
            points: ["point15"],
        },
        {
            cmd: "L",
            points: ["point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -2.47,
            y: 271.28 - 267.76,
            attach: "base",
        },
        point2: {
            x: -76.18,
            y: 271.28 - 267.76,
            attach: "base",
        },
        point3: {
            x: -91.33,
            y: 221.76 - 267.76,
            attach: "base",
        },
        point4: {
            x: -91.06,
            y: 190.1 - 267.76,
            attach: "base",
        },
        point5: {
            x: -91.33,
            y: 80.5 - 80.5,
            attach: "cap",
        },
        point6: {
            x: -26.66,
            y: 80.5 - 80.5,
            attach: "cap",
        },
        point7: {
            x: -25.84,
            y: 179 - 267.76,
            attach: "base",
        },
        point8: {
            x: -25.31,
            y: 200.11 - 267.76,
            attach: "base",
        },
        point9: {
            x: -25.84,
            y: 226.09 - 267.76,
            attach: "base",
        },
        point10: {
            x: -0.13,
            y: 225.82 - 267.76,
            attach: "base",
        },
        point11: {
            x: 26.66,
            y: 225.55 - 267.76,
            attach: "base",
        },
        point12: {
            x: 25.58,
            y: 197.95 - 267.76,
            attach: "base",
        },
        point13: {
            x: 25.84,
            y: 178.46 - 267.76,
            attach: "base",
        },
        point14: {
            x: 25.58,
            y: 80.5 - 80.5,
            attach: "cap",
        },
        point15: {
            x: 91.34,
            y: 80.5 - 80.5,
            attach: "cap",
        },
        point16: {
            x: 91.34,
            y: 190.64 - 267.76,
            attach: "base",
        },
        point17: {
            x: 91.34,
            y: 221.76 - 267.76,
            attach: "base",
        },
        point18: {
            x: 84.25,
            y: 271.28 - 267.76,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 32.62,
            pos: {
                x: -58.72,
                y: 137.46 - 80.5,
                attach: "cap",
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point2,
                            { x: -71.94, y: 266.69 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point3,
                            { x: -75.62, y: 220.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point4,
                            { x: -75.35, y: 189.23 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point5,
                            { x: -77.38, y: 80.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point6,
                            { x: -50.96, y: 80.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point7,
                            { x: -49.55, y: 178.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point8,
                            { x: -49.55, y: 214.26 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point9,
                            { x: -30.51, y: 227.7 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 22.72,
            pos: {
                x: -0.01,
                y: 248.55 - 267.76,
                attach: "base",
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point8,
                            { x: -25.84, y: 231.44 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point9,
                            { x: -25.84, y: 249.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point10,
                            { x: -0.13, y: 249.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point11,
                            { x: 25.58, y: 249.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point12,
                            { x: 25.84, y: 235.07 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 32.8,
            pos: {
                x: 58.53,
                y: 137.46 - 80.5,
                attach: "cap",
            },
            affects: [
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point18,
                            { x: 77.24, y: 271.28 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point17,
                            { x: 76.23, y: 217.3 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point16,
                            { x: 76.23, y: 186.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point15,
                            { x: 77.24, y: 80.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point14,
                            { x: 51.22, y: 80.2 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point13,
                            { x: 50.51, y: 179.31 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point12,
                            { x: 50.51, y: 208.85 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            UCapConfig.points.point11,
                            { x: 39.58, y: 230.78 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
