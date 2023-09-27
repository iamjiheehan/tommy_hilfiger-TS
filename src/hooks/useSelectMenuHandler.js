import { useState } from 'react';

export function useSelectMenuHandler(initialTab = 0) {
    const [currentTab, setCurrentTab] = useState(initialTab);

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
        console.log(`현재 활성화 된 탭은 ${index}`);
    }

    return { currentTab, selectMenuHandler };
}
