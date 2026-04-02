import { makeCopyDeltaFromInterpolation } from "../../project";

export const ZCapConfig = {
    unicode: 90,
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
            x: 1.9,
            y: 221.21,
            attach: "base",
        },
        point2: {
            x: 84.71,
            y: 220.67,
            attach: "base",
        },
        point3: {
            x: 84.16,
            y: 260.18,
        },
        point4: {
            x: 84.16,
            y: 267.76,
            attach: "base",
        },
        point5: {
            x: -84.16,
            y: 267.76,
            attach: "base",
        },
        point6: {
            x: -84.7,
            y: 232.04,
            attach: "base",
        },
        point7: {
            x: 0,
            y: 125.42,
            attach: "cap",
        },
        point8: {
            x: -84.7,
            y: 125.42,
            attach: "cap",
        },
        point9: {
            x: -84.16,
            y: 80.77,
            attach: "cap",
        },
        point10: {
            x: 84.69,
            y: 80.77,
            attach: "cap",
        },
        point11: {
            x: 84.69,
            y: 113.79,
            attach: "cap",
        },
        point12: {
            x: 1.89,
            y: 221.22,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "top",
            default: 1,
            r: 22.31,
            pos: {
                x: -19.2,
                y: 103.08,
                attach: "cap",
            },
            affects: [
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point7,
                            { ...ZCapConfig.points.point7, x: 19.37, y: 100.66 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point8,
                            { ...ZCapConfig.points.point8, x: -74.8, y: 101.36 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point9,
                            { ...ZCapConfig.points.point9, x: -74.8, y: 79.95 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "bottom",
            default: 1,
            r: 23.34,
            pos: {
                x: 38.97,
                y: 244.42,
                attach: "base",
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point12,
                            { ...ZCapConfig.points.point12, x: -18.79, y: 247.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point12,
                            { ...ZCapConfig.points.point12, x: -18.79, y: 247.9 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point2,
                            { ...ZCapConfig.points.point2, x: 74.8, y: 247.7 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point4,
                            { ...ZCapConfig.points.point4, x: 74.8, y: 268.57 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "2",
            name: "middle",
            default: 1,
            r: 30.24,
            pos: {
                x: -2.4,
                y: 177.26,
            },
            affects: [
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point10,
                            { ...ZCapConfig.points.point10, x: 69.98, y: 79.96 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point11,
                            { ...ZCapConfig.points.point11, x: 69.98, y: 97.85 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point7,
                            { ...ZCapConfig.points.point7, x: 19.42, y: 124.61 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point12,
                            { ...ZCapConfig.points.point12, x: -23.51, y: 220.41 },
                            0,
                        )(base, val),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point12,
                            { ...ZCapConfig.points.point12, x: -23.51, y: 220.41 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point6,
                            { ...ZCapConfig.points.point6, x: -75.27, y: 249.59 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ZCapConfig.points.point5,
                            { ...ZCapConfig.points.point5, x: -75.27, y: 267.76 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
