import { makeCopyDeltaFromInterpolation } from "../../project";

export const FCapConfig = {
    unicode: 70,
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
            attach: "base",
        },
        point2: {
            x: -88.49,
            y: 81.3,
            attach: "cap",
        },
        point3: {
            x: 88.22,
            y: 81.3,
            attach: "cap",
        },
        point4: {
            x: 88.49,
            y: 125.95,
            attach: "cap",
        },
        point5: {
            x: -12.18,
            y: 126.22,
            attach: "cap",
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
            attach: "base",
        },
        point11: {
            x: -88.49,
            y: 267.76,
            attach: "base",
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
                attach: "base",
            },
            affects: [
                {
                    point: "point1",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point1,
                            { ...FCapConfig.points.point1, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point2",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point2,
                            { ...FCapConfig.points.point2, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point5",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point5,
                            { ...FCapConfig.points.point5, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point6",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point6,
                            { ...FCapConfig.points.point6, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point9,
                            { ...FCapConfig.points.point9, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point10,
                            { ...FCapConfig.points.point10, x: -50.29 },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point11,
                            { ...FCapConfig.points.point11, x: -50.29 },
                            0,
                        )(base, val),
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
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point6,
                            { ...FCapConfig.points.point6, y: 172.69 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point7,
                            { ...FCapConfig.points.point7, y: 172.69 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point8,
                            { ...FCapConfig.points.point8, y: 172.69 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point9,
                            { ...FCapConfig.points.point9, y: 172.69 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
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
                attach: "cap",
            },
            affects: [
                {
                    point: "point4",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point4,
                            { ...FCapConfig.points.point4, y: 103.7 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            FCapConfig.points.point5,
                            { ...FCapConfig.points.point5, y: 103.7 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
    ],
};
