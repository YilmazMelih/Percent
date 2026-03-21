import { makeCopyDeltaFromInterpolation } from "../../project";

export const KCapConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 34.64,
            y: 172.5,
        },
        point2: {
            x: 100.67,
            y: 268.3,
        },
        point3: {
            x: 18.4,
            y: 268.3,
        },
        point4: {
            x: -24.36,
            y: 194.69,
        },
        point5: {
            x: -24.36,
            y: 267.76,
        },
        point6: {
            x: -100.4,
            y: 268.03,
        },
        point7: {
            x: -100.67,
            y: 81.31,
        },
        point8: {
            x: -24.36,
            y: 81.31,
        },
        point9: {
            x: -24.36,
            y: 152.75,
        },
        point10: {
            x: 18.94,
            y: 81.31,
        },
        point11: {
            x: 100.67,
            y: 81.58,
        },
        point12: {
            x: 34.64,
            y: 172.51,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 38.16,
            pos: {
                x: -62.51,
                y: 230.14,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { x: -52.51, y: KCapConfig.points.point9.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point4,
                            { x: -62.51, y: 173.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point5,
                            { x: -62.51, y: KCapConfig.points.point5.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point6,
                            { x: -62.51, y: KCapConfig.points.point6.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point7,
                            { x: -62.51, y: KCapConfig.points.point7.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point8,
                            { x: -62.51, y: KCapConfig.points.point8.y },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { x: -62.51, y: 173.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { x: -52.51, y: KCapConfig.points.point9.y },
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
            r: 32.16,
            pos: {
                x: 29.99,
                y: 124.96,
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { x: -24.36, y: 144.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point10,
                            { x: 33.19, y: 80.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point11,
                            { x: 65.17, y: 80.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point12,
                            { x: 11.22, y: 138.53 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point1,
                            { x: 11.22, y: 138.53 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 32.65,
            pos: {
                x: 33.3,
                y: 228.22,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point4,
                            { x: -24.36, y: 202.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point3,
                            { x: 38.61, y: 269.24 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point2,
                            { x: 70.05, y: 269.24 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point12,
                            { x: 10.71, y: 205.45 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point1,
                            { x: 10.71, y: 205.45 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
