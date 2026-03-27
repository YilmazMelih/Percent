// Hardcode linked node-size groups here.
// Members are identified by glyph key + node name from config.nodes[].name.
// Future UI can toggle any member off via nodeLinkOverrides without editing this list.
export const NODE_SIZE_GROUPS = [
    // Example:
    // {
    //     id: "a-left-p-right",
    //     members: [
    //         { glyph: "A", nodeName: "left" },
    //         { glyph: "P", nodeName: "right" },
    //     ],
    // },
];

function memberKey(glyph, nodeName) {
    return `${glyph}:${nodeName}`;
}

function isLinked(nodeLinkOverrides, glyph, nodeName) {
    return nodeLinkOverrides?.[memberKey(glyph, nodeName)] !== false;
}

function sameMember(a, b) {
    return a?.glyph === b?.glyph && a?.nodeName === b?.nodeName;
}

export function applyGroupedNodeSizeChanges(
    prevData,
    nextData,
    selectedGlyph,
    nodeLinkOverrides = {},
    groups = NODE_SIZE_GROUPS,
) {
    const prevGlyph = prevData[selectedGlyph];
    const nextGlyph = nextData[selectedGlyph];
    if (!prevGlyph || !nextGlyph) return nextData;

    const prevSizes = prevGlyph.nodeSize;
    const nextSizes = nextGlyph.nodeSize;
    const nodes = nextGlyph.config.nodes;
    const changed = [];

    for (let i = 0; i < nodes.length; i++) {
        if (prevSizes[i] !== nextSizes[i]) {
            changed.push({
                glyph: selectedGlyph,
                nodeName: nodes[i].name,
                value: nextSizes[i],
            });
        }
    }

    if (!changed.length || !groups.length) return nextData;

    let result = nextData;

    const ensureWritableGlyph = (glyphKey) => {
        if (!result[glyphKey]) return null;
        if (result[glyphKey] === nextData[glyphKey]) {
            result = { ...result, [glyphKey]: { ...result[glyphKey] } };
        }
        if (result[glyphKey].nodeSize === nextData[glyphKey].nodeSize) {
            result[glyphKey].nodeSize = [...result[glyphKey].nodeSize];
        }
        return result[glyphKey];
    };

    for (const source of changed) {
        if (!source.nodeName) continue;
        if (!isLinked(nodeLinkOverrides, source.glyph, source.nodeName)) continue;

        for (const group of groups) {
            const members = Array.isArray(group?.members) ? group.members : [];
            const containsSource = members.some((m) => sameMember(m, source));
            if (!containsSource) continue;

            for (const member of members) {
                if (sameMember(member, source)) continue;
                if (!isLinked(nodeLinkOverrides, member.glyph, member.nodeName)) continue;

                const targetGlyph = ensureWritableGlyph(member.glyph);
                if (!targetGlyph) continue;

                const targetIndex = targetGlyph.config?.nodes?.findIndex(
                    (n) => n.name === member.nodeName,
                );
                if (!Number.isInteger(targetIndex) || targetIndex < 0) continue;

                targetGlyph.nodeSize[targetIndex] = source.value;
            }
        }
    }

    return result;
}
