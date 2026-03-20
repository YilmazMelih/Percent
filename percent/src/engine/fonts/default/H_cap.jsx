import { interpolateFromBase } from "../../project";

export const HCapConfig = {
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
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -61.73, y: base.y }, 0),
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
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 174.42 }, 0),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 174.42 }, 0),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 174.42 }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 174.42 }, 0),
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
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 61.71, y: base.y }, 0),
                },
            ],
        },
    ],
};
