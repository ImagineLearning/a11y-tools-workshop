import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Contact } from '../../helpers/contact';
import EditContact from './EditContact';

describe('<EditContact />', () => {
	it('renders form', () => {
		const { getAllByRole } = render(<EditContact />);
		const inputs = getAllByRole('textbox');
		inputs.forEach((input) => {
			expect((input as HTMLInputElement).value).toBe('');
		});
	});

	it('renders form with initial values', () => {
		const initialValues: Contact = {
			id: 1,
			firstName: 'George',
			lastName: 'Washington',
			email: 'george@example.com',
			phone: '555-555-5555',
			address: '1600 Pennsylvania Ave NW\nWashington, DC 20500',
		};

		const { getAllByRole } = render(<EditContact initialValues={initialValues} />);
		const inputs = getAllByRole('textbox');
		inputs.forEach((input) => {
			const { name, value } = input as HTMLInputElement;
			expect(value).toBe(initialValues[name as keyof Contact]);
		});
	});

	it('displays validation error for empty first name field', async () => {
		const { getByPlaceholderText, getByText } = render(<EditContact />);
		const input = getByPlaceholderText('First Name');

		fireEvent.focus(input);
		fireEvent.blur(input);

		await waitFor(() => {
			expect(getByText('Enter your first name')).toBeInTheDocument();
		});
	});

	it('displays validation error for empty last name field', async () => {
		const { getByPlaceholderText, getByText } = render(<EditContact />);
		const input = getByPlaceholderText('Last Name');

		fireEvent.focus(input);
		fireEvent.blur(input);

		await waitFor(() => {
			expect(getByText('Enter your last name')).toBeInTheDocument();
		});
	});

	it('displays validation error for invalid email', async () => {
		const { getByPlaceholderText, getByText } = render(<EditContact />);
		const input = getByPlaceholderText('Email Address');

		userEvent.type(input, 'you@example');
		fireEvent.blur(input);

		await waitFor(() => {
			expect(getByText('Enter a valid email address')).toBeInTheDocument();
		});
	});

	it('displays validation error for invalid phone number', async () => {
		const { getByPlaceholderText, getByText } = render(<EditContact />);
		const input = getByPlaceholderText('Phone Number');

		userEvent.type(input, '555-5555');
		fireEvent.blur(input);

		await waitFor(() => {
			expect(getByText('Enter a valid phone number')).toBeInTheDocument();
		});
	});

	it('does not call onSubmit if form is invalid', async () => {
		const handleSubmit = jest.fn();
		const { getAllByRole } = render(<EditContact onSubmit={handleSubmit} />);

		const submit = getAllByRole('button').find(
			(b) => (b as HTMLButtonElement).type === 'submit'
		) as HTMLElement;
		userEvent.click(submit);

		await waitFor(() => {
			expect(handleSubmit).not.toHaveBeenCalled();
		});
	});

	it('calls onSubmit for valid from', async () => {
		const contact: Contact = {
			id: 1,
			firstName: 'George',
			lastName: 'Washington',
			email: 'george@example.com',
			phone: '555-555-5555',
			address: '1600 Pennsylvania Ave NW\nWashington, DC 20500',
		};
		const handleSubmit = jest.fn();

		const { getAllByRole } = render(
			<EditContact onSubmit={handleSubmit} initialValues={contact} />
		);

		const submit = getAllByRole('button').find(
			(b) => (b as HTMLButtonElement).type === 'submit'
		) as HTMLElement;
		userEvent.click(submit);

		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledWith(contact);
		});
	});
});
