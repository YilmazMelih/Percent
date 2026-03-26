import { interpolateFromBase } from "../../project";

export const lConfig = {
    unicode: 108,
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
            points: ["point1"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -38.02,
            y: 267.76,
        },
        point2: {
            x: -38.02,
            y: 81.04,
        },
        point3: {
            x: 38.02,
            y: 81.04,
        },
        point4: {
            x: 38.02,
            y: 267.76,
        },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 38.02,
            pos: {
                x: 0,
                y: 178.63,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) => interpolateFromBase(val, base, { x: 0, y: base.y }, 0),
                },
                {
                    point: "point2",
                    formula: (base, val) => interpolateFromBase(val, base, { x: 0, y: base.y }, 0),
                },
                {
                    point: "point3",
                    formula: (base, val) => interpolateFromBase(val, base, { x: 0, y: base.y }, 0),
                },
                {
                    point: "point4",
                    formula: (base, val) => interpolateFromBase(val, base, { x: 0, y: base.y }, 0),
                },
            ],
        },
    ],
};
