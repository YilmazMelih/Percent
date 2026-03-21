import { makeCopyDeltaFromInterpolation } from "../../project";

export const NCapConfig = {
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 95.94,
            y: 267.76,
        },
        point2: {
            x: 25.57,
            y: 267.76,
        },
        point3: {
            x: -29.64,
            y: 180.62,
        },
        point4: {
            x: -29.37,
            y: 267.22,
        },
        point5: {
            x: -95.94,
            y: 267.76,
        },
        point6: {
            x: -95.94,
            y: 80.76,
        },
        point7: {
            x: -22.87,
            y: 80.76,
        },
        point8: {
            x: 31.79,
            y: 170.88,
        },
        point9: {
            x: 31.79,
            y: 81.31,
        },
        point10: {
            x: 95.94,
            y: 80.77,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 33.22,
            pos: {
                x: -62.71,
                y: 220.75,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point3,
                            { x: -62.71, y: NCapConfig.points.point3.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point4,
                            { x: -62.71, y: NCapConfig.points.point4.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point5,
                            { x: -62.71, y: NCapConfig.points.point5.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point6,
                            { x: -62.71, y: NCapConfig.points.point6.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point7,
                            { x: -62.71, y: NCapConfig.points.point7.y },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 28.54,
            pos: {
                x: 4.29,
                y: 180.67,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point3,
                            { x: NCapConfig.points.point3.x, y: 130.69 },
                            -0.25,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point7,
                            { x: -95.94, y: NCapConfig.points.point7.y },
                            -0.25,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point2,
                            { x: 95.94, y: NCapConfig.points.point2.y },
                            -0.25,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point8,
                            { x: NCapConfig.points.point8.x, y: 219.32 },
                            -0.25,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 32.02,
            pos: {
                x: 63.91,
                y: 123.58,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point1,
                            { x: 63.91, y: NCapConfig.points.point1.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point2,
                            { x: 63.91, y: NCapConfig.points.point2.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point8,
                            { x: 63.91, y: NCapConfig.points.point8.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point9,
                            { x: 63.91, y: NCapConfig.points.point9.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            NCapConfig.points.point10,
                            { x: 63.91, y: NCapConfig.points.point10.y },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
