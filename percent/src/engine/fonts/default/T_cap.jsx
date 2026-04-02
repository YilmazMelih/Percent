import { makeCopyDeltaFromInterpolation } from "../../project";

export const TCapConfig = {
    unicode: 84,
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 88.63,
            y: 125.69,
            attach: "cap",
        },
        point2: {
            x: 33.41,
            y: 125.96,
            attach: "cap",
        },
        point3: {
            x: 33.69,
            y: 267.76,
            attach: "base",
        },
        point4: {
            x: -33.97,
            y: 267.76,
            attach: "base",
        },
        point5: {
            x: -33.97,
            y: 125.96,
            attach: "cap",
        },
        point6: {
            x: -88.63,
            y: 125.69,
            attach: "cap",
        },
        point7: {
            x: -88.63,
            y: 80.5,
            attach: "cap",
        },
        point8: {
            x: 88.63,
            y: 80.5,
            attach: "cap",
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 33.76,
            pos: {
                x: -0.19,
                y: 189.05,
                attach: "base",
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point2,
                            { ...TCapConfig.points.point2, x: -0.19 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point3,
                            { ...TCapConfig.points.point3, x: -0.19 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point4,
                            { ...TCapConfig.points.point4, x: -0.19 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point5,
                            { ...TCapConfig.points.point5, x: -0.19 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 22.65,
            pos: {
                x: 58.11,
                y: 103.15,
                attach: "cap",
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point1,
                            { ...TCapConfig.points.point1, y: 80.5 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point2,
                            { ...TCapConfig.points.point2, y: 80.5 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point5,
                            { ...TCapConfig.points.point5, y: 80.5 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            TCapConfig.points.point6,
                            { ...TCapConfig.points.point6, y: 80.5 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
