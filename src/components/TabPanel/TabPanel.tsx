import classNames from 'classnames';
import React, { MouseEvent, PropsWithChildren, ReactNode, useState } from 'react';
import TabBar from '../TabBar/TabBar';
import TabContentPanel from '../TabContentPanel/TabContentPanel';
import './TabPanel.css';

export interface TabPanelProps {
	className?: string;
	initialTab?: string | number;
	tabs?: ReactNode;
	tabBarClassName?: string;
	tabContentPanelClassName?: string;
}

export default function TabPanel({
	children,
	className,
	initialTab,
	tabs,
	tabBarClassName,
	tabContentPanelClassName,
}: PropsWithChildren<TabPanelProps>) {
	const [tab, setTab] = useState<string | number | undefined>(initialTab);

	const handleTabClick = (_: MouseEvent, value?: string | number) => {
		setTab(value);
	};

	return (
		<div className={classNames('TabPanel', className)}>
			<TabBar
				className={classNames('tab-bar', tabBarClassName)}
				selected={tab}
				onClick={handleTabClick}
			>
				{tabs}
			</TabBar>
			<TabContentPanel className={tabContentPanelClassName} selected={tab}>
				{children}
			</TabContentPanel>
		</div>
	);
}
