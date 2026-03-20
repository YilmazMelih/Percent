import { interpolateFromBase } from "../../project";

export const FCapConfig = {
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
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: -88.49,
            y: 267.75,
        },
        point2: {
            x: -88.49,
            y: 81.3,
        },
        point3: {
            x: 88.22,
            y: 81.3,
        },
        point4: {
            x: 88.49,
            y: 125.95,
        },
        point5: {
            x: -12.18,
            y: 126.22,
        },
        point6: {
            x: -12.18,
            y: 151.39,
        },
        point7: {
            x: 53.04,
            y: 151.39,
        },
        point8: {
            x: 52.5,
            y: 193.88,
        },
        point9: {
            x: -12.45,
            y: 194.15,
        },
        point10: {
            x: -11.91,
            y: 267.76,
        },
        point11: {
            x: -88.49,
            y: 267.76,
        },
    },
    nodes: [
        {
            id: "0",
            name: "bottom",
            default: 1,
            r: 38.2,
            pos: {
                x: -50.29,
                y: 229.26,
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.29, y: base.y }, 0),
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 21.34,
            pos: {
                x: 15.26,
                y: 172.69,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.69 }, 0),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.69 }, 0),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.69 }, 0),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.69 }, 0),
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 1,
            r: 22.4,
            pos: {
                x: 35.49,
                y: 103.7,
            },
            affects: [
                {
                    point: "point2",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.7 }, 0),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.7 }, 0),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.7 }, 0),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.7 }, 0),
                },
            ],
        },
    ],
};
