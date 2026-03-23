import { makeCopyDeltaFromInterpolation } from "../../project";

export const XCapConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 37.75,
            y: 174.13,
        },
        point2: {
            x: 107.29,
            y: 267.76,
        },
        point3: {
            x: 31.53,
            y: 267.76,
        },
        point4: {
            x: 1.75,
            y: 211.74,
        },
        point5: {
            x: -29.36,
            y: 267.76,
        },
        point6: {
            x: -107.29,
            y: 267.76,
        },
        point7: {
            x: -35.59,
            y: 174.4,
        },
        point8: {
            x: -107.29,
            y: 80.76,
        },
        point9: {
            x: -30.17,
            y: 80.76,
        },
        point10: {
            x: 0.14,
            y: 134.61,
        },
        point11: {
            x: 31.53,
            y: 80.76,
        },
        point12: {
            x: 107.29,
            y: 80.76,
        },
        point13: {
            x: 37.75,
            y: 174.12,
        },
    },
    nodes: [
        {
            id: "0",
            name: "leftTop",
            default: 1,
            r: 29.41,
            pos: {
                x: -46.78,
                y: 112.23,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point7,
                            { x: -14.35, y: 174.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point8,
                            { x: -76.14, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point9,
                            { x: -47.14, y: 79.82 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point10,
                            { x: 0.28, y: 154.89 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "rightTop",
            default: 1,
            r: 29.41,
            pos: {
                x: 47.55,
                y: 112.23,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point10,
                            { x: 0.27, y: 154.88 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point11,
                            { x: 44.98, y: 79.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point12,
                            { x: 76.14, y: 79.81 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point13,
                            { x: 14.35, y: 174.12 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point13,
                            { x: 14.35, y: 174.12 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "rightBottom",
            default: 1,
            r: 28.76,
            pos: {
                x: 44.57,
                y: 231.62,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point4,
                            { x: 0, y: 193.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point3,
                            { x: 47.43, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point2,
                            { x: 76.16, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point13,
                            { x: 14.36, y: 174.12 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point13,
                            { x: 14.36, y: 174.12 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "leftBottom",
            default: 1,
            r: 28.76,
            pos: {
                x: -42.51,
                y: 231.62,
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point7,
                            { x: -14.36, y: 174.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point6,
                            { x: -76.16, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point5,
                            { x: -47.16, y: 268.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            XCapConfig.points.point4,
                            { x: 0, y: 193.64 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
