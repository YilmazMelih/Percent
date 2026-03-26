import { makeCopyDeltaFromInterpolation } from "../../project";

export const YCapConfig = {
    unicode: 89,
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 31.25,
            y: 187.39,
        },
        point2: {
            x: 32.34,
            y: 267.76,
        },
        point3: {
            x: -35.85,
            y: 267.49,
        },
        point4: {
            x: -35.04,
            y: 188.47,
        },
        point5: {
            x: -101.61,
            y: 81.04,
        },
        point6: {
            x: -29.63,
            y: 81.04,
        },
        point7: {
            x: -0.13,
            y: 150.86,
        },
        point8: {
            x: 31.53,
            y: 80.77,
        },
        point9: {
            x: 101.61,
            y: 81.31,
        },
    },
    nodes: [
        {
            id: "0",
            name: "bottom",
            default: 1,
            r: 33.48,
            pos: {
                x: -1.61,
                y: 226.13,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point4,
                            { x: -12.33, y: 189.04 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point3,
                            { x: -12.33, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point2,
                            { x: 12.33, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point1,
                            { x: 12.32, y: 189.04 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "left",
            default: 1,
            r: 28.75,
            pos: {
                x: -46.88,
                y: 114.52,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point4,
                            { x: -12.35, y: 189.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point5,
                            { x: -80.37, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point6,
                            { x: -50.83, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point7,
                            { x: 0.12, y: 166.27 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 27.61,
            pos: {
                x: 46.87,
                y: 114.07,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point7,
                            { x: 0.14, y: 166.27 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point8,
                            { x: 52.98, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point9,
                            { x: 80.35, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            YCapConfig.points.point1,
                            { x: 12.33, y: 189.03 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
