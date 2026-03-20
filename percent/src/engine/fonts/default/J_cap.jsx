import { interpolateFromBase } from "../../project";

export const JCapConfig = {
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
            cmd: "C",
            points: ["point3", "point4", "point5"],
        },
        {
            cmd: "C",
            points: ["point6", "point7", "point8"],
        },
        {
            cmd: "L",
            points: ["point9"],
        },
        {
            cmd: "C",
            points: ["point9", "point10", "point11"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point14"],
        },
        {
            cmd: "L",
            points: ["point15"],
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
            x: 89.44,
            y: 80.5,
        },
        point2: {
            x: 89.44,
            y: 186.85,
        },
        point3: {
            x: 89.44,
            y: 250.98,
        },
        point4: {
            x: 55.88,
            y: 272.09,
        },
        point5: {
            x: 1.22,
            y: 273.72,
        },
        point6: {
            x: -60.48,
            y: 275.61,
        },
        point7: {
            x: -89.44,
            y: 244.76,
        },
        point8: {
            x: -89.44,
            y: 200.93,
        },
        point9: {
            x: -20.16,
            y: 189.56,
        },
        point10: {
            x: -23.41,
            y: 226.9,
        },
        point11: {
            x: -2.84,
            y: 226.09,
        },
        point12: {
            x: 15.29,
            y: 225.55,
        },
        point13: {
            x: 13.67,
            y: 212.02,
        },
        point14: {
            x: 13.67,
            y: 177.11,
        },
        point15: {
            x: 13.67,
            y: 80.5,
        },
    },
    nodes: [
        {
            id: "0",
            name: "right",
            default: 1,
            r: 37.89,
            pos: {
                x: 51.56,
                y: 161.45,
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 22.7, y: 226.09 }, 0),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 26.69, y: 212.7 }, 0),
                },
                {
                    point: "point14",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 26.69, y: 189.56 }, 0),
                },
                {
                    point: "point15",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 26.69, y: 80.81 }, 0),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 49.72, y: 80.81 }, 0),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 49.73, y: 218.41 }, 0),
                },
                {
                    point: "point3",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 49.73, y: 246.3 }, 0),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 40.13, y: 273.46 }, 0),
                },
            ],
        },
        {
            id: "1",
            name: "bottom",
            default: 1,
            r: 28.42,
            pos: {
                x: -34.23,
                y: 241.13,
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -36.18, y: 273.49 }, 0),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -45.19, y: 252.74 }, 0),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -49.73, y: 242.59 }, 0),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -26.42, y: 233.92 }, 0),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -22.09, y: 251.69 }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -2.35, y: 251.69 }, 0),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: 15.79, y: 251.69 }, 0),
                },
            ],
        },
    ],
};
