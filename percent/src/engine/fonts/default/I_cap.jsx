import { makeCopyDeltaFromInterpolation } from "../../project";

export const ICapConfig = {
    unicode: 73,
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
            y: 267.76 - 267.76,
            attach: "base",
        },
        point2: {
            x: -38.02,
            y: 81.04 - 80.5,
            attach: "cap",
        },
        point3: {
            x: 38.02,
            y: 81.04 - 80.5,
            attach: "cap",
        },
        point4: {
            x: 38.02,
            y: 267.76 - 267.76,
            attach: "base",
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
                            ICapConfig.points.point1,
                            { x: 0, y: ICapConfig.points.point1.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ICapConfig.points.point2,
                            { x: 0, y: ICapConfig.points.point2.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ICapConfig.points.point3,
                            { x: 0, y: ICapConfig.points.point3.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ICapConfig.points.point4,
                            { x: 0, y: ICapConfig.points.point4.y },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
