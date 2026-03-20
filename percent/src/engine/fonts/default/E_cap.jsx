import { interpolateFromBase } from "../../project";

export const ECapConfig = {
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
            y: 221.21,
        },
        point2: {
            x: 88.22,
            y: 267.76,
        },
        point3: {
            x: -88.49,
            y: 267.76,
        },
        point4: {
            x: -88.49,
            y: 81.31,
        },
        point5: {
            x: 88.22,
            y: 81.31,
        },
        point6: {
            x: 88.49,
            y: 126.23,
        },
        point7: {
            x: -12.19,
            y: 126.23,
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
            y: 221.22,
        },
        point13: {
            x: 88.49,
            y: 221.22,
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
                y: 103.37,
            },
            affects: [
                // {
                //     point: "point4",
                //     formula: (base, val) =>
                //         interpolateFromBase(val, base, { x: base.x, y: 103.37 }, 0),
                // },
                // {
                //     point: "point5",
                //     formula: (base, val) =>
                //         interpolateFromBase(val, base, { x: base.x, y: 103.37 }, 0),
                // },
                {
                    point: "point6",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.37 }, 0),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 103.37 }, 0),
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
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.44 }, 0),
                },
                {
                    point: "point9",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.44 }, 0),
                },
                {
                    point: "point10",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.44 }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 172.44 }, 0),
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
                y: 244.01,
            },
            affects: [
                // {
                //     point: "point2",
                //     formula: (base, val) =>
                //         interpolateFromBase(val, base, { x: base.x, y: 244.01 }, 0),
                // },
                // {
                //     point: "point3",
                //     formula: (base, val) =>
                //         interpolateFromBase(val, base, { x: base.x, y: 244.01 }, 0),
                // },
                {
                    point: "point12",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 244.01 }, 0),
                },
                {
                    point: "point13",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 244.01 }, 0),
                },
                {
                    point: "point1",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: base.x, y: 244.01 }, 0),
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
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
                {
                    point: "point4",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
                {
                    point: "point7",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
                {
                    point: "point8",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
                {
                    point: "point11",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
                {
                    point: "point12",
                    formula: (base, val) =>
                        interpolateFromBase(val, base, { x: -50.33, y: base.y }, 0),
                },
            ],
        },
    ],
};
