import React from 'react';
import { render } from '@testing-library/react';
import TabBar from './TabBar';
import Tab from '../Tab/Tab';
import userEvent from '@testing-library/user-event';

describe('<TabBar />', () => {
	it('renders tabs', () => {
		const { getByText } = render(
			<TabBar>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabBar>
		);

		expect(getByText('Tab 1')).toBeInTheDocument();
		expect(getByText('Tab 2')).toBeInTheDocument();
	});

	it('renders selected tab', () => {
		const { getByText } = render(
			<TabBar selected="tab2">
				<Tab value="tab1">Tab 1</Tab>
				<Tab value="tab2">Tab 2</Tab>
			</TabBar>
		);

		const tab1 = getByText('Tab 1');
		expect(tab1).not.toHaveClass('border-blue-500');

		const tab2 = getByText('Tab 2');
		expect(tab2).toHaveClass('border-blue-500');
	});

	it('passes value of clicked tab to click handler', () => {
		const handleClick = jest.fn();

		const { getByText } = render(
			<TabBar selected="tab2" onClick={handleClick}>
				<Tab value="tab1">Tab 1</Tab>
				<Tab value="tab2">Tab 2</Tab>
			</TabBar>
		);

		const tab = getByText('Tab 2');
		userEvent.click(tab);

		expect(handleClick).toHaveBeenCalled();
		const [[, value]] = handleClick.mock.calls;
		expect(value).toBe('tab2');
	});
});
