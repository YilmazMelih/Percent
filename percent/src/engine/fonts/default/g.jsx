import { makeCopyDeltaFromInterpolation } from "../../project";

export const gConfig = {
    unicode: 103,
    basePath: [
        {
            cmd: "M",
            points: ["point30"],
        },
        {
            cmd: "C",
            points: ["point30", "point2", "point3"],
        },
        {
            cmd: "C",
            points: ["point4", "point5", "point6"],
        },
        {
            cmd: "C",
            points: ["point7", "point8", "point9"],
        },
        {
            cmd: "C",
            points: ["point10", "point11", "point11"],
        },
        {
            cmd: "L",
            points: ["point12"],
        },
        {
            cmd: "C",
            points: ["point12", "point13", "point14"],
        },
        {
            cmd: "C",
            points: ["point15", "point16", "point17"],
        },
        {
            cmd: "L",
            points: ["point18"],
        },
        {
            cmd: "C",
            points: ["point18", "point19", "point20"],
        },
        {
            cmd: "C",
            points: ["point21", "point22", "point23"],
        },
        {
            cmd: "C",
            points: ["point24", "point25", "point26"],
        },
        {
            cmd: "C",
            points: ["point27", "point28", "point28"],
        },
        {
            cmd: "L",
            points: ["point29"],
        },
        {
            cmd: "L",
            points: ["point30"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point31"],
        },
        {
            cmd: "C",
            points: ["point32", "point33", "point34"],
        },
        {
            cmd: "C",
            points: ["point35", "point36", "point37"],
        },
        {
            cmd: "C",
            points: ["point38", "point39", "point40"],
        },
        {
            cmd: "C",
            points: ["point41", "point42", "point31"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 87.34,
            y: 131.39,
        },
        point2: {
            x: 89.92,
            y: 264.54,
            attach: "desc",
        },
        point3: {
            x: 85.72,
            y: 282.12,
            attach: "desc",
        },
        point4: {
            x: 81.66,
            y: 299.71,
            attach: "desc",
        },
        point5: {
            x: 71.11,
            y: 315.41,
            attach: "desc",
        },
        point6: {
            x: 47.56,
            y: 324.88,
            attach: "desc",
        },
        point7: {
            x: 16.44,
            y: 337.6,
            attach: "desc",
        },
        point8: {
            x: -38.77,
            y: 337.33,
            attach: "desc",
        },
        point9: {
            x: -65.83,
            y: 317.57,
            attach: "desc",
        },
        point10: {
            x: -86.13,
            y: 302.69,
            attach: "desc",
        },
        point11: {
            x: -86.4,
            y: 288.61,
            attach: "desc",
        },
        point12: {
            x: -23.62,
            y: 273.73,
            attach: "desc",
        },
        point13: {
            x: -22.27,
            y: 291.86,
            attach: "desc",
        },
        point14: {
            x: -1.16,
            y: 292.94,
            attach: "desc",
        },
        point15: {
            x: 19.68,
            y: 294.02,
            attach: "desc",
        },
        point16: {
            x: 26.17,
            y: 281.3,
            attach: "desc",
        },
        point17: {
            x: 25.09,
            y: 263.17,
            attach: "desc",
        },
        point18: {
            x: 25.09,
            y: 246.66,
            attach: "base",
        },
        point19: {
            x: 5.88,
            y: 278.32,
            attach: "base",
        },
        point20: {
            x: -45.27,
            y: 265.6,
            attach: "base",
        },
        point21: {
            x: -67.19,
            y: 259.92,
            attach: "base",
        },
        point22: {
            x: -89.92,
            y: 242.06,
            attach: "base",
        },
        point23: {
            x: -89.92,
            y: 202.28,
        },
        point24: {
            x: -89.92,
            y: 142.2,
            attach: "xh",
        },
        point25: {
            x: -54.47,
            y: 123.26,
            attach: "xh",
        },
        point26: {
            x: -9.82,
            y: 127.86,
            attach: "xh",
        },
        point27: {
            x: 11.83,
            y: 130.03,
            attach: "xh",
        },
        point28: {
            x: 25.09,
            y: 148.16,
            attach: "xh",
        },
        point29: {
            x: 25.09,
            y: 131.38,
            attach: "xh",
        },
        point30: {
            x: 87.33,
            y: 131.38,
            attach: "xh",
        },
        point31: {
            x: 24.83,
            y: 196.34,
        },
        point32: {
            x: 24.83,
            y: 179.02,
            attach: "xh",
        },
        point33: {
            x: 16.17,
            y: 164.41,
            attach: "xh",
        },
        point34: {
            x: 4.53,
            y: 161.97,
            attach: "xh",
        },
        point35: {
            x: -13.87,
            y: 157.91,
            attach: "xh",
        },
        point36: {
            x: -27.4,
            y: 173.88,
            attach: "xh",
        },
        point37: {
            x: -27.4,
            y: 196.07,
        },
        point38: {
            x: -27.4,
            y: 220.15,
            attach: "base",
        },
        point39: {
            x: -16.03,
            y: 235.85,
            attach: "base",
        },
        point40: {
            x: 3.45,
            y: 232.87,
            attach: "base",
        },
        point41: {
            x: 17.79,
            y: 230.98,
            attach: "base",
        },
        point42: {
            x: 24.83,
            y: 216.09,
            attach: "base",
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 31.37,
            pos: {
                x: -57.26,
                y: 213.93,
            },
            affects: [
                {
                    point: "point27",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point27,
                            { ...gConfig.points.point27, x: 15.16, y: 133.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point26",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point26,
                            { ...gConfig.points.point26, x: -6.6, y: 133.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point25",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point25,
                            { ...gConfig.points.point25, x: -50.28, y: 133.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point24",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point24,
                            { ...gConfig.points.point24, x: -60.93, y: 170.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point23",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point23,
                            { ...gConfig.points.point23, x: -60.93, y: 204.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point22",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point22,
                            { ...gConfig.points.point22, x: -60.93, y: 244.69 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point21",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point21,
                            { ...gConfig.points.point21, x: -45.89, y: 276.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point20",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point20,
                            { ...gConfig.points.point20, x: -5.38, y: 276.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point19",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point19,
                            { ...gConfig.points.point19, x: 20.46, y: 276.99 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point34",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point34,
                            { ...gConfig.points.point34, x: -0.22, y: 151.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point35",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point35,
                            { ...gConfig.points.point35, x: -23.72, y: 151.8 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point36",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point36,
                            { ...gConfig.points.point36, x: -38.01, y: 168.35 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point37",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point37,
                            { ...gConfig.points.point37, x: -38.01, y: 197.24 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point38",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point38,
                            { ...gConfig.points.point38, x: -38.01, y: 226.13 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point39",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point39,
                            { ...gConfig.points.point39, x: -34.91, y: 257.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point40",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point40,
                            { ...gConfig.points.point40, x: -0.22, y: 257.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point41",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point41,
                            { ...gConfig.points.point41, x: 25.12, y: 257.49 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point42",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point42,
                            { ...gConfig.points.point42, x: 25.12, y: 222.3 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point31",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point31,
                            { ...gConfig.points.point31, x: 25.12, y: 202.54 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point32",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point32,
                            { ...gConfig.points.point32, x: 25.12, y: 180.85 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point33",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point33,
                            { ...gConfig.points.point33, x: 21.19, y: 151.8 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            r: 31.23,
            pos: {
                x: 56.35,
                y: 261.77,
            },
            affects: [
                {
                    point: "point30",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point30,
                            { ...gConfig.points.point30, x: 48.12, y: 131.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point2,
                            { ...gConfig.points.point2, x: 48.13, y: 271.28 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point3,
                            { ...gConfig.points.point3, x: 48.13, y: 282.24 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point4,
                            { ...gConfig.points.point4, x: 42.63, y: 298.98 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point18",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point18,
                            { ...gConfig.points.point18, x: 25.09, y: 256.78 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point17",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point17,
                            { ...gConfig.points.point17, x: 26.44, y: 276.72 },
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
            r: 22.4,
            pos: {
                x: -23.72,
                y: 309.69,
                attach: "desc",
            },
            affects: [
                {
                    point: "point15",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point15,
                            { ...gConfig.points.point15, x: 19.27, y: 306.83 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point14",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point14,
                            { ...gConfig.points.point14, x: -1.58, y: 306.25 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point13",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point13,
                            { ...gConfig.points.point13, x: -28.32, y: 305.51 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point12",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point12,
                            { ...gConfig.points.point12, x: -33.83, y: 293.25 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point11",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point11,
                            { ...gConfig.points.point11, x: -53.34, y: 307.34 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point10",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point10,
                            { ...gConfig.points.point10, x: -45.91, y: 318.93 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point9",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point9,
                            { ...gConfig.points.point9, x: -27.41, y: 323.31 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point8",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point8,
                            { ...gConfig.points.point8, x: 3.53, y: 330.64 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point7",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point7,
                            { ...gConfig.points.point7, x: 19.8, y: 325.91 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point6",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point6,
                            { ...gConfig.points.point6, x: 33.59, y: 319.29 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point5",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point5,
                            { ...gConfig.points.point5, x: 56.34, y: 308.38 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point4",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point4,
                            { ...gConfig.points.point4, x: 81.46, y: 289.68 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point3",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point3,
                            { ...gConfig.points.point3, x: 87.09, y: 268.79 },
                            0,
                        )(base, val);
                    },
                },
                {
                    point: "point2",
                    formula: (base, val) => {
                        return makeCopyDeltaFromInterpolation(
                            gConfig.points.point2,
                            { ...gConfig.points.point2, x: 91.29, y: 251.21 },
                            0,
                        )(base, val);
                    },
                },
            ],
        },
    ],
};
