import React, { PropsWithChildren, useContext } from 'react';
import TabContentPanelContext from './TabContentPanelContext';

interface BaseTabContentProps {
	selected?: boolean;
}

function BaseTabContentComponent({ children, selected }: PropsWithChildren<BaseTabContentProps>) {
	return selected ? <>{children}</> : null;
}

const BaseTabContent = React.memo(BaseTabContentComponent);

export interface TabContentProps {
	tab: string | number;
}

export default function TabContent({ children, tab }: PropsWithChildren<TabContentProps>) {
	const value = useContext(TabContentPanelContext);

	return <BaseTabContent selected={!!value && tab === value}>{children}</BaseTabContent>;
}
