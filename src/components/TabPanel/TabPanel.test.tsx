import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Tab from '../Tab/Tab';
import TabContent from '../TabContentPanel/TabContent';
import TabPanel from './TabPanel';

describe('<TabPanel />', () => {
	it('renders tab bar and tab content', () => {
		const { getByText, queryByText } = render(
			<TabPanel
				initialTab="tab2"
				tabs={[
					<Tab key="tab1" value="tab1">
						Tab 1
					</Tab>,
					<Tab key="tab2" value="tab2">
						Tab 2
					</Tab>,
				]}
			>
				<TabContent tab="tab1">Tab 1 Content</TabContent>
				<TabContent tab="tab2">Tab 2 Content</TabContent>
			</TabPanel>
		);

		expect(getByText('Tab 1')).toBeInTheDocument();
		expect(getByText('Tab 2')).toBeInTheDocument();
		expect(getByText('Tab 2 Content')).toBeInTheDocument();
		expect(queryByText('Tab 1 Content')).toBeNull();
	});

	it('clicking a tab changes content', () => {
		const { getByText, queryByText } = render(
			<TabPanel
				initialTab="tab2"
				tabs={[
					<Tab key="tab1" value="tab1">
						Tab 1
					</Tab>,
					<Tab key="tab2" value="tab2">
						Tab 2
					</Tab>,
				]}
			>
				<TabContent tab="tab1">Tab 1 Content</TabContent>
				<TabContent tab="tab2">Tab 2 Content</TabContent>
			</TabPanel>
		);

		expect(getByText('Tab 2 Content')).toBeInTheDocument();
		expect(queryByText('Tab 1 Content')).toBeNull();

		userEvent.click(getByText('Tab 1'));

		expect(getByText('Tab 1 Content')).toBeInTheDocument();
		expect(queryByText('Tab 2 Content')).toBeNull();
	});
});
