import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

export interface SearchBoxProps {
	className?: string;
	initialValue?: string;
	placeholder?: string;
	onReset?(): void;
	onSubmit?(text: string): void;
}

export default function SearchBox({
	className,
	initialValue = '',
	placeholder,
	onReset,
	onSubmit,
}: SearchBoxProps) {
	const [value, setValue] = useState(initialValue);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit?.(value);
	};

	const handleClickReset = (e: MouseEvent) => {
		e.preventDefault();
		setValue('');
		onReset?.();
	};

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue(target.value);
	};

	return (
		<form className={classNames('inline-block', className)} onSubmit={handleSubmit}>
			<div className="flex flex-row border border-gray-300 rounded-md">
				<input
					className="flex-grow px-2 py-1 rounded-l-md"
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
				/>
				<button
					className={classNames('flex-shrink pl-2 pr-1 cursor-pointer', {
						invisible: !value,
					})}
					type="button"
					onClick={handleClickReset}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<button className="flex-shrink pl-1 pr-2 rounded-r-md" type="submit">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</form>
	);
}
