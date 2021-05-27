import classNames from 'classnames';
import React, { ChangeEvent } from 'react';

export interface TextInputProps {
	className?: string;
	name?: string;
	placeholder?: string;
	type?: 'email' | 'password' | 'tel' | 'text';
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
	return (
		<input
			className={classNames('px-2 py-1 border border-gray-300 rounded-md', className)}
			name={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
}
