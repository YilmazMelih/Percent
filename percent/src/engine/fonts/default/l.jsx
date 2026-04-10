import { makeCopyDeltaFromInterpolation } from "../../project";

export const lConfig = {
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
            x: -31.12,
            y: 267.76,
            attach: "base",
        },
        point2: {
            x: -31.12,
            y: 81.04,
            attach: "cap",
        },
        point3: {
            x: 31.12,
            y: 81.04,
            attach: "cap",
        },
        point4: {
            x: 31.12,
            y: 267.76,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 31.12,
            pos: {
                x: 0,
                y: 174.4,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            lConfig.points.point1,
                            { ...lConfig.points.point1, x: -11.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            lConfig.points.point2,
                            { ...lConfig.points.point2, x: -11.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            lConfig.points.point3,
                            { ...lConfig.points.point3, x: 11.66 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            lConfig.points.point4,
                            { ...lConfig.points.point4, x: 11.66 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
