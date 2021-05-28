import classNames from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import './Tab.css';

export interface TabProps {
	className?: string;
	selected?: boolean;
	onClick?: MouseEventHandler<Element>;
}

export default function Tab({
	children,
	className,
	selected,
	onClick,
}: PropsWithChildren<TabProps>) {
	return (
		<div
			className={classNames(
				'Tab inline-block px-5 pt-1 pb-1 rounded-t-md border border-gray-300 cursor-pointer',
				{
					selected,
				},
				className
			)}
			onClick={onClick}
		>
			<span
				className={classNames('pb-1 border-b-4', {
					'border-blue-500': selected,
					'border-transparent': !selected,
				})}
			>
				{children}
			</span>
		</div>
	);
}
