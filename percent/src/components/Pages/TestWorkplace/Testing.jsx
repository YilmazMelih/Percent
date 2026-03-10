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
import { oConfig } from "../../../engine/fonts/default/o";
import { nConfig } from "../../../engine/fonts/default/n";
import CharFromConfig from "../../../engine/CharFromConfig";

export default function Testing() {
    const { showExportModal, closeExportModal } = useModal();
    const [myChar, setMyChar] = useState(null);
    const [charInput, setCharInput] = useState("a");

    useEffect(() => {
        async function fetchGlyph() {
            const charEl = await getCharSVGPathEl("a");
            setMyChar(charEl);
        }

        async function otherCalls() {
            const bb = await getCharD("a");
        }
        otherCalls();
        fetchGlyph();
    }, []);

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
                    <h2 className="text-sm text-gray-500 font-medium">Prototype "o" Glyph</h2>
                    <CharFromConfig config={oConfig} />
                </div>
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                    <h2 className="text-sm text-gray-500 font-medium">Prototype "n" Glyph</h2>
                    <CharFromConfig config={nConfig} />
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
