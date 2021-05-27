import classNames from 'classnames';
import React, { ChangeEvent } from 'react';

export interface TextInputProps {
	className?: string;
	name?: string;
	placeholder?: string;
	type?: 'email' | 'multiline' | 'password' | 'tel' | 'text';
	value?: string;
	onChange?(event: ChangeEvent): void;
}

export default function TextInput({
	className,
	name,
	type = 'text',
	placeholder,
	value,
	onChange,
}: TextInputProps) {
	const classes = classNames(
		'px-2 py-1 border border-gray-300 rounded-md',
		{
			'h-20': type === 'multiline',
		},
		className
	);
	return type === 'multiline' ? (
		<textarea className={classes} name={name} placeholder={placeholder} onChange={onChange}>
			{value}
		</textarea>
	) : (
		<input
			className={classes}
			name={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
}
