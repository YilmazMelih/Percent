import { makeCopyDeltaFromInterpolation } from "../../project";

export const HCapConfig = {
    unicode: 72,
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 99.72,
            y: 81.04,
            attach: "cap",
        },
        point2: {
            x: 99.72,
            y: 267.76,
            attach: "base",
        },
        point3: {
            x: 23.68,
            y: 267.76,
            attach: "base",
        },
        point4: {
            x: 23.68,
            y: 196.32,
        },
        point5: {
            x: -23.68,
            y: 196.32,
        },
        point6: {
            x: -23.68,
            y: 267.76,
            attach: "base",
        },
        point7: {
            x: -99.72,
            y: 267.76,
            attach: "base",
        },
        point8: {
            x: -99.72,
            y: 81.04,
            attach: "cap",
        },
        point9: {
            x: -23.68,
            y: 81.04,
            attach: "cap",
        },
        point10: {
            x: -23.41,
            y: 153.02,
        },
        point11: {
            x: 23.95,
            y: 153.02,
        },
        point12: {
            x: 23.68,
            y: 81.04,
            attach: "cap",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 38,
            pos: {
                x: -61.73,
                y: 229.49,
                attach: "base",
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point5,
                            { ...HCapConfig.points.point5, x: -61.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point6,
                            { ...HCapConfig.points.point6, x: -61.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point7,
                            { ...HCapConfig.points.point7, x: -61.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point8,
                            { ...HCapConfig.points.point8, x: -61.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point9,
                            { ...HCapConfig.points.point9, x: -61.73 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point10,
                            { ...HCapConfig.points.point10, x: -61.73 },
                            0,
                        )(base, val),
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 21.64,
            pos: {
                x: -0.01,
                y: 174.42,
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point4,
                            {
                                ...HCapConfig.points.point4,
                                x: HCapConfig.points.point4.x,
                                y: 174.42,
                            },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point5,
                            { ...HCapConfig.points.point5, y: 174.42 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point10,
                            { ...HCapConfig.points.point10, y: 174.42 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point11,
                            { ...HCapConfig.points.point11, y: 174.42 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 38,
            pos: {
                x: 61.71,
                y: 229.49,
                attach: "base",
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point1,
                            { ...HCapConfig.points.point1, x: 61.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point2,
                            { ...HCapConfig.points.point2, x: 61.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point3,
                            { ...HCapConfig.points.point3, x: 61.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point4,
                            { ...HCapConfig.points.point4, x: 61.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point11,
                            { ...HCapConfig.points.point11, x: 61.71 },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point12,
                            { ...HCapConfig.points.point12, x: 61.71 },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
