import axeDevTools from '@axe-devtools/browser';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe as jestAxe } from 'jest-axe';
import React from 'react';
import jestAxeDevTools, { JestAxeDevTools } from '../../testUtils/jestAxeDevTools';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
	beforeAll(() => {
		JestAxeDevTools.initReporter('SearchBox');
	});

	afterAll(async () => {
		await JestAxeDevTools.writeReports(JestAxeDevTools.reportsDirectory, 'html', 'junit');
		JestAxeDevTools.cleanUp();
	});

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

	it('has no @axe-devtools/browser a11y violations', async () => {
		await new Promise((resolve, reject) => {
			axeDevTools.init('wcag2', resolve, reject);
		});
		const { container } = render(<SearchBox placeholder="Search..." />);
		const { violations } = await axeDevTools.run(container);
		expect(violations).toHaveLength(0);
	});

	it('has no JestAxeDevTools a11y violations', async () => {
		const { container } = render(<SearchBox placeholder="Search..." />);
		const results = await jestAxeDevTools(container, 'Empty');
		expect(results).toHaveNoViolations();
	});

	it('has no jest-axe a11y violations', async () => {
		const { container } = render(<SearchBox placeholder="Search..." />);
		const results = await jestAxe(container);
		expect(results).toHaveNoViolations();
	});
});
