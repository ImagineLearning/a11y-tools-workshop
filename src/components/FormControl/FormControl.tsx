import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import TextInput from '../TextInput/TextInput';

export interface FormControlProps {
	className?: string;
	error?: string;
	inputClassName?: string;
	label?: string;
	name?: string;
	type?: 'email' | 'password' | 'tel' | 'text';
	value?: string;
	onChange?(event: ChangeEvent): void;
}

export default function FormControl({
	className,
	error,
	inputClassName,
	label,
	name,
	type = 'text',
	value,
	onChange,
}: FormControlProps) {
	const inputClasses = classNames(
		'w-full',
		{
			'border-red-700 bg-red-100 text-red-700': !!error,
		},
		inputClassName
	);

	return (
		<div className={className}>
			<TextInput
				className={inputClasses}
				name={name}
				placeholder={label}
				type={type}
				value={value}
				onChange={onChange}
			/>
			{error && <p className="mt-1 text-red-700">{error}</p>}
		</div>
	);
}
