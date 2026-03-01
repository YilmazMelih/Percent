import opentype from "opentype.js";
import { openFont, getCharToSVGPathEl } from "../../../engine/fonts/default/generateGlyphs";
import { useState, useEffect } from "react";

export default function Testing() {
    const [myChar, setMyChar] = useState(null);

    useEffect(() => {
        async function fetchGlyph() {
            const charEl = await getCharToSVGPathEl("a");
            setMyChar(charEl);
        }
        fetchGlyph();
    }, []);

    return (
        <>
            <h1>Hello World</h1>
            <svg
                height="100"
                width="100"
                viewBox="-2.4799999999999995 -42.87200000000001 47.728 49.02400000000001"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    style={{ fill: "lightgray", stroke: "black", strokeWidth: "1" }}
                    d={`
                    ${/*Outer Circle*/ ""}
                    M 21.38 1.15
                    L 21.38 1.15
                    Q 15.84 1.15 11.59-1.44
                    Q 7.34-4.03 4.93-8.46
                    Q 2.52-12.89 2.52-18.36
                    L 2.52-18.36
                    Q 2.52-23.83 4.93-28.26
                    Q 7.34-32.69 11.59-35.28
                    Q 15.84-37.87 21.38-37.87
                    L 21.38-37.87
                    Q 26.93-37.87 31.18-35.24
                    Q 35.42-32.62 37.84-28.19
                    Q 40.25-23.76 40.25-18.36
                    L 40.25-18.36
                    Q 40.25-12.89 37.84-8.46
                    Q 35.42-4.03 31.18-1.44
                    Q 26.93 1.15 21.38 1.15
                    Z 
                    ${/*Inner Circle*/ ""}
                    M 21.38-4.39
                    L 21.38-4.39
                    Q 24.70-4.39 27.61-6.05
                    Q 30.53-7.70 32.33-10.84
                    Q 34.13-13.97 34.13-18.36
                    L 34.13-18.36
                    Q 34.13-22.75 32.33-25.88
                    Q 30.53-29.02 27.61-30.67
                    Q 24.70-32.33 21.38-32.33
                    L 21.38-32.33
                    Q 18.07-32.33 15.12-30.67
                    Q 12.17-29.02 10.37-25.88
                    Q 8.57-22.75 8.57-18.36
                    L 8.57-18.36
                    Q 8.57-13.97 10.37-10.84
                    Q 12.17-7.70 15.12-6.05
                    Q 18.07-4.39 21.38-4.39
                    Z`}
                ></path>
            </svg>
            {myChar || <p>Loading...</p>}
        </>
    );
}
