import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import TabContentPanelContext from './TabContentPanelContext';

export interface TabContentPanelProps {
	className?: string;
	selected?: string | number;
}

function TabContentPanel({
	children,
	className,
	selected,
}: PropsWithChildren<TabContentPanelProps>) {
	return (
		<div
			className={classNames(
				'px-3 py-2 sm:px-4 sm:py-3 rounded-r-md rounded-bl-md border border-gray-300',
				className
			)}
		>
			<TabContentPanelContext.Provider value={selected}>{children}</TabContentPanelContext.Provider>
		</div>
	);
}

export default React.memo(TabContentPanel);
