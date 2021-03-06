import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
	it('renders placeholder text', () => {
		const { getByPlaceholderText } = render(<SearchBox placeholder="Search..." />);
		expect(getByPlaceholderText('Search...')).toBeInTheDocument();
	});

	it('onSubmit(..) calls handler with search text', () => {
		const handleSubmit = jest.fn();
		const { getByPlaceholderText, getByRole } = render(
			<SearchBox placeholder="Search..." onSubmit={handleSubmit} />
		);

		const input = getByPlaceholderText('Search...');
		userEvent.type(input, 'This is my search');

		const button = getByRole('button');
		userEvent.click(button);

		expect(handleSubmit).toHaveBeenCalledWith('This is my search');
	});

	it('reset button clears text and calls onReset() handler', () => {
		const handleReset = jest.fn();
		const { getByPlaceholderText } = render(
			<SearchBox placeholder="Search..." onReset={handleReset} />
		);

		const input = getByPlaceholderText('Search...');
		userEvent.type(input, 'This is my search');

		const resetButton = input.nextElementSibling;
		userEvent.click(resetButton!);

		expect((input as HTMLInputElement).value).toBe('');
		expect(handleReset).toHaveBeenCalled();
	});
});
