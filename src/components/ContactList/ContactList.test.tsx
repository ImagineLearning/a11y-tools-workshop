import React from 'react';
import { render } from '@testing-library/react';
import ContactList from './ContactList';
import { Contact } from '../../helpers/contact';
import userEvent from '@testing-library/user-event';

describe('<ContactList />', () => {
	let contacts: Contact[];

	beforeEach(() => {
		contacts = [
			{
				id: 1,
				firstName: 'Aaron',
				lastName: 'Aaronson',
				email: 'aaron@example.com',
				phone: '555-123-4567',
				address: '1234 Street\nAnytown, USA',
			},
			{
				id: 2,
				firstName: 'Bob',
				lastName: 'Bobertson',
				email: 'bob@example.com',
				phone: '555-123-4568',
				address: '1235 Street\nAnytown, USA',
			},
		];
	});

	it('renders list of contact cards', () => {
		const { getByText } = render(<ContactList contacts={contacts} />);

		expect(getByText('Aaronson, Aaron')).toBeInTheDocument();
		expect(getByText('Bobertson, Bob')).toBeInTheDocument();
	});

	it('renders empty state if no contacts', () => {
		const { getByText } = render(<ContactList emptyContent="No contacts" />);

		expect(getByText('No contacts')).toBeInTheDocument();
	});

	it('renders title', () => {
		const { getByText } = render(<ContactList title="My Title" contacts={contacts} />);

		expect(getByText('My Title')).toBeInTheDocument();
	});

	it('onClickDelete(..) sends correct contact as argument', () => {
		const handleClick = jest.fn();
		const { getAllByRole } = render(
			<ContactList contacts={contacts} onClickDelete={handleClick} />
		);
		const [, button] = getAllByRole('button').filter((elem) => /text-red-700/.test(elem.className));

		userEvent.click(button);

		expect(handleClick).toHaveBeenCalledWith(contacts[1]);
	});

	it('onClickEdit(..) sends correct contact as argument', () => {
		const handleClick = jest.fn();
		const { getAllByRole } = render(<ContactList contacts={contacts} onClickEdit={handleClick} />);
		const [, button] = getAllByRole('button').filter((elem) =>
			/text-blue-600/.test(elem.className)
		);

		userEvent.click(button);

		expect(handleClick).toHaveBeenCalledWith(contacts[1]);
	});
});
