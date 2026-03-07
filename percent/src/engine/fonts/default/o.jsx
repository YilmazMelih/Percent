import { extractPathPoints } from "../../project";
import { buildPath, buildNodes } from "../../project";
import Node from "../../Node";

const oPrototypeConfig = {
    basePath: [
        { cmd: "M", points: ["topOuter"] },
        { cmd: "Q", points: ["topLeftOCP", "leftOuter"] },
        { cmd: "Q", points: ["bottomLeftOCP", "bottomOuter"] },
        { cmd: "Q", points: ["bottomRightOCP", "rightOuter"] },
        { cmd: "Q", points: ["topRightOCP", "topOuter"] },
        { cmd: "Z" },
        { cmd: "M", points: ["topInner"] },
        { cmd: "Q", points: ["topRightICP", "rightInner"] },
        { cmd: "Q", points: ["bottomRightICP", "bottomInner"] },
        { cmd: "Q", points: ["bottomLeftICP", "leftInner"] },
        { cmd: "Q", points: ["topLeftICP", "topInner"] },
        { cmd: "Z" },
    ],
    //Need future change:
    //Either points need to be stored assuming
    // that node value is 1, or 0. For now, I'm gonna assume 0
    // since it'll make it easier to write the function.
    // Should try and find a way to assume 1 though.
    points: {
        leftOuter: { x: -18.75, y: 0 },
        rightOuter: { x: 18.75, y: 0 },
        topOuter: { x: 0, y: -18.75 },
        bottomOuter: { x: 0, y: 18.75 },
        leftInner: { x: -18.75, y: 0 },
        rightInner: { x: 18.75, y: 0 },
        topInner: { x: 0, y: -18.75 },
        bottomInner: { x: 0, y: 18.75 },
        bottomLeftOCP: { x: -18.75, y: 18.75 },
        bottomRightOCP: { x: 18.75, y: 18.75 },
        topLeftOCP: { x: -18.75, y: -18.75 },
        topRightOCP: { x: 18.75, y: -18.75 },
        bottomLeftICP: { x: -18.75, y: 18.75 },
        bottomRightICP: { x: 18.75, y: 18.75 },
        topLeftICP: { x: -18.75, y: -18.75 },
        topRightICP: { x: 18.75, y: -18.75 },
    },
    nodes: [
        {
            id: "0",
            name: "left",
            default: 1,
            pos: { x: -18.75, y: 0 },
            affects: [
                {
                    point: "leftOuter",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "leftInner",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "1",
            name: "right",
            default: 1,
            pos: { x: 18.75, y: 0 },
            affects: [
                {
                    point: "rightOuter",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "rightInner",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x + 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x - 6.25 * val, y: base.y };
                    },
                },
            ],
        },
        {
            id: "2",
            name: "top",
            default: 1,
            pos: { x: 0, y: -18.75 },
            affects: [
                {
                    point: "topOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "topRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "topRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "topLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
            ],
        },
        {
            id: "3",
            name: "bottom",
            default: 1,
            pos: { x: 0, y: 18.75 },
            affects: [
                {
                    point: "bottomOuter",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomInner",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "bottomRightOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomLeftOCP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y + 6.25 * val };
                    },
                },
                {
                    point: "bottomRightICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
                {
                    point: "bottomLeftICP",
                    formula: (base, val) => {
                        return { x: base.x, y: base.y - 6.25 * val };
                    },
                },
            ],
        },
    ],
};

export function GetOPrototype({ nodeSizeOProt, seeNodes }) {
    const d = buildPath(oPrototypeConfig, nodeSizeOProt);
    const { controlPoints, endpoints } = extractPathPoints(d);

    return (
        <svg height="250" width="250" viewBox="-30 -30 60 60" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-gray-200 stroke-black stroke-1" d={d}></path>
            {seeNodes && buildNodes(oPrototypeConfig, nodeSizeOProt)}
            {controlPoints.map((point, i) => (
                <circle key={`${i}_controlP`} r={0.5} cx={point.x} cy={point.y} fill="red" />
            ))}
            {endpoints.map((point, i) => (
                <circle key={`${i}_endpoint`} r={1} cx={point.x} cy={point.y} fill="blue" />
            ))}
        </svg>
    );
}
