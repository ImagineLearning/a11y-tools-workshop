import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import TabContentPanel, { TabContentPanelProps } from './TabContentPanel';
import TabContent from './TabContent';

describe('<TabContentPanel />', () => {
	let props: PropsWithChildren<TabContentPanelProps>;

	beforeEach(() => {
		props = {
			children: (
				<>
					<TabContent tab="tab1">This is tab 1</TabContent>
					<TabContent tab="tab2">This is tab 2</TabContent>
				</>
			),
			selected: 'tab2',
		};
	});

	it('renders selected content', () => {
		const { getByText } = render(<TabContentPanel {...props} />);
		expect(getByText('This is tab 2')).toBeInTheDocument();
	});

	it('does not render unselected content', async () => {
		const { queryByText } = render(<TabContentPanel {...props} />);
		const tab = queryByText('This is tab 1');
		expect(tab).toBeNull();
	});
});
