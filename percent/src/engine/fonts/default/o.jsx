import { extractPathPoints } from "./generateGlyphs";
import Node from "../../Node";

export function GetOPrototype({ nodeSizeOProt, seeNodes, parameterizedPrototype }) {
    const { controlPoints, endpoints } = extractPathPoints(parameterizedPrototype(nodeSizeOProt));

    return (
        <svg height="250" width="250" viewBox="-30 -30 60 60" xmlns="http://www.w3.org/2000/svg">
            <path
                className="fill-gray-200 stroke-black stroke-1"
                d={parameterizedPrototype(nodeSizeOProt)}
            ></path>
            {seeNodes && (
                <>
                    <Node size={nodeSizeOProt[0] * 5.75} x="-18.75" y="0" />
                    <Node size={nodeSizeOProt[1] * 5.75} x="18.75" y="0" />
                    <Node size={nodeSizeOProt[2] * 5.75} x="0" y="-18.75" />
                    <Node size={nodeSizeOProt[3] * 5.75} x="0" y="18.75" />
                </>
            )}
            {controlPoints.map((point, i) => (
                <circle key={`${i}_controlP`} r={0.5} cx={point.x} cy={point.y} fill="red" />
            ))}
            {endpoints.map((point, i) => (
                <circle key={`${i}_endpoint`} r={1} cx={point.x} cy={point.y} fill="blue" />
            ))}
        </svg>
    );
}
