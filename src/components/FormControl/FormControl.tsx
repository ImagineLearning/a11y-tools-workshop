import classNames from 'classnames';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import TextInput from '../TextInput/TextInput';

export interface FormControlProps {
	className?: string;
	error?: string;
	inputClassName?: string;
	label?: string;
	name?: string;
	type?: 'email' | 'multiline' | 'password' | 'tel' | 'text';
	value?: string;
	onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function FormControl({
	className,
	error,
	inputClassName,
	label,
	name,
	type = 'text',
	value,
	onBlur,
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
				onBlur={onBlur}
				onChange={onChange}
			/>
			{error && <p className="mt-1 text-red-700">{error}</p>}
		</div>
	);
}

export default React.memo(FormControl);
