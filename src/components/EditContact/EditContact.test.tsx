import React from 'react';
import { render } from '@testing-library/react';
import EditContact from './EditContact';
import { Contact } from '../../models/contact';

describe('<AddContact />', () => {
	it('renders form', () => {
		const { getAllByRole } = render(<EditContact />);
		const inputs = getAllByRole('textbox');
		inputs.forEach((input) => {
			expect((input as HTMLInputElement).value).toBe('');
		});
	});

	it('renders form with initial values', () => {
		const initialValues: Contact = {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			phone: '555-555-5555',
		};

		const { getAllByRole } = render(<EditContact initialValues={initialValues} />);
		const inputs = getAllByRole('textbox');
		inputs.forEach((input) => {
			const { name, value } = input as HTMLInputElement;
			expect(value).toBe(initialValues[name]);
		});
	});
});
