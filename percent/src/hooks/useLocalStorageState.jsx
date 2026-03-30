import { useEffect, useState } from "react";

export function useLocalStorageBoolean(key, defaultValue = false) {
    const [value, setValue] = useState(() => {
        if (typeof window === "undefined") return defaultValue;
        const saved = window.localStorage.getItem(key);
        return saved === null ? defaultValue : saved === "true";
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(key, String(value));
    }, [key, value]);

    return [value, setValue];
}

export function useLocalStorageString(key, defaultValue = "") {
    const [value, setValue] = useState(() => {
        if (typeof window === "undefined") return defaultValue;
        const saved = window.localStorage.getItem(key);
        return saved === null ? defaultValue : saved;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export function useLocalStorageJson(key, defaultValue) {
    const [value, setValue] = useState(() => {
        if (typeof window === "undefined") return defaultValue;
        try {
            const raw = window.localStorage.getItem(key);
            if (!raw) return defaultValue;
            const parsed = JSON.parse(raw);
            return parsed ?? defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // ignore quota/serialization issues
        }
    }, [key, value]);

    return [value, setValue];
}
