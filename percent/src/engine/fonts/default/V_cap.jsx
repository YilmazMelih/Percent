import { makeCopyDeltaFromInterpolation } from "../../project";

export const VCapConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 105.13,
            y: 81.04,
        },
        point2: {
            x: 35.85,
            y: 267.76,
        },
        point3: {
            x: -36.67,
            y: 267.49,
        },
        point4: {
            x: -105.14,
            y: 80.5,
        },
        point5: {
            x: -29.1,
            y: 80.5,
        },
        point6: {
            x: 0.4,
            y: 205.25,
        },
        point7: {
            x: 1.48,
            y: 205.25,
        },
        point8: {
            x: 29.62,
            y: 80.77,
        },
        point9: {
            x: 105.13,
            y: 81.04,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 30.68,
            pos: {
                x: -39.69,
                y: 169.74,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point3,
                            { x: -9.76, y: 268.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point4,
                            { x: -87.27, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point5,
                            { x: -60.17, y: 79.69 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point6,
                            { x: -4.64, y: 222.45 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point7,
                            { x: -3.42, y: 225.65 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 30.03,
            pos: {
                x: 40.06,
                y: 169.74,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point2,
                            { x: 9.76, y: 268.57 },
                            0,
                        )(base, val),
                },

                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point1,
                            { x: 87.26, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point1,
                            { x: 87.26, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point8,
                            { x: 60.16, y: 79.69 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point7,
                            { x: 5.34, y: 223.25 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            VCapConfig.points.point6,
                            { x: 4.68, y: 224.97 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
