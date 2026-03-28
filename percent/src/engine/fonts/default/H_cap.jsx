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
        },
        point2: {
            x: 99.72,
            y: 267.76,
        },
        point3: {
            x: 23.68,
            y: 267.76,
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
        },
        point7: {
            x: -99.72,
            y: 267.76,
        },
        point8: {
            x: -99.72,
            y: 81.04,
        },
        point9: {
            x: -23.68,
            y: 81.04,
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
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point5,
                            { x: -61.73, y: HCapConfig.points.point5.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point6,
                            { x: -61.73, y: HCapConfig.points.point6.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point7,
                            { x: -61.73, y: HCapConfig.points.point7.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point8,
                            { x: -61.73, y: HCapConfig.points.point8.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point9,
                            { x: -61.73, y: HCapConfig.points.point9.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point10,
                            { x: -61.73, y: HCapConfig.points.point10.y },
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
                            { x: HCapConfig.points.point4.x, y: 174.42 },
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
                            { x: HCapConfig.points.point5.x, y: 174.42 },
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
                            { x: HCapConfig.points.point10.x, y: 174.42 },
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
                            { x: HCapConfig.points.point11.x, y: 174.42 },
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
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point1,
                            { x: 61.71, y: HCapConfig.points.point1.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point2,
                            { x: 61.71, y: HCapConfig.points.point2.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point3,
                            { x: 61.71, y: HCapConfig.points.point3.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point4,
                            { x: 61.71, y: HCapConfig.points.point4.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point11,
                            { x: 61.71, y: HCapConfig.points.point11.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            HCapConfig.points.point12,
                            { x: 61.71, y: HCapConfig.points.point12.y },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
