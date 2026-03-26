import { makeCopyDeltaFromInterpolation } from "../../project";

export const MCapConfig = {
    unicode: 77,
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
            cmd: "L",
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 129.9,
            y: 267.76,
        },
        point2: {
            x: 60.08,
            y: 267.76,
        },
        point3: {
            x: 56.28,
            y: 190.91,
        },
        point4: {
            x: 15.97,
            y: 267.76,
        },
        point5: {
            x: -14.34,
            y: 267.76,
        },
        point6: {
            x: -57.1,
            y: 190.09,
        },
        point7: {
            x: -58.99,
            y: 267.76,
        },
        point8: {
            x: -129.89,
            y: 267.76,
        },
        point9: {
            x: -115.28,
            y: 81.04,
        },
        point10: {
            x: -52.5,
            y: 81.04,
        },
        point11: {
            x: 0,
            y: 183.33,
        },
        point12: {
            x: 51.96,
            y: 81.04,
        },
        point13: {
            x: 108.78,
            y: 81.04,
        },
    },
    nodes: [
        {
            id: "0",
            name: "leftOuter",
            default: 1,
            r: 34.2,
            pos: {
                x: -92.52,
                y: 231.25,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point6,
                            { x: -67.97, y: 170.34 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point7,
                            { x: -72.08, y: 268.84 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point8,
                            { x: -95.93, y: 268.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point9,
                            { x: -84.55, y: 79.96 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "rightOuter",
            default: 1,
            r: 33.42,
            pos: {
                x: 92.05,
                y: 231.25,
            },
            affects: [
                {
                    point: "point13",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point13,
                            { x: 81.57, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point1,
                            { x: 95.93, y: 268.84 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point2,
                            { x: 71.01, y: 268.84 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point3,
                            { x: 66.35, y: 171.75 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "leftInner",
            default: 1,
            r: 26.7,
            pos: {
                x: -28.4,
                y: 186.78,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point10,
                            { x: -69.38, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point11,
                            { x: -11.29, y: 201.61 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point5,
                            { x: -2.72, y: 268.56 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point6,
                            { x: -57.1, y: 158.46 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "3",
            name: "rightInner",
            default: 1,
            r: 26.7,
            pos: {
                x: 28.22,
                y: 186.78,
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point12,
                            { x: 65.86, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point11,
                            { x: 9.62, y: 202.07 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point4,
                            { x: 0.81, y: 268.57 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            MCapConfig.points.point3,
                            { x: 56.28, y: 155.74 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
