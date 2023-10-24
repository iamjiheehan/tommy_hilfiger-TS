import { useState } from 'react';

export function useSelectMenuHandler(initialTab: number = 0) {
    const [currentTab, setCurrentTab] = useState<number>(initialTab);

    const selectMenuHandler = (index: number) => {
        setCurrentTab(index);
        console.log(`현재 활성화 된 탭은 ${index}`);
    }

    return { currentTab, selectMenuHandler };
}
