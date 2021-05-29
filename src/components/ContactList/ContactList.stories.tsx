import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactList, { ContactListProps } from './ContactList';

const meta: Meta = {
	title: 'Contact List',
	component: ContactList,
};

export default meta;

const Template: Story<ContactListProps> = (args) => <ContactList {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'A - G',
	contacts: [
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
		{
			id: 3,
			firstName: 'Chandler',
			lastName: 'Chandlerson',
			email: 'chandler@example.com',
			phone: '555-123-4569',
			address: '1236 Street\nAnytown, USA',
		},
	],
};
