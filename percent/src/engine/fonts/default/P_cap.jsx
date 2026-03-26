import { makeCopyDeltaFromInterpolation } from "../../project";

export const PCapConfig = {
    unicode: 80,
    basePath: [
        {
            cmd: "M",
            points: ["point12"],
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
            cmd: "C",
            points: ["point7", "point8", "point9"],
        },
        {
            cmd: "C",
            points: ["point10", "point11", "point12"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point22"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point19"],
        },
        {
            cmd: "L",
            points: ["point20"],
        },
        {
            cmd: "L",
            points: ["point21"],
        },
        {
            cmd: "L",
            points: ["point22"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 19.07,
            y: 202.27,
        },
        point2: {
            x: -21.79,
            y: 202.27,
        },
        point3: {
            x: -21.79,
            y: 267.76,
        },
        point4: {
            x: -89.17,
            y: 267.76,
        },
        point5: {
            x: -89.17,
            y: 81.03,
        },
        point6: {
            x: 20.43,
            y: 80.76,
        },
        point7: {
            x: 73.74,
            y: 79.95,
        },
        point8: {
            x: 89.17,
            y: 111.89,
        },
        point9: {
            x: 89.17,
            y: 132.99,
        },
        point10: {
            x: 89.17,
            y: 189.03,
        },
        point11: {
            x: 57.36,
            y: 202.27,
        },
        point12: {
            x: 19.08,
            y: 202.27,
        },
        point13: {
            x: 4.19,
            y: 164.65,
        },
        point14: {
            x: 22.59,
            y: 164.65,
        },
        point15: {
            x: 25.57,
            y: 149.5,
        },
        point16: {
            x: 25.57,
            y: 141.11,
        },
        point17: {
            x: 25.57,
            y: 129.74,
        },
        point18: {
            x: 20.7,
            y: 117.57,
        },
        point19: {
            x: 3.92,
            y: 117.57,
        },
        point20: {
            x: -21.79,
            y: 117.57,
        },
        point21: {
            x: -21.79,
            y: 164.39,
        },
        point22: {
            x: 4.19,
            y: 164.66,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 33.69,
            pos: {
                x: -55.48,
                y: 148.39,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point2,
                            { x: -55.48, y: PCapConfig.points.point2.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point3,
                            { x: -55.48, y: PCapConfig.points.point3.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point4,
                            { x: -55.48, y: PCapConfig.points.point4.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point5,
                            { x: -55.48, y: PCapConfig.points.point5.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point20,
                            { x: -55.48, y: PCapConfig.points.point20.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point21,
                            { x: -55.48, y: PCapConfig.points.point21.y },
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
            r: 31.8,
            pos: {
                x: 57.36,
                y: 141.11,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point6,
                            { x: 0.59, y: 79.83 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point7,
                            { x: 53.89, y: 79.02 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point8,
                            { x: 69.16, y: 106.32 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point9,
                            { x: 69.16, y: 134.92 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point10,
                            { x: 69.16, y: 179.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point11,
                            { x: 38.47, y: 194.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point12,
                            { x: 0.19, y: 194.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point2,
                            { x: -21.78, y: 194.18 },
                            0,
                        )(base, val),
                },
                {
                    point: "point20",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point20,
                            { x: -21.78, y: 100.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point19",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point19,
                            { x: 3.94, y: 100.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point18",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point18,
                            { x: 40.28, y: 100.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point17",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point17,
                            { x: 44.78, y: 125.37 },
                            0,
                        )(base, val),
                },
                {
                    point: "point16",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point16,
                            { x: 44.78, y: 136.74 },
                            0,
                        )(base, val),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point15,
                            { x: 44.78, y: 145.13 },
                            0,
                        )(base, val),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point14,
                            { x: 43.31, y: 173.05 },
                            0,
                        )(base, val),
                },
                {
                    point: "point22",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point22,
                            { x: 4.2, y: 173.06 },
                            0,
                        )(base, val),
                },
                {
                    point: "point21",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            PCapConfig.points.point21,
                            { x: -21.78, y: 173.06 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
