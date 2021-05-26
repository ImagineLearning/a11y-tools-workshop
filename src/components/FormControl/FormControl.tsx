import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import TextInput from '../TextInput/TextInput';

export interface FormControlProps {
	className?: string;
	error?: string;
	inputClassName?: string;
	label?: string;
	type?: 'email' | 'password' | 'text';
	value?: string;
	onChange?(event: ChangeEvent): void;
}

export default function FormControl({
	className,
	error,
	inputClassName,
	label,
	type = 'text',
	value,
	onChange,
}: FormControlProps) {
	const inputClasses = classNames(
		{
			'border-red-700 bg-red-100 text-red-700': !!error,
		},
		inputClassName
	);

	return (
		<div className={className}>
			<TextInput
				className={inputClasses}
				placeholder={label}
				type={type}
				value={value}
				onChange={onChange}
			/>
			{error && <p className="mt-1 text-red-700">{error}</p>}
		</div>
	);
}
