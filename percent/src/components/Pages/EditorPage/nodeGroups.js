// Hardcode linked node-size groups here.
// Members are identified by glyph key + node name from config.nodes[].name.
// Future UI can toggle any member off via nodeLinkOverrides without editing this list.
export const NODE_SIZE_GROUPS = [
    // Example:
    {
        id: "left diagonal",
        members: [
            { glyph: "M", nodeName: "leftOuter" },
            { glyph: "W", nodeName: "leftOuter" },
            { glyph: "V", nodeName: "left" },
            { glyph: "A", nodeName: "left" },
            { glyph: "Y", nodeName: "left" },
        ],
    },
    {
        id: "right diagonal",
        members: [
            { glyph: "M", nodeName: "rightOuter" },
            { glyph: "W", nodeName: "rightOuter" },
            { glyph: "V", nodeName: "right" },
            { glyph: "A", nodeName: "right" },
            { glyph: "Y", nodeName: "right" },
        ],
    },
    {
        id: "inner left diagonal",
        members: [
            { glyph: "M", nodeName: "leftInner" },
            { glyph: "W", nodeName: "leftInner" },
        ],
    },
    {
        id: "inner right diagonal",
        members: [
            { glyph: "M", nodeName: "rightInner" },
            { glyph: "W", nodeName: "rightInner" },
        ],
    },
    {
        id: "crossbar",
        members: [
            { glyph: "A", nodeName: "middle" },
            { glyph: "H", nodeName: "middle" },
            { glyph: "E", nodeName: "middle" },
            { glyph: "F", nodeName: "middle" },
            { glyph: "R", nodeName: "middle" },
        ],
    },
    {
        id: "top-horizontal",
        members: [
            { glyph: "T", nodeName: "top" },
            { glyph: "E", nodeName: "top" },
            { glyph: "F", nodeName: "top" },
        ],
    },
    {
        id: "top-curve",
        members: [
            { glyph: "O", nodeName: "top" },
            { glyph: "C", nodeName: "top" },
            { glyph: "Q", nodeName: "top" },
            { glyph: "G", nodeName: "top" },
            { glyph: "S", nodeName: "top" },
        ],
    },
    {
        id: "bottom-curve",
        members: [
            { glyph: "O", nodeName: "bottom" },
            { glyph: "C", nodeName: "bottom" },
            { glyph: "Q", nodeName: "bottom" },
            { glyph: "G", nodeName: "right" },
            { glyph: "S", nodeName: "bottom" },
            { glyph: "J", nodeName: "bottom" },
            { glyph: "U", nodeName: "middle" },
        ],
    },
    {
        id: "left-curve",
        members: [
            { glyph: "O", nodeName: "left" },
            { glyph: "C", nodeName: "middle" },
            { glyph: "Q", nodeName: "left" },
            { glyph: "G", nodeName: "left" },
        ],
    },
    {
        id: "right-curve",
        members: [
            { glyph: "O", nodeName: "right" },
            { glyph: "Q", nodeName: "right" },
            { glyph: "D", nodeName: "right" },
        ],
    },
    {
        id: "bowl",
        members: [
            { glyph: "P", nodeName: "right" },
            { glyph: "B", nodeName: "bottom" },
            { glyph: "R", nodeName: "rightTop" },
        ],
    },
    {
        id: "stem",
        members: [
            { glyph: "T", nodeName: "middle" },
            { glyph: "U", nodeName: "left" },
            { glyph: "I", nodeName: "middle" },
            { glyph: "L", nodeName: "left" },
            { glyph: "R", nodeName: "left" },
            { glyph: "B", nodeName: "left" },
            { glyph: "D", nodeName: "left" },
            { glyph: "E", nodeName: "left" },
            { glyph: "F", nodeName: "bottom" },
            { glyph: "H", nodeName: "left" },
            { glyph: "J", nodeName: "right" },
            { glyph: "K", nodeName: "left" },
            { glyph: "P", nodeName: "left" },
            { glyph: "Y", nodeName: "bottom" },
            { glyph: "N", nodeName: "left" },
        ],
    },
];

export function nodeGroupMemberKey(glyph, nodeName) {
    return `${glyph}:${nodeName}`;
}

export function isNodeGroupMemberLinked(nodeLinkOverrides, glyph, nodeName) {
    return nodeLinkOverrides?.[nodeGroupMemberKey(glyph, nodeName)] !== false;
}

export function isNodeInAnyGroup(glyph, nodeName, groups = NODE_SIZE_GROUPS) {
    return (groups ?? []).some((g) =>
        (g?.members ?? []).some((m) => m?.glyph === glyph && m?.nodeName === nodeName),
    );
}

export function getNodeGroupNamesForMember(glyph, nodeName, groups = NODE_SIZE_GROUPS) {
    const res = [];
    for (let i = 0; i < (groups ?? []).length; i++) {
        const g = groups[i];
        const members = g?.members ?? [];
        const match = members.some((m) => m?.glyph === glyph && m?.nodeName === nodeName);
        if (!match) continue;
        res.push(g?.id ?? `group-${i + 1}`);
    }
    return res;
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
        if (!isNodeGroupMemberLinked(nodeLinkOverrides, source.glyph, source.nodeName)) continue;

        for (const group of groups) {
            const members = Array.isArray(group?.members) ? group.members : [];
            const containsSource = members.some((m) => sameMember(m, source));
            if (!containsSource) continue;

            for (const member of members) {
                if (sameMember(member, source)) continue;
                if (!isNodeGroupMemberLinked(nodeLinkOverrides, member.glyph, member.nodeName))
                    continue;

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
