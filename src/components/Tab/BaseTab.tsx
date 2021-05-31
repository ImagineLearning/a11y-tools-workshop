import classNames from 'classnames';
import React, { MouseEvent, PropsWithChildren } from 'react';
import './BaseTab.css';

export interface BaseTabProps {
	className?: string;
	selected?: boolean;
	value?: string | number;
	onClick?(event: MouseEvent, value?: string | number): void;
}

function BaseTab({
	children,
	className,
	selected,
	value,
	onClick,
}: PropsWithChildren<BaseTabProps>) {
	const handleClick = (e: MouseEvent) => {
		onClick?.(e, value);
	};

	return (
		<button
			className={classNames(
				'BaseTab inline-block px-5 pt-1 pb-1 rounded-t-md border border-gray-300 cursor-pointer',
				{
					selected,
				},
				className
			)}
			onClick={handleClick}
		>
			<span
				className={classNames('pb-1 border-b-4', {
					'border-blue-500': selected,
					'border-transparent': !selected,
				})}
			>
				{children}
			</span>
		</button>
	);
}

export default React.memo(BaseTab);
