import { interpolateFromBase } from "../../project";

export const ACapConfig = {
    basePath: [
        { cmd: "M", points: ["rightBottomRight"] },
        { cmd: "L", points: ["rightBottomLeft"] },
        { cmd: "L", points: ["midBottomRight"] },
        { cmd: "L", points: ["midBottomLeft"] },
        { cmd: "L", points: ["leftBottomRight"] },
        { cmd: "L", points: ["leftBottomLeft"] },
        { cmd: "L", points: ["leftTop"] },
        { cmd: "L", points: ["rightTop"] },
        { cmd: "L", points: ["rightBottomRight"] },
        { cmd: "Z" },
        { cmd: "M", points: ["centBottomRight"] },
        { cmd: "L", points: ["centTopRight"] },
        { cmd: "L", points: ["centTopLeft"] },
        { cmd: "L", points: ["centBottomLeft"] },
        { cmd: "L", points: ["centBottomRight"] },
        { cmd: "Z" },
    ],
    points: {
        rightBottomRight: { x: 105.14, y: 267.76 },
        rightBottomLeft: { x: 29.1, y: 267.76 },
        midBottomRight: { x: 21.52, y: 237.18 },
        midBottomLeft: { x: -22.06, y: 237.45 },
        leftBottomRight: { x: -29.64, y: 267.76 },
        leftBottomLeft: { x: -105.14, y: 267.22 },
        leftTop: { x: -44.79, y: 80.5 },
        rightTop: { x: 43.71, y: 80.5 },
        centBottomRight: { x: 12.86, y: 193.89 },
        centTopRight: { x: -0.41, y: 136.25 },
        centTopLeft: { x: -1.76, y: 136.25 },
        centBottomLeft: { x: -13.67, y: 193.89 },
    },
    nodes: [
        {
            id: "0",
            name: "middle",
            default: 1,
            r: 21.645,
            pos: { x: 0, y: 215.535 },
            affects: [
                {
                    point: "midBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: -22.06, y: 215.535 };
                        return interpolateFromBase(val, base, sec, 0);
                    },
                },
                {
                    point: "midBottomRight",
                    formula: (base, val) => {
                        const sec = { x: 21.52, y: 215.535 };
                        return interpolateFromBase(val, base, sec, 0);
                    },
                },
                {
                    point: "centBottomRight",
                    formula: (base, val) => {
                        const sec = { x: 12.86, y: 215.535 };
                        return interpolateFromBase(val, base, sec, 0);
                    },
                },
                {
                    point: "centBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: -13.67, y: 215.535 };
                        return interpolateFromBase(val, base, sec, 0);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "left",
            default: 1,
            r: 31.1,
            pos: {
                x: -39.12,
                y: 163.84,
            },
            affects: [
                {
                    point: "leftBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: -29.64, y: 267.22 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "leftBottomRight",
                    formula: (base, val) => {
                        const sec = { x: -105.14, y: 267.76 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "midBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: -95.37, y: 237.45 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "centTopLeft",
                    formula: (base, val) => {
                        const sec = { x: -62.99, y: 136.25 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "centBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: -81.62, y: 193.89 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "leftTop",
                    formula: (base, val) => {
                        const sec = { x: 9.76, y: 80.5 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 31.1,
            pos: {
                x: 38.15,
                y: 163.84,
            },
            affects: [
                {
                    point: "rightBottomLeft",
                    formula: (base, val) => {
                        const sec = { x: 105.14, y: 267.76 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "rightBottomRight",
                    formula: (base, val) => {
                        const sec = { x: 29.1, y: 267.76 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "midBottomRight",
                    formula: (base, val) => {
                        const sec = { x: 95.11, y: 237.18 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "centTopRight",
                    formula: (base, val) => {
                        const sec = { x: 61.99, y: 136.25 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "centBottomRight",
                    formula: (base, val) => {
                        const sec = { x: 80.9, y: 193.89 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
                {
                    point: "rightTop",
                    formula: (base, val) => {
                        const sec = { x: -13.25, y: 80.5 };
                        return { ...interpolateFromBase(val, base, sec, -1), y: base.y };
                    },
                },
            ],
        },
        {
            id: "3",
            name: "top",
            default: 1,
            r: 30.75,
            pos: {
                x: 0,
                y: 108.375,
            },
            affects: [
                // {
                //     point: "leftTop",
                //     formula: (base, val) => {
                //         const sec = { x: -44.79, y: 108.375 };
                //         return { ...interpolateFromBase(val, base, sec, 0), x: base.x };
                //     },
                // },
                // {
                //     point: "rightTop",
                //     formula: (base, val) => {
                //         const sec = { x: 43.71, y: 108.375 };
                //         return { ...interpolateFromBase(val, base, sec, 0), x: base.x };
                //     },
                // },
                {
                    point: "centTopRight",
                    formula: (base, val) => {
                        const sec = { x: -0.41, y: 108.375 };
                        return { ...interpolateFromBase(val, base, sec, 0), x: base.x };
                    },
                },
                {
                    point: "centTopLeft",
                    formula: (base, val) => {
                        const sec = { x: -1.76, y: 108.375 };
                        return { ...interpolateFromBase(val, base, sec, 0), x: base.x };
                    },
                },
            ],
        },
    ],
};
