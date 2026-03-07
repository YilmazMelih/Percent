import opentype from "opentype.js";
import {
    openFont,
    getCharBB,
    getCharD,
    getCharSVGPathEl,
} from "../../../engine/fonts/default/generateGlyphs";
import { useState, useEffect } from "react";
import { useModal } from "../../../contexts/ModalContext";
import ExportModal from "../../ExportModal/ExportModal";
import Node from "../../../engine/Node";
import SliderPanel from "../../../engine/NodeSliders";
import { GetOPrototype } from "../../../engine/fonts/default/o";

export default function Testing() {
    const { showExportModal, closeExportModal } = useModal();
    const [myChar, setMyChar] = useState(null);
    const [nodeSizeOProt, setNodeSizeOProt] = useState([0.75, 0.75, 0.4, 0.4]);
    const [charInput, setCharInput] = useState("a");
    const [seeNodes, setSeeNodes] = useState(false);

    useEffect(() => {
        async function fetchGlyph() {
            const charEl = await getCharSVGPathEl("a");
            setMyChar(charEl);
        }

        async function otherCalls() {
            const bb = await getCharD("a");
            // console.log(bb);
        }
        otherCalls();
        fetchGlyph();
    }, []);

    function parameterizedPrototype([l, r, t, b]) {
        const [lox, rox, toy, boy] = [
            -18.75 - 6.25 * l,
            18.75 + 6.25 * r,
            -18.75 - 6.25 * t,
            18.75 + 6.25 * b,
        ];
        const [lix, rix, tiy, biy] = [
            -18.75 + 6.25 * l,
            18.75 - 6.25 * r,
            -18.75 + 6.25 * t,
            18.75 - 6.25 * b,
        ];

        return `
                    ${/*Outer Circle*/ ""}
                    M 0 ${toy}
                    Q ${lox} ${toy} ${lox} 0
                    Q ${lox} ${boy} 0 ${boy}
                    Q ${rox} ${boy} ${rox} 0
                    Q ${rox} ${toy} 0 ${toy}
                    Z 
                    ${/*Inner Circle*/ ""}
                    M 0 ${tiy}
                    Q ${rix} ${tiy} ${rix} 0
                    Q ${rix} ${biy} 0 ${biy}
                    Q ${lix} ${biy} ${lix} 0
                    Q ${lix} ${tiy} 0 ${tiy}
                    Z `;
    }

    function handleCharSubmit(e) {
        e.preventDefault();
        if (!charInput) return;

        async function fetchGlyphForChar(ch) {
            const charEl = await getCharSVGPathEl(ch);
            setMyChar(charEl);
        }

        fetchGlyphForChar(charInput[0]);
    }

    return (
        <>
            <ExportModal show={showExportModal} onClose={closeExportModal} />
            <div className="flex gap-4 items-start justify-center">
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                    <h2 className="text-sm text-gray-500 font-medium">Prototype "O" Glyph</h2>
                    <GetOPrototype nodeSizeOProt={nodeSizeOProt} seeNodes={seeNodes} />
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={seeNodes}
                            onChange={(e) => setSeeNodes(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        See Nodes
                    </label>
                    <SliderPanel
                        nodeSizeOProt={nodeSizeOProt}
                        setNodeSizeOProt={setNodeSizeOProt}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm min-h-[250px] min-w-[250px]">
                    <h2 className="text-sm text-gray-500 font-medium">
                        Google Sans Char to SVG Path Explorer
                    </h2>
                    {myChar || <p>Loading...</p>}
                    <form onSubmit={handleCharSubmit} className="w-full flex justify-center">
                        <input
                            type="text"
                            value={charInput}
                            onChange={(e) => setCharInput(e.target.value.slice(0, 1))}
                            maxLength={1}
                            className="border border-gray-300 rounded px-2 py-1 text-sm w-16 text-center"
                            placeholder="a"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
