import classNames from 'classnames';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import TextInput from '../TextInput/TextInput';

export interface FormControlProps {
	className?: string;
	error?: string;
	inputClassName?: string;
	labelClassName?: string;
	label?: string;
	name?: string;
	placeholder?: string;
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
	labelClassName,
	name,
	placeholder,
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
		<label className={classNames('block', className)}>
			{label && (
				<strong
					className={classNames(
						'block text-sm',
						{ 'sr-only': !label && !!placeholder },
						labelClassName
					)}
				>
					{label ?? placeholder}
				</strong>
			)}
			<TextInput
				className={inputClasses}
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
			/>
			{error && <p className="mt-1 text-red-700">{error}</p>}
		</label>
	);
}

export default React.memo(FormControl);
