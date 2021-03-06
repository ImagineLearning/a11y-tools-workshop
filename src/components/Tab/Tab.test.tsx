import React from 'react';
import { render } from '@testing-library/react';
import Tab from './Tab';
import userEvent from '@testing-library/user-event';
import TabBarContext from '../TabBar/TabBarContext';

describe('<Tab />', () => {
	it('renders tab', () => {
		const { getByText } = render(<Tab>My Tab</Tab>);
		expect(getByText('My Tab')).toBeInTheDocument();
	});

	it('passes value to click handler', () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<TabBarContext.Provider value={{ onClick }}>
				<Tab value="tab1">Tab 1</Tab>
			</TabBarContext.Provider>
		);

		const tab = getByText('Tab 1');
		userEvent.click(tab);

		const [[, value]] = onClick.mock.calls;
		expect(value).toBe('tab1');
	});
});
