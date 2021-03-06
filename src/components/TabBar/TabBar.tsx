import classNames from 'classnames';
import React, { MouseEvent, PropsWithChildren, useMemo } from 'react';
import TabBarContext, { TabBarContextType } from './TabBarContext';

export interface TabBarProps {
	className?: string;
	selected?: string | number;
	onClick?(event: MouseEvent, value?: string | number): void;
}

function TabBar({ children, className, selected, onClick }: PropsWithChildren<TabBarProps>) {
	const value: TabBarContextType = useMemo(
		() => ({
			selected,
			onClick,
		}),
		[selected, onClick]
	);

	return (
		<nav className={classNames('mr-2 whitespace-nowrap overflow-x-auto', className)}>
			<TabBarContext.Provider value={value}>{children}</TabBarContext.Provider>
		</nav>
	);
}

export default React.memo(TabBar);
