import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('<TextInput />', () => {
	it('renders <input /> element', () => {
		const { getByRole } = render(<TextInput />);
		expect(getByRole('textbox')).toBeInTheDocument();
	});
});
