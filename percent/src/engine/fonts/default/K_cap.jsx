import { makeCopyDeltaFromInterpolation } from "../../project";

export const KCapConfig = {
    unicode: 75,
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
            points: ["point1"],
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
            attach: "base",
        },
        point3: {
            x: 18.4,
            y: 268.3,
            attach: "base",
        },
        point4: {
            x: -24.36,
            y: 194.69,
        },
        point5: {
            x: -24.36,
            y: 267.76,
            attach: "base",
        },
        point6: {
            x: -100.4,
            y: 268.03,
            attach: "base",
        },
        point7: {
            x: -100.67,
            y: 81.31,
            attach: "cap",
        },
        point8: {
            x: -24.36,
            y: 81.31,
            attach: "cap",
        },
        point9: {
            x: -24.36,
            y: 152.75,
        },
        point10: {
            x: 18.94,
            y: 81.31,
            attach: "cap",
        },
        point11: {
            x: 100.67,
            y: 81.58,
            attach: "cap",
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
                attach: "base",
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { ...KCapConfig.points.point9, x: -52.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point4,
                            { ...KCapConfig.points.point4, x: -62.51, y: 173.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point5,
                            { ...KCapConfig.points.point5, x: -62.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point6,
                            { ...KCapConfig.points.point6, x: -62.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point7,
                            { ...KCapConfig.points.point7, x: -62.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point8,
                            { ...KCapConfig.points.point8, x: -62.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { ...KCapConfig.points.point9, x: -62.51, y: 173.72 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { ...KCapConfig.points.point9, x: -52.51 },
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
                attach: "cap",
            },
            affects: [
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point9,
                            { ...KCapConfig.points.point9, x: -24.36, y: 144.89 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point10,
                            { ...KCapConfig.points.point10, x: 33.19, y: 80.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point11,
                            { ...KCapConfig.points.point11, x: 65.17, y: 80.64 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point12,
                            { ...KCapConfig.points.point12, x: 11.22, y: 138.53 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point1,
                            { ...KCapConfig.points.point1, x: 11.22, y: 138.53 },
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
                attach: "base",
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point4,
                            { ...KCapConfig.points.point4, x: -24.36, y: 202.03 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point3,
                            { ...KCapConfig.points.point3, x: 38.61, y: 269.24 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point2,
                            { ...KCapConfig.points.point2, x: 70.05, y: 269.24 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point12,
                            { ...KCapConfig.points.point12, x: 10.71, y: 205.45 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            KCapConfig.points.point1,
                            { ...KCapConfig.points.point1, x: 10.71, y: 205.45 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
