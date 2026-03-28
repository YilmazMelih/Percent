import { makeCopyDeltaFromInterpolation } from "../../project";

export const lConfig = {
    unicode: 108,
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
    ],
    points: {
        point1: {
            x: -38.02,
            y: 267.76,
        },
        point2: {
            x: -38.02,
            y: 81.04,
        },
        point3: {
            x: 38.02,
            y: 81.04,
        },
        point4: {
            x: 38.02,
            y: 267.76,
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 38.02,
            pos: {
                x: 0,
                y: 178.63,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            lConfig.points.point1,
                            { x: 0, y: lConfig.points.point1.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            lConfig.points.point2,
                            { x: 0, y: lConfig.points.point2.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            lConfig.points.point3,
                            { x: 0, y: lConfig.points.point3.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            lConfig.points.point4,
                            { x: 0, y: lConfig.points.point4.y },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
