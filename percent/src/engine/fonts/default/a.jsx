function interpolateFromBase(val, base, sec, ratio) {
    // f(1) = base, f(ratio) = sec, interpolate linearly
    const s = (val - 1) / (ratio - 1);

    return {
        x: base.x + s * (sec.x - base.x),
        y: base.y + s * (sec.y - base.y),
    };
}

function pointBetween(p1, p2, t) {
    return {
        x: p1.x + (p2.x - p1.x) * t,
        y: p1.y + (p2.y - p1.y) * t,
    };
}

export const aConfig = {
    basePath: [
        { cmd: "M", points: ["point1"] },
        {
            cmd: "L",
            points: ["point2"],
        },
        {
            cmd: "L",
            points: ["point3"],
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
            cmd: "C",
            points: ["point9", "point10", "point11"],
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
            cmd: "C",
            points: ["point18", "point19", "point20"],
        },
        {
            cmd: "L",
            points: ["point21"],
        },
        {
            cmd: "C",
            points: ["point22", "point23", "point24"],
        },
        {
            cmd: "C",
            points: ["point25", "point26", "point27"],
        },
        {
            cmd: "C",
            points: ["point28", "point29", "point30"],
        },
        {
            cmd: "C",
            points: ["point30", "point31", "point32"],
        },
        {
            cmd: "L",
            points: ["point33"],
        },
        {
            cmd: "Z",
        },
        {
            cmd: "M",
            points: ["point34"],
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
            points: ["point41", "point42", "point43"],
        },
        {
            cmd: "Z",
        },
    ],
    points: {
        point1: {
            x: 87.57,
            y: 267.76,
        },
        point2: {
            x: 19.1,
            y: 267.76,
        },
        point3: {
            x: 16.94,
            y: 248.82,
        },
        point4: {
            x: 6.94,
            y: 264.79,
        },
        point5: {
            x: -24.19,
            y: 269.93,
        },
        point6: {
            x: -39.34,
            y: 272.64,
        },
        point7: {
            x: -86.36,
            y: 270.68,
        },
        point8: {
            x: -86.97,
            y: 236.37,
        },
        point9: {
            x: -87.58,
            y: 202.13,
        },
        point10: {
            x: -57.3,
            y: 190.37,
        },
        point11: {
            x: -27.71,
            y: 190.37,
        },
        point12: {
            x: -1.93,
            y: 190.37,
        },
        point13: {
            x: 8.28,
            y: 188.48,
        },
        point14: {
            x: 12.88,
            y: 180.63,
        },
        point15: {
            x: 14.77,
            y: 177.38,
        },
        point16: {
            x: 13.96,
            y: 171.43,
        },
        point17: {
            x: 10.71,
            y: 167.64,
        },
        point18: {
            x: 4.22,
            y: 160.06,
        },
        point19: {
            x: -15.54,
            y: 159.52,
        },
        point20: {
            x: -17.43,
            y: 178.46,
        },
        point21: {
            x: -78.86,
            y: 170.07,
        },
        point22: {
            x: -77.24,
            y: 154.92,
        },
        point23: {
            x: -68.31,
            y: 144.63,
        },
        point24: {
            x: -56.94,
            y: 138.41,
        },
        point25: {
            x: -19.05,
            y: 118.11,
        },
        point26: {
            x: 43.19,
            y: 127.59,
        },
        point27: {
            x: 56.72,
            y: 136.52,
        },
        point28: {
            x: 80.53,
            y: 152.76,
        },
        point29: {
            x: 80.8,
            y: 175.22,
        },
        point30: {
            x: 80.8,
            y: 207.69,
        },
        point31: {
            x: 79.72,
            y: 246.39,
        },
        point32: {
            x: 82.42,
            y: 252.61,
        },
        point33: {
            x: 87.56,
            y: 267.76,
        },
        point34: {
            x: 14.51,
            y: 205.79,
        },
        point35: {
            x: 4.5,
            y: 212.56,
        },
        point36: {
            x: -14.99,
            y: 209.58,
        },
        point37: {
            x: -20.13,
            y: 218.51,
        },
        point38: {
            x: -27.44,
            y: 232.04,
        },
        point39: {
            x: -11.74,
            y: 243.68,
        },
        point40: {
            x: 5.58,
            y: 234.21,
        },
        point41: {
            x: 16.13,
            y: 228.26,
        },
        point42: {
            x: 14.51,
            y: 211.21,
        },
        point43: {
            x: 14.51,
            y: 205.8,
        },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            r: 32.9,
            pos: {
                x: -54.08,
                y: 234.5,
            },
            affects: [],
        },
        {
            id: "1",
            name: "top",
            default: 1,
            r: 18.26,
            pos: {
                x: 2.04,
                y: 144.58,
            },
            affects: [],
        },
        {
            id: "2",
            name: "right",
            default: 1,
            r: 33.14,
            pos: {
                x: 47.74,
                y: 213.81,
            },
            affects: [],
        },
        {
            id: "3",
            name: "middle",
            default: 1,
            r: 10.86,
            pos: {
                x: -4.37,
                y: 200.25,
            },
            affects: [],
        },
        {
            id: "4",
            name: "bottom",
            default: 1,
            r: 12.52,
            pos: {
                x: -3.69,
                y: 250.17,
            },
            affects: [],
        },
    ],
};
