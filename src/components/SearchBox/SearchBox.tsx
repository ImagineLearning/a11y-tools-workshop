import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ChangeEvent, FormEvent, useState } from 'react';

export interface SearchBoxProps {
	className?: string;
	initialValue?: string;
	placeholder?: string;
	onSubmit?(text: string): void;
}

export default function SearchBox({
	className,
	initialValue = '',
	placeholder,
	onSubmit,
}: SearchBoxProps) {
	const [value, setValue] = useState(initialValue);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit?.(value);
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
				<button className="flex-shrink px-2 rounded-l-none rounded-r-md" type="submit">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</form>
	);
}
