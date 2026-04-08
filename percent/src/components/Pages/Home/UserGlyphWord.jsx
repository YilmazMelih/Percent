import { useEffect, useMemo, useRef, useState } from "react";
import { buildPath, getAdjustedGlyphBoundsX } from "../../../engine/project";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { BCapConfig } from "../../../engine/fonts/default/B_cap";
import { bConfig } from "../../../engine/fonts/default/b";
import { CCapConfig } from "../../../engine/fonts/default/C_cap";
import { cConfig } from "../../../engine/fonts/default/c";
import { DCapConfig } from "../../../engine/fonts/default/D_cap";
import { dConfig } from "../../../engine/fonts/default/d";
import { ECapConfig } from "../../../engine/fonts/default/E_cap";
import { eConfig } from "../../../engine/fonts/default/e";
import { FCapConfig } from "../../../engine/fonts/default/F_cap";
import { fConfig } from "../../../engine/fonts/default/f";
import { GCapConfig } from "../../../engine/fonts/default/G_cap";
import { gConfig } from "../../../engine/fonts/default/g";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { hConfig } from "../../../engine/fonts/default/h";
import { ICapConfig } from "../../../engine/fonts/default/I_cap";
import { iConfig } from "../../../engine/fonts/default/i";
import { JCapConfig } from "../../../engine/fonts/default/J_cap";
import { jConfig } from "../../../engine/fonts/default/j";
import { KCapConfig } from "../../../engine/fonts/default/K_cap";
import { kConfig } from "../../../engine/fonts/default/k";
import { LCapConfig } from "../../../engine/fonts/default/L_cap";
import { lConfig } from "../../../engine/fonts/default/l";
import { MCapConfig } from "../../../engine/fonts/default/M_cap";
import { mConfig } from "../../../engine/fonts/default/m";
import { NCapConfig } from "../../../engine/fonts/default/N_cap";
import { nConfig } from "../../../engine/fonts/default/n";
import { OCapConfig } from "../../../engine/fonts/default/O_cap";
import { oConfig } from "../../../engine/fonts/default/o";
import { PCapConfig } from "../../../engine/fonts/default/P_cap";
import { pConfig } from "../../../engine/fonts/default/p";
import { QCapConfig } from "../../../engine/fonts/default/Q_cap";
import { qConfig } from "../../../engine/fonts/default/q";
import { RCapConfig } from "../../../engine/fonts/default/R_cap";
import { rConfig } from "../../../engine/fonts/default/r";
import { SCapConfig } from "../../../engine/fonts/default/S_cap";
import { sConfig } from "../../../engine/fonts/default/s";
import { TCapConfig } from "../../../engine/fonts/default/T_cap";
import { tConfig } from "../../../engine/fonts/default/t";
import { UCapConfig } from "../../../engine/fonts/default/U_cap";
import { uConfig } from "../../../engine/fonts/default/u";
import { VCapConfig } from "../../../engine/fonts/default/V_cap";
import { vConfig } from "../../../engine/fonts/default/v";
import { WCapConfig } from "../../../engine/fonts/default/W_cap";
import { wConfig } from "../../../engine/fonts/default/w";
import { XCapConfig } from "../../../engine/fonts/default/X_cap";
import { xConfig } from "../../../engine/fonts/default/x";
import { YCapConfig } from "../../../engine/fonts/default/Y_cap";
import { yConfig } from "../../../engine/fonts/default/y";
import { ZCapConfig } from "../../../engine/fonts/default/Z_cap";
import { zConfig } from "../../../engine/fonts/default/z";

const GLYPH_CONFIG_BY_KEY = {
    A: ACapConfig,
    B: BCapConfig,
    C: CCapConfig,
    D: DCapConfig,
    E: ECapConfig,
    F: FCapConfig,
    G: GCapConfig,
    H: HCapConfig,
    I: ICapConfig,
    J: JCapConfig,
    K: KCapConfig,
    L: LCapConfig,
    M: MCapConfig,
    N: NCapConfig,
    O: OCapConfig,
    P: PCapConfig,
    Q: QCapConfig,
    R: RCapConfig,
    S: SCapConfig,
    T: TCapConfig,
    U: UCapConfig,
    V: VCapConfig,
    W: WCapConfig,
    X: XCapConfig,
    Y: YCapConfig,
    Z: ZCapConfig,
    a: aConfig,
    b: bConfig,
    c: cConfig,
    d: dConfig,
    e: eConfig,
    f: fConfig,
    g: gConfig,
    h: hConfig,
    i: iConfig,
    j: jConfig,
    k: kConfig,
    l: lConfig,
    m: mConfig,
    n: nConfig,
    o: oConfig,
    p: pConfig,
    q: qConfig,
    r: rConfig,
    s: sConfig,
    t: tConfig,
    u: uConfig,
    v: vConfig,
    w: wConfig,
    x: xConfig,
    y: yConfig,
    z: zConfig,
};

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const GUIDELINES_STORAGE_KEY = "editor:guideLines:v1";

const DEFAULT_GUIDELINES = {
    ascender: 30.5,
    cap_height: 80.5,
    x_height: 131.38,
    baseline: 267.76,
    descender: 332.24,
};

const DEFAULTS = {
    letterSpacing: 14,
    wordSpacing: 90,
    scale: 1,
    width: "100%",
    height: 220,
    offsetX: 0,
    offsetY: 0,
    nodePulseAmount: 0.4,
    nodePulseDurationMs: 800,
    stroke: "none",
    fill: "#000000",
    nodeColor: "#beff00",
    nodeOpacity: 1,
};
const NODE_HOVER_HIT_PADDING = 8;

function clamp01(v) {
    return Math.max(0, Math.min(1, v));
}

function easeInOutCos(t) {
    return 0.5 - 0.5 * Math.cos(Math.PI * t);
}

function makeNodeAnimKey(runIdx, nodeId) {
    return `${runIdx}:${nodeId}`;
}

function getNodeAnimRange(original, pulseAmount) {
    const o = clamp01(original);
    const a = clamp01(pulseAmount);
    const max = Math.min(1, o + a);
    const min = o > 1 - a ? 1 - a : o;
    return { min: clamp01(min), max: clamp01(max), original: o };
}

function createDefaultGlyphState() {
    const out = {};
    for (const key of Object.keys(GLYPH_CONFIG_BY_KEY)) {
        const config = GLYPH_CONFIG_BY_KEY[key];
        out[key] = {
            config,
            nodeSize: config.nodes.map((node) => node.default),
            nodeX: config.nodes.map(() => 0),
            nodeY: config.nodes.map(() => 0),
        };
    }
    return out;
}

function readGuidelinesFromStorage() {
    if (typeof window === "undefined") return DEFAULT_GUIDELINES;
    try {
        const raw = window.localStorage.getItem(GUIDELINES_STORAGE_KEY);
        if (!raw) return DEFAULT_GUIDELINES;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return DEFAULT_GUIDELINES;
        return { ...DEFAULT_GUIDELINES, ...parsed };
    } catch {
        return DEFAULT_GUIDELINES;
    }
}

function readGlyphStateFromStorage() {
    const base = createDefaultGlyphState();
    if (typeof window === "undefined") return base;
    try {
        const raw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
        if (!raw) return base;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return base;
        for (const key of Object.keys(base)) {
            const saved = parsed[key];
            if (!saved || typeof saved !== "object") continue;
            const nodeCount = base[key].config.nodes.length;
            if (Array.isArray(saved.nodeSize) && saved.nodeSize.length === nodeCount) {
                base[key].nodeSize = saved.nodeSize;
            }
            if (Array.isArray(saved.nodeX) && saved.nodeX.length === nodeCount) {
                base[key].nodeX = saved.nodeX;
            }
            if (Array.isArray(saved.nodeY) && saved.nodeY.length === nodeCount) {
                base[key].nodeY = saved.nodeY;
            }
        }
    } catch {
        return base;
    }
    return base;
}

function computeNodeCenters(config, nodeX, nodeY, guideLines) {
    const defaultGuideLines = DEFAULT_GUIDELINES;
    return config.nodes.map((node) => {
        const tx = nodeX?.[node.id] ?? 0;
        const ty = nodeY?.[node.id] ?? 0;
        let y = node.pos.y + ty;
        if (node.pos.attach) {
            const r = node.pos.ratio ?? 1;
            if (node.pos.attach === "asc")
                y += guideLines.ascender * r - defaultGuideLines.ascender * r;
            if (node.pos.attach === "cap")
                y += guideLines.cap_height * r - defaultGuideLines.cap_height * r;
            if (node.pos.attach === "xh")
                y += guideLines.x_height * r - defaultGuideLines.x_height * r;
            if (node.pos.attach === "base")
                y += guideLines.baseline * r - defaultGuideLines.baseline * r;
            if (node.pos.attach === "desc")
                y += guideLines.descender * r - defaultGuideLines.descender * r;
        }
        return { id: node.id, x: node.pos.x + tx, y, r: node.r };
    });
}

/**
 * Non-interactive glyph word display from editor localStorage.
 * Accepts any string; unknown chars are skipped and spaces use `wordSpacing`.
 */
export default function UserGlyphWord({
    text = "PERCENT",
    className = "",
    style = {},
    letterSpacing = DEFAULTS.letterSpacing,
    wordSpacing = DEFAULTS.wordSpacing,
    width = DEFAULTS.width,
    height = DEFAULTS.height,
    scale = DEFAULTS.scale,
    offsetX = DEFAULTS.offsetX,
    offsetY = DEFAULTS.offsetY,
    nodePulseAmount = DEFAULTS.nodePulseAmount,
    nodePulseDurationMs = DEFAULTS.nodePulseDurationMs,
    fill = DEFAULTS.fill,
    stroke = DEFAULTS.stroke,
    nodeColor = DEFAULTS.nodeColor,
    nodeOpacity = DEFAULTS.nodeOpacity,
}) {
    const [glyphData, setGlyphData] = useState(() => readGlyphStateFromStorage());
    const [guideLines, setGuideLines] = useState(() => readGuidelinesFromStorage());
    const [animatedNodeValues, setAnimatedNodeValues] = useState({});
    const animEntriesRef = useRef(new Map());
    const rafRef = useRef(null);
    const lastGlyphRawRef = useRef(null);
    const lastGuideRawRef = useRef(null);

    useEffect(() => {
        const refreshFromStorage = () => {
            if (typeof window === "undefined") return;
            const glyphRaw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
            const guideRaw = window.localStorage.getItem(GUIDELINES_STORAGE_KEY);
            if (glyphRaw !== lastGlyphRawRef.current) {
                lastGlyphRawRef.current = glyphRaw;
                setGlyphData(readGlyphStateFromStorage());
            }
            if (guideRaw !== lastGuideRawRef.current) {
                lastGuideRawRef.current = guideRaw;
                setGuideLines(readGuidelinesFromStorage());
            }
        };

        refreshFromStorage();
        const interval = window.setInterval(refreshFromStorage, 500);
        const onStorage = () => refreshFromStorage();
        window.addEventListener("storage", onStorage);
        return () => {
            window.clearInterval(interval);
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    const tickAnimations = useRef(null);
    const runAnimations = useRef(null);

    tickAnimations.current = (now) => {
        const duration = Math.max(240, nodePulseDurationMs);
        const settleDuration = Math.max(200, Math.round(duration * 0.45));
        const nextValues = {};
        const entries = animEntriesRef.current;

        for (const [key, entry] of entries.entries()) {
            if (entry.mode === "hover") {
                const elapsed = now - entry.startAt;
                let value = entry.original;
                const hasHeadroom = entry.max > entry.original + 1e-6;
                if (hasHeadroom && elapsed <= duration) {
                    // First segment: O -> max
                    const t = Math.max(0, Math.min(1, elapsed / duration));
                    value = entry.original + (entry.max - entry.original) * easeInOutCos(t);
                } else {
                    // Loop segments: max -> min -> max -> ...
                    const loopElapsed = hasHeadroom ? elapsed - duration : elapsed;
                    const cycle = ((loopElapsed % (2 * duration)) + 2 * duration) % (2 * duration);
                    if (cycle <= duration) {
                        const t = cycle / duration;
                        value = entry.max + (entry.min - entry.max) * easeInOutCos(t);
                    } else {
                        const t = (cycle - duration) / duration;
                        value = entry.min + (entry.max - entry.min) * easeInOutCos(t);
                    }
                }
                nextValues[key] = clamp01(value);
                continue;
            }

            if (entry.mode === "settle") {
                const tRaw = Math.min(1, (now - entry.startAt) / settleDuration);
                const eased = easeInOutCos(tRaw);
                const value = entry.fromValue + (entry.original - entry.fromValue) * eased;
                nextValues[key] = clamp01(value);
                if (tRaw >= 1) {
                    entries.delete(key);
                }
            }
        }

        setAnimatedNodeValues(nextValues);
        if (entries.size > 0) {
            rafRef.current = requestAnimationFrame(tickAnimations.current);
        } else {
            rafRef.current = null;
        }
    };

    runAnimations.current = () => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(tickAnimations.current);
    };

    useEffect(
        () => () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        },
        [],
    );

    const tokens = useMemo(() => Array.from(text ?? ""), [text]);

    const glyphRuns = useMemo(() => {
        let cursorX = 0;
        let cursorBaseX = 0;
        let minX = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        const runs = [];

        tokens.forEach((ch, idx) => {
            if (ch === " ") {
                cursorX += wordSpacing;
                return;
            }

            const resolvedKey = GLYPH_CONFIG_BY_KEY[ch]
                ? ch
                : GLYPH_CONFIG_BY_KEY[ch.toUpperCase()]
                  ? ch.toUpperCase()
                  : null;
            if (!resolvedKey) return;

            const config = GLYPH_CONFIG_BY_KEY[resolvedKey];
            const data = glyphData[resolvedKey] ?? {
                config,
                nodeSize: config.nodes.map((node) => node.default),
                nodeX: config.nodes.map(() => 0),
                nodeY: config.nodes.map(() => 0),
            };
            if (!data?.config) return;

            const baseNodeSize = data.nodeSize ?? [];
            const animatedNodeSize = baseNodeSize.map((v, nodeIdx) => {
                const nodeId = data.config.nodes[nodeIdx]?.id;
                const key = makeNodeAnimKey(idx, nodeId);
                const animated = animatedNodeValues[key];
                return Number.isFinite(animated) ? clamp01(animated) : clamp01(v);
            });

            const { minX: baseGlyphMinX, maxX: baseGlyphMaxX } = getAdjustedGlyphBoundsX(
                data.config,
                baseNodeSize,
                data.nodeX,
                data.nodeY,
                guideLines,
            );

            const { minX: glyphMinX, maxX: glyphMaxX } = getAdjustedGlyphBoundsX(
                data.config,
                animatedNodeSize,
                data.nodeX,
                data.nodeY,
                guideLines,
            );
            const widthX = glyphMaxX - glyphMinX;
            const baseWidthX = baseGlyphMaxX - baseGlyphMinX;
            const xAdjust = cursorX - glyphMinX;
            const baseXAdjust = cursorBaseX - baseGlyphMinX;
            const pathD = buildPath(
                data.config,
                animatedNodeSize,
                data.nodeX,
                data.nodeY,
                guideLines,
            );
            const nodeCenters = computeNodeCenters(data.config, data.nodeX, data.nodeY, guideLines);

            const shiftedMin = glyphMinX + xAdjust;
            const shiftedMax = glyphMaxX + xAdjust;
            minX = Math.min(minX, shiftedMin);
            maxX = Math.max(maxX, shiftedMax);

            runs.push({
                idx,
                pathD,
                xAdjust,
                baseXAdjust,
                nodeCenters,
                baseNodeSize,
                animatedNodeSize,
            });

            cursorX += widthX + letterSpacing;
            cursorBaseX += baseWidthX + letterSpacing;
        });

        if (!Number.isFinite(minX) || !Number.isFinite(maxX)) {
            minX = 0;
            maxX = 300;
        }

        return {
            runs,
            minX,
            maxX,
            topY: guideLines.ascender - 48,
            bottomY: guideLines.descender + 48,
        };
    }, [tokens, wordSpacing, glyphData, animatedNodeValues, guideLines, letterSpacing]);

    const vbWidth = Math.max(1, glyphRuns.maxX - glyphRuns.minX + 60);
    const vbHeight = Math.max(1, glyphRuns.bottomY - glyphRuns.topY);
    const vbX = glyphRuns.minX - 30;
    const vbY = glyphRuns.topY;
    const centerX = vbX + vbWidth / 2;
    const centerY = vbY + vbHeight / 2;

    return (
        <div className={className} style={style}>
            <svg
                width={width}
                height={height}
                viewBox={`${vbX} ${vbY} ${vbWidth} ${vbHeight}`}
                role="img"
                aria-label={text}
            >
                <g
                    transform={`translate(${offsetX} ${offsetY}) translate(${centerX} ${centerY}) scale(${scale}) translate(${-centerX} ${-centerY})`}
                >
                    {glyphRuns.runs.map((run) => (
                        <g key={`hero-glyph-${run.idx}`} transform={`translate(${run.xAdjust} 0)`}>
                            <path
                                d={run.pathD}
                                fill={fill}
                                stroke={stroke}
                                pointerEvents="visiblePainted"
                            />
                            {run.nodeCenters.map((node, i) => {
                                const animatedNodeSize = clamp01(
                                    run.animatedNodeSize[node.id] ?? 0,
                                );
                                const baseNodeSize = clamp01(run.baseNodeSize[node.id] ?? 0);
                                const radius = (animatedNodeSize * 0.88 + 0.12) * node.r;
                                const baseRadius = (baseNodeSize * 0.88 + 0.12) * node.r;
                                const hoverRadius =
                                    Math.max(radius, baseRadius) + NODE_HOVER_HIT_PADDING;
                                const baseDeltaX = run.baseXAdjust - run.xAdjust;
                                return (
                                    <g key={`hero-node-${run.idx}-${i}`}>
                                        <circle
                                            cx={node.x}
                                            cy={node.y}
                                            r={radius}
                                            fill={nodeColor}
                                            fillOpacity={nodeOpacity}
                                            pointerEvents="none"
                                        />
                                        <circle
                                            cx={node.x}
                                            cy={node.y}
                                            r={hoverRadius}
                                            fill="transparent"
                                            pointerEvents="visiblePainted"
                                            onMouseEnter={() => {
                                                const now = performance.now();
                                                const key = makeNodeAnimKey(run.idx, node.id);
                                                const original = clamp01(
                                                    run.baseNodeSize[node.id] ?? 0,
                                                );
                                                const { min, max } = getNodeAnimRange(
                                                    original,
                                                    nodePulseAmount,
                                                );
                                                animEntriesRef.current.set(key, {
                                                    key,
                                                    runIdx: run.idx,
                                                    nodeId: node.id,
                                                    mode: "hover",
                                                    startAt: now,
                                                    original,
                                                    min,
                                                    max,
                                                });
                                                runAnimations.current?.();
                                            }}
                                            onMouseLeave={() => {
                                                const now = performance.now();
                                                const key = makeNodeAnimKey(run.idx, node.id);
                                                const existing = animEntriesRef.current.get(key);
                                                if (!existing) return;

                                                let fromValue = existing.original;
                                                if (existing.mode === "hover") {
                                                    const duration = Math.max(
                                                        240,
                                                        nodePulseDurationMs,
                                                    );
                                                    const elapsed = now - existing.startAt;
                                                    const hasHeadroom =
                                                        existing.max > existing.original + 1e-6;
                                                    if (hasHeadroom && elapsed <= duration) {
                                                        const t = Math.max(
                                                            0,
                                                            Math.min(1, elapsed / duration),
                                                        );
                                                        fromValue =
                                                            existing.original +
                                                            (existing.max - existing.original) *
                                                                easeInOutCos(t);
                                                    } else {
                                                        const loopElapsed = hasHeadroom
                                                            ? elapsed - duration
                                                            : elapsed;
                                                        const cycle =
                                                            ((loopElapsed % (2 * duration)) +
                                                                2 * duration) %
                                                            (2 * duration);
                                                        if (cycle <= duration) {
                                                            const t = cycle / duration;
                                                            fromValue =
                                                                existing.max +
                                                                (existing.min - existing.max) *
                                                                    easeInOutCos(t);
                                                        } else {
                                                            const t = (cycle - duration) / duration;
                                                            fromValue =
                                                                existing.min +
                                                                (existing.max - existing.min) *
                                                                    easeInOutCos(t);
                                                        }
                                                    }
                                                } else if (existing.mode === "settle") {
                                                    fromValue = existing.fromValue;
                                                }

                                                animEntriesRef.current.set(key, {
                                                    ...existing,
                                                    mode: "settle",
                                                    fromValue: clamp01(fromValue),
                                                    startAt: now,
                                                });
                                                runAnimations.current?.();
                                            }}
                                        />
                                        <circle
                                            cx={node.x + baseDeltaX}
                                            cy={node.y}
                                            r={hoverRadius}
                                            fill="transparent"
                                            pointerEvents="visiblePainted"
                                            onMouseEnter={() => {
                                                const now = performance.now();
                                                const key = makeNodeAnimKey(run.idx, node.id);
                                                const original = clamp01(
                                                    run.baseNodeSize[node.id] ?? 0,
                                                );
                                                const { min, max } = getNodeAnimRange(
                                                    original,
                                                    nodePulseAmount,
                                                );
                                                animEntriesRef.current.set(key, {
                                                    key,
                                                    runIdx: run.idx,
                                                    nodeId: node.id,
                                                    mode: "hover",
                                                    startAt: now,
                                                    original,
                                                    min,
                                                    max,
                                                });
                                                runAnimations.current?.();
                                            }}
                                            onMouseLeave={() => {
                                                const now = performance.now();
                                                const key = makeNodeAnimKey(run.idx, node.id);
                                                const existing = animEntriesRef.current.get(key);
                                                if (!existing) return;

                                                let fromValue = existing.original;
                                                if (existing.mode === "hover") {
                                                    const duration = Math.max(
                                                        240,
                                                        nodePulseDurationMs,
                                                    );
                                                    const elapsed = now - existing.startAt;
                                                    const hasHeadroom =
                                                        existing.max > existing.original + 1e-6;
                                                    if (hasHeadroom && elapsed <= duration) {
                                                        const t = Math.max(
                                                            0,
                                                            Math.min(1, elapsed / duration),
                                                        );
                                                        fromValue =
                                                            existing.original +
                                                            (existing.max - existing.original) *
                                                                easeInOutCos(t);
                                                    } else {
                                                        const loopElapsed = hasHeadroom
                                                            ? elapsed - duration
                                                            : elapsed;
                                                        const cycle =
                                                            ((loopElapsed % (2 * duration)) +
                                                                2 * duration) %
                                                            (2 * duration);
                                                        if (cycle <= duration) {
                                                            const t = cycle / duration;
                                                            fromValue =
                                                                existing.max +
                                                                (existing.min - existing.max) *
                                                                    easeInOutCos(t);
                                                        } else {
                                                            const t = (cycle - duration) / duration;
                                                            fromValue =
                                                                existing.min +
                                                                (existing.max - existing.min) *
                                                                    easeInOutCos(t);
                                                        }
                                                    }
                                                } else if (existing.mode === "settle") {
                                                    fromValue = existing.fromValue;
                                                }

                                                animEntriesRef.current.set(key, {
                                                    ...existing,
                                                    mode: "settle",
                                                    fromValue: clamp01(fromValue),
                                                    startAt: now,
                                                });
                                                runAnimations.current?.();
                                            }}
                                        />
                                    </g>
                                );
                            })}
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
