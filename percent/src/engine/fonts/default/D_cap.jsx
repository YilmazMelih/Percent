import { makeCopyDeltaFromInterpolation } from "../../project";

export const DCapConfig = {
    unicode: 68,
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
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point14"],
        },
        {
            cmd: "C",
            points: ["point15", "point16", "point16"],
        },
        {
            cmd: "L",
            points: ["point17"],
        },
        {
            cmd: "L",
            points: ["point18"],
        },
        {
            cmd: "C",
            points: ["point19", "point20", "point21"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 95.8,
            y: 176.29,
        },
        point2: {
            x: 95.8,
            y: 249.09,
            attach: "base",
        },
        point3: {
            x: 56.02,
            y: 267.76,
            attach: "base",
        },
        point4: {
            x: -8.12,
            y: 267.76,
            attach: "base",
        },
        point5: {
            x: -95.8,
            y: 267.49,
            attach: "base",
        },
        point6: {
            x: -95.8,
            y: 80.76,
            attach: "cap",
        },
        point7: {
            x: -11.37,
            y: 80.76,
            attach: "cap",
        },
        point8: {
            x: 44.92,
            y: 80.76,
            attach: "cap",
        },
        point9: {
            x: 95.79,
            y: 95.1,
            attach: "cap",
        },
        point10: {
            x: 95.79,
            y: 176.29,
        },
        point11: {
            x: 28.69,
            y: 174.13,
        },
        point12: {
            x: 28.69,
            y: 128.13,
            attach: "cap",
        },
        point13: {
            x: 9.21,
            y: 119.74,
            attach: "cap",
        },
        point14: {
            x: -11.9,
            y: 119.74,
            attach: "cap",
        },
        point15: {
            x: -19.21,
            y: 119.74,
            attach: "cap",
        },
        point16: {
            x: -27.6,
            y: 120.01,
            attach: "cap",
        },
        point17: {
            x: -27.6,
            y: 228.8,
            attach: "base",
        },
        point18: {
            x: -13.8,
            y: 228.8,
            attach: "base",
        },
        point19: {
            x: 8.66,
            y: 228.8,
            attach: "base",
        },
        point20: {
            x: 28.69,
            y: 222.31,
            attach: "base",
        },
        point21: {
            x: 28.69,
            y: 174.14,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 34.1,
            pos: {
                x: -61.7,
                y: 174.13,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point5,
                            { ...DCapConfig.points.point5, x: -61.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point6,
                            { ...DCapConfig.points.point6, x: -61.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point16,
                            { ...DCapConfig.points.point16, x: -61.7 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point17,
                            { ...DCapConfig.points.point17, x: -61.7 },
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
            r: 33.56,
            pos: {
                x: 62.25,
                y: 174.13,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point9,
                            { ...DCapConfig.points.point9, x: 79.4, y: 95.24 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point10,
                            { ...DCapConfig.points.point10, x: 79.4, y: 176.43 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point1,
                            { ...DCapConfig.points.point1, x: 79.4, y: 176.43 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point2,
                            { ...DCapConfig.points.point2, x: 79.4, y: 249.23 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point20,
                            { ...DCapConfig.points.point20, x: 54.73, y: 233.48 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point11,
                            { ...DCapConfig.points.point11, x: 54.73, y: 173.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point21,
                            { ...DCapConfig.points.point21, x: 54.73, y: 173.19 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            DCapConfig.points.point12,
                            { ...DCapConfig.points.point12, x: 54.74, y: 121.29 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
