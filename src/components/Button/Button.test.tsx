import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
	it('renders <button /> element', () => {
		const { getByRole } = render(<Button>I'm a button</Button>);
		expect(getByRole('button')).toBeInTheDocument();
	});
});
