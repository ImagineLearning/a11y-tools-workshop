import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Tab from './BaseTab';

describe('<Tab />', () => {
	it('renders tab', () => {
		const { getByText } = render(<Tab>My Tab</Tab>);
		expect(getByText('My Tab')).toBeInTheDocument();
	});

	it('passes value to click handler', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Tab value="tab1" onClick={handleClick}>
				Tab 1
			</Tab>
		);

		const tab = getByText('Tab 1');
		userEvent.click(tab);

		const [[, value]] = handleClick.mock.calls;
		expect(value).toBe('tab1');
	});
});
