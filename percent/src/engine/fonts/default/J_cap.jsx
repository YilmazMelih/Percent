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
            affects: [],
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
            affects: [],
        },
    ],
};
