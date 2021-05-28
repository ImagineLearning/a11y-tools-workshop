import React from 'react';
import { render } from '@testing-library/react';
import Tab from './Tab';

describe('<Tab />', () => {
	it('renders tab', () => {
		const { getByText } = render(<Tab>My Tab</Tab>);
		expect(getByText('My Tab')).toBeInTheDocument();
	});
});
