import classNames from 'classnames';
import React, { MouseEvent, PropsWithChildren, ReactNode } from 'react';
import TabBar from '../TabBar/TabBar';
import TabContentPanel from '../TabContentPanel/TabContentPanel';
import './TabPanel.css';

export interface TabPanelProps {
	className?: string;
	selected?: string | number;
	tabs?: ReactNode;
	tabBarClassName?: string;
	tabContentPanelClassName?: string;
	onClickTab?(value?: string | number): void;
}

export default function TabPanel({
	children,
	className,
	selected,
	tabs,
	tabBarClassName,
	tabContentPanelClassName,
	onClickTab,
}: PropsWithChildren<TabPanelProps>) {
	const handleTabClick = (_: MouseEvent, value?: string | number) => {
		onClickTab?.(value);
	};

	return (
		<div className={classNames('TabPanel', className)}>
			<TabBar
				className={classNames('tab-bar', tabBarClassName)}
				selected={selected}
				onClick={handleTabClick}
			>
				{tabs}
			</TabBar>
			<TabContentPanel className={tabContentPanelClassName} selected={selected}>
				{children}
			</TabContentPanel>
		</div>
	);
}
