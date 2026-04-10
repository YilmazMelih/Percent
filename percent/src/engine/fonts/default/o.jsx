import { makeCopyDeltaFromInterpolation } from "../../project";

export const oConfig = {
    basePath: [
        {
            cmd: "M",
            points: ["point1"],
        },
        {
            cmd: "C",
            points: ["point2", "point3", "point4"],
        },
        {
            cmd: "C",
            points: ["point5", "point6", "point7"],
        },
        {
            cmd: "C",
            points: ["point8", "point9", "point10"],
        },
        {
            cmd: "C",
            points: ["point11", "point12", "point1"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point13"],
        },
        {
            cmd: "C",
            points: ["point14", "point15", "point16"],
        },
        {
            cmd: "C",
            points: ["point17", "point18", "point19"],
        },
        {
            cmd: "C",
            points: ["point20", "point21", "point22"],
        },
        {
            cmd: "C",
            points: ["point23", "point24", "point13"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 87.41,
            y: 198.75,
        },
        point2: {
            x: 87.41,
            y: 241.78,
            attach: "base",
        },
        point3: {
            x: 58.18,
            y: 269.92,
            attach: "base",
        },
        point4: {
            x: -0.27,
            y: 269.92,
            attach: "base",
        },
        point5: {
            x: -54.93,
            y: 269.92,
            attach: "base",
        },
        point6: {
            x: -87.41,
            y: 245.84,
            attach: "base",
        },
        point7: {
            x: -87.41,
            y: 198.75,
        },
        point8: {
            x: -87.41,
            y: 151.66,
            attach: "xh",
        },
        point9: {
            x: -50.34,
            y: 127.58,
            attach: "xh",
        },
        point10: {
            x: -0.27,
            y: 127.58,
            attach: "xh",
        },
        point11: {
            x: 56.29,
            y: 127.58,
            attach: "xh",
        },
        point12: {
            x: 87.41,
            y: 156.81,
            attach: "xh",
        },
        point13: {
            x: 27.88,
            y: 198.75,
        },
        point14: {
            x: 27.34,
            y: 177.91,
            attach: "xh",
        },
        point15: {
            x: 15.97,
            y: 163.84,
            attach: "xh",
        },
        point16: {
            x: -0.81,
            y: 163.84,
            attach: "xh",
        },
        point17: {
            x: -16.51,
            y: 163.84,
            attach: "xh",
        },
        point18: {
            x: -28.68,
            y: 176.83,
            attach: "xh",
        },
        point19: {
            x: -28.14,
            y: 198.75,
        },
        point20: {
            x: -27.87,
            y: 221.48,
            attach: "base",
        },
        point21: {
            x: -15.69,
            y: 233.39,
            attach: "base",
        },
        point22: {
            x: 0.55,
            y: 233.39,
            attach: "base",
        },
        point23: {
            x: 16.79,
            y: 233.39,
            attach: "base",
        },
        point24: {
            x: 28.15,
            y: 219.86,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "right",
            default: 1,
            r: 29.77,
            pos: {
                x: 57.65,
                y: 198.62,
            },
            affects: [
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point3,
                            { ...oConfig.points.point3, x: 53.77, y: 269.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point2,
                            { ...oConfig.points.point2, x: 65.03, y: 228.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point1",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point1,
                            { ...oConfig.points.point1, x: 65.03, y: 198.62 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point12,
                            { ...oConfig.points.point12, x: 65.03, y: 166.35 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point11,
                            { ...oConfig.points.point11, x: 49.8, y: 127.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point14,
                            { ...oConfig.points.point14, x: 40.37, y: 168.97 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point13,
                            { ...oConfig.points.point13, x: 40.39, y: 198.74 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point24,
                            { ...oConfig.points.point24, x: 40.39, y: 230.09 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "left",
            default: 1,
            r: 29.77,
            pos: {
                x: -57.64,
                y: 198.75,
            },
            affects: [
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point5,
                            { ...oConfig.points.point5, x: -50.01, y: 269.92 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point6,
                            { ...oConfig.points.point6, x: -65.03, y: 233.39 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point7,
                            { ...oConfig.points.point7, x: -65.03, y: 198.75 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point8,
                            { ...oConfig.points.point8, x: -65.03, y: 160.71 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point9,
                            { ...oConfig.points.point9, x: -48.95, y: 127.58 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point18,
                            { ...oConfig.points.point18, x: -40.11, y: 165.4 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point19,
                            { ...oConfig.points.point19, x: -40.11, y: 198.75 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point20,
                            { ...oConfig.points.point20, x: -40.11, y: 234.64 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "2",
            name: "bottom",
            default: 1,
            r: 18.27,
            pos: {
                x: 0,
                y: 251.66,
                attach: "base",
            },
            affects: [
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point21,
                            { ...oConfig.points.point21, x: -21.37, y: 251.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point22,
                            { ...oConfig.points.point22, x: 0.55, y: 251.46 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point23,
                            { ...oConfig.points.point23, x: 25.12, y: 251.46 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "3",
            name: "top",
            default: 1,
            r: 18.27,
            pos: {
                x: -1.96,
                y: 145.85,
                attach: "xh",
            },
            affects: [
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point17,
                            { ...oConfig.points.point17, x: -24.56, y: 145.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point16",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point16,
                            { ...oConfig.points.point16, x: -0.81, y: 145.84 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            oConfig.points.point15,
                            { ...oConfig.points.point15, x: 27.88, y: 145.84 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
