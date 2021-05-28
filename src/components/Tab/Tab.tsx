import React, { MouseEvent, PropsWithChildren, useCallback, useContext } from 'react';
import TabBarContext from '../TabBar/TabBarContext';
import BaseTab, { BaseTabProps } from './BaseTab';

export type TabProps = Omit<BaseTabProps, 'selected' | 'onClick'>;

function Tab({ children, value, ...props }: PropsWithChildren<TabProps>) {
	const { onClick, selected } = useContext(TabBarContext);

	const handleClick = useCallback(
		(e: MouseEvent) => {
			onClick?.(e, value);
		},
		[onClick, value]
	);

	return (
		<BaseTab {...props} selected={selected === value} value={value} onClick={handleClick}>
			{children}
		</BaseTab>
	);
}

export default React.memo(Tab);
