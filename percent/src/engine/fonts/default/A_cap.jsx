import { makeCopyDeltaFromInterpolation } from "../../project";

export const ACapConfig = {
    unicode: 65,
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
        rightBottomRight: { x: 105.14, y: 0, attach: "base" },
        rightBottomLeft: { x: 29.1, y: 0, attach: "base" },
        midBottomRight: { x: 21.52, y: 237.18 },
        midBottomLeft: { x: -22.06, y: 237.45 },
        leftBottomRight: { x: -29.64, y: 0, attach: "base" },
        leftBottomLeft: { x: -105.14, y: 0, attach: "base" },
        leftTop: { x: -44.79, y: 0, attach: "cap" },
        rightTop: { x: 43.71, y: 0, attach: "cap" },
        centBottomRight: { x: 12.86, y: 193.89 },
        centTopRight: { x: -0.41, y: 136.25 - 80.5, attach: "cap" },
        centTopLeft: { x: -1.76, y: 136.25 - 80.5, attach: "cap" },
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
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ACapConfig.points.midBottomLeft,
                            { x: -22.06, y: 215.535 },
                            0,
                        )(base, val),
                },
                {
                    point: "midBottomRight",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ACapConfig.points.midBottomRight,
                            { x: 21.52, y: 215.535 },
                            0,
                        )(base, val),
                },
                {
                    point: "centBottomRight",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centBottomRight,
                            { x: 12.86, y: 215.535 },
                            0,
                        )(base, val),
                },
                {
                    point: "centBottomLeft",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centBottomLeft,
                            { x: -13.67, y: 215.535 },
                            0,
                        )(base, val),
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
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.leftBottomLeft,
                            { x: -29.64, y: 267.22 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "leftBottomRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.leftBottomRight,
                            { x: -105.14, y: 267.76 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "midBottomLeft",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.midBottomLeft,
                            { x: -95.37, y: 237.45 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "centTopLeft",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centTopLeft,
                            { x: -62.99, y: 136.25 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "centBottomLeft",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centBottomLeft,
                            { x: -81.62, y: 193.89 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "leftTop",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.leftTop,
                            { x: 9.76, y: 80.5 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
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
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.rightBottomLeft,
                            { x: 105.14, y: 267.76 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "rightBottomRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.rightBottomRight,
                            { x: 29.1, y: 267.76 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "midBottomRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.midBottomRight,
                            { x: 95.11, y: 237.18 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "centTopRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centTopRight,
                            { x: 61.99, y: 136.25 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "centBottomRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centBottomRight,
                            { x: 80.9, y: 193.89 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
                    },
                },
                {
                    point: "rightTop",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.rightTop,
                            { x: -13.25, y: 80.5 },
                            -1,
                        )(base, val);
                        return { ...out, y: base.y };
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
                y: 108.375 - 80.5,
                attach: "cap",
            },
            affects: [
                {
                    point: "centTopRight",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centTopRight,
                            { x: -0.41, y: 108.375 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "centTopLeft",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ACapConfig.points.centTopLeft,
                            { x: -1.76, y: 108.375 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
    ],
};
