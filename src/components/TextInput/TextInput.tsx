import classNames from 'classnames';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';

export interface TextInputProps {
	className?: string;
	name?: string;
	placeholder?: string;
	type?: 'email' | 'multiline' | 'password' | 'tel' | 'text';
	value?: string;
	onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function TextInput({
	className,
	name,
	type = 'text',
	placeholder,
	value,
	onBlur,
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
		<textarea
			className={classes}
			name={name}
			placeholder={placeholder}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
		></textarea>
	) : (
		<input
			className={classes}
			name={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
		/>
	);
}
