import classNames from 'classnames';
import React, { PropsWithChildren, SyntheticEvent } from 'react';

export interface ButtonProps {
	buttonType?: 'default' | 'primary' | 'secondary' | 'success' | 'alert' | 'warning';
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?(event: SyntheticEvent): void;
}

export default function Button({
	buttonType = 'default',
	className,
	children,
	type = 'button',
	onClick,
}: PropsWithChildren<ButtonProps>) {
	const classes = classNames(
		'px-2 py-1 rounded-md border-2',
		{
			'border-gray-300 bg-gray-100': buttonType === 'default',
			'border-blue-500 bg-blue-600 text-white': buttonType === 'primary',
			'border-gray-400 bg-gray-300': buttonType === 'secondary',
			'border-green-500 bg-green-600 text-white': buttonType === 'success',
			'border-red-500 bg-red-600 text-white': buttonType === 'alert',
			'border-yellow-400 bg-yellow-300': buttonType === 'warning',
		},
		className
	);

	return (
		<button type={type} className={classes} onClick={onClick}>
			{children}
		</button>
	);
}
