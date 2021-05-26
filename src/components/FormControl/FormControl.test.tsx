import React from 'react';
import { render } from '@testing-library/react';
import FormControl from './FormControl';

describe('<FormControl />', () => {
	it('renders component', () => {
		const { getByRole } = render(<FormControl />);
		expect(getByRole('textbox')).toBeInTheDocument();
	});

	it('renders error message', () => {
		const { getByText } = render(<FormControl error="This is an error message" />);
		expect(getByText('This is an error message')).toBeInTheDocument();
	});
});
