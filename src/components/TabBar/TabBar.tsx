import React, { MouseEvent, PropsWithChildren, useMemo } from 'react';
import TabBarContext, { TabBarContextType } from './TabBarContext';

export interface TabBarProps {
	className?: string;
	selected?: string | number;
	onClick?(event: MouseEvent, value?: string | number): void;
}

export default function TabBar({
	children,
	className,
	selected,
	onClick,
}: PropsWithChildren<TabBarProps>) {
	const value: TabBarContextType = useMemo(
		() => ({
			selected,
			onClick,
		}),
		[selected, onClick]
	);

	return (
		<nav className={className}>
			<TabBarContext.Provider value={value}>{children}</TabBarContext.Provider>
		</nav>
	);
}
