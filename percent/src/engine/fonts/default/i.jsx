import { makeCopyDeltaFromInterpolation } from "../../project";

export const iConfig = {
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
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
            points: ["point5"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -32.06,
            y: 132.45,
            attach: "xh",
        },
        point2: {
            x: 31.53,
            y: 132.45,
            attach: "xh",
        },
        point3: {
            x: 30.44,
            y: 267.76,
            attach: "base",
        },
        point4: {
            x: -32.06,
            y: 267.76,
            attach: "base",
        },
        point5: {
            x: -31.53,
            y: 125.69,
            attach: "cap",
        },
        point6: {
            x: -31.53,
            y: 80.77,
            attach: "cap",
        },
        point7: {
            x: 32.06,
            y: 80.77,
            attach: "cap",
        },
        point8: {
            x: 32.06,
            y: 125.69,
            attach: "cap",
        },
    },
    nodes: [
        {
            id: "0",
            name: "bar",
            default: 1,
            r: 31.49,
            pos: {
                x: -0.57,
                y: 190.24,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point1,
                            { ...iConfig.points.point1, x: -12.2, y: 131.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point4,
                            { ...iConfig.points.point4, x: -12.2, y: 268.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point3,
                            { ...iConfig.points.point3, x: 11.39, y: 268.57 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point2,
                            { ...iConfig.points.point2, x: 11.93, y: 131.72 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "dot",
            default: 1,
            r: 22.46,
            pos: {
                x: 0,
                y: 103.23,
                attach: "cap",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point6,
                            { ...iConfig.points.point6, x: -11.92, y: 79.95 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point5,
                            { ...iConfig.points.point5, x: -11.92, y: 103.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point8,
                            { ...iConfig.points.point8, x: 12.2, y: 103.26 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            iConfig.points.point7,
                            { ...iConfig.points.point7, x: 12.2, y: 79.95 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
