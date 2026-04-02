import { makeCopyDeltaFromInterpolation } from "../../project";

export const ECapConfig = {
    unicode: 69,
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
            points: ["point13"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 88.5,
            y: 221.21 - 267.76,
            attach: "base",
        },
        point2: {
            x: 88.22,
            y: 267.76 - 267.76,
            attach: "base",
        },
        point3: {
            x: -88.49,
            y: 267.76 - 267.76,
            attach: "base",
        },
        point4: {
            x: -88.49,
            y: 81.31 - 80.5,
            attach: "cap",
        },
        point5: {
            x: 88.22,
            y: 81.31 - 80.5,
            attach: "cap",
        },
        point6: {
            x: 88.49,
            y: 126.23 - 80.5,
            attach: "cap",
        },
        point7: {
            x: -12.19,
            y: 126.23 - 80.5,
            attach: "cap",
        },
        point8: {
            x: -12.19,
            y: 151.67,
        },
        point9: {
            x: 53.03,
            y: 151.4,
        },
        point10: {
            x: 52.5,
            y: 194.16,
        },
        point11: {
            x: -12.45,
            y: 194.16,
        },
        point12: {
            x: -11.91,
            y: 221.22 - 267.76,
            attach: "base",
        },
        point13: {
            x: 88.49,
            y: 221.22 - 267.76,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "top",
            default: 1,
            r: 22.46,
            pos: {
                x: 12.63,
                y: 103.37 - 80.5,
                attach: "cap",
            },
            affects: [
                {
                    point: "point6",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point6,
                            { x: ECapConfig.points.point6.x, y: 103.37 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point7,
                            { x: ECapConfig.points.point7.x, y: 103.37 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
        {
            id: "1",
            name: "middle",
            default: 1,
            r: 21.23,
            pos: {
                x: 12.63,
                y: 172.44,
            },
            affects: [
                {
                    point: "point8",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point8,
                            { x: ECapConfig.points.point8.x, y: 172.44 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point9,
                            { x: ECapConfig.points.point9.x, y: 172.44 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point10,
                            { x: ECapConfig.points.point10.x, y: 172.44 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point11,
                            { x: ECapConfig.points.point11.x, y: 172.44 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 23.34,
            pos: {
                x: 12.63,
                y: 244.01 - 267.76,
                attach: "base",
            },
            affects: [
                {
                    point: "point12",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point12,
                            { x: ECapConfig.points.point12.x, y: 244.01 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point13,
                            { x: ECapConfig.points.point13.x, y: 244.01 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        const out = makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point1,
                            { x: ECapConfig.points.point1.x, y: 244.01 },
                            0,
                        )(base, val);
                        return { x: base.x, y: out.y };
                    },
                },
            ],
        },
        {
            id: "3",
            name: "left",
            default: 1,
            r: 38.16,
            pos: {
                x: -50.33,
                y: 189.38,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point3,
                            { x: -50.33, y: ECapConfig.points.point3.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point4,
                            { x: -50.33, y: ECapConfig.points.point4.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point7,
                            { x: -50.33, y: ECapConfig.points.point7.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point8,
                            { x: -50.33, y: ECapConfig.points.point8.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point11,
                            { x: -50.33, y: ECapConfig.points.point11.y },
                            0,
                        )(base, val),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        makeCopyDeltaFromInterpolation(
                            ECapConfig.points.point12,
                            { x: -50.33, y: ECapConfig.points.point12.y },
                            0,
                        )(base, val),
                },
            ],
        },
    ],
};
