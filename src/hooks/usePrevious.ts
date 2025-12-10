import { useState, useEffect } from "react";

export const usePrevious = <T>(value: T): T | undefined => {
    const [prev, setPrev] = useState<T>(value);
    useEffect(() => {
        setPrev(value);
    }, [value]);
    return prev;
};
