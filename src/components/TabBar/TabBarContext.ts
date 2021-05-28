import React, { MouseEvent } from 'react';

export interface TabBarContextType {
	selected?: string | number;
	onClick?(event: MouseEvent, value?: string | number): void;
}

const TabBarContext = React.createContext<TabBarContextType>({});

export default TabBarContext;
