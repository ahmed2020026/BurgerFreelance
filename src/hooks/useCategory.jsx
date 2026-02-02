import { useMemo } from "react";

export const useCategory = (list) => {
    const categories = useMemo(() => {
        if (!list || !list.length) return [];

        return ['all' ,...new Set(list.map(item => item.category))];
    }, [list]);

    return categories
};
