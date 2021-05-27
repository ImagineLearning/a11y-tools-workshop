import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactCard, { ContactCardProps } from './ContactCard';

const meta: Meta = {
	title: 'Contact Card',
	component: ContactCard,
};

export default meta;

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />;

export const Complete = Template.bind({});
Complete.args = {
	firstName: 'Carlton',
	lastName: 'Banks',
	email: 'carlton@example.com',
	phone: '555-555-5555',
	address: '805 St. Cloud Road\nBel Air\nLos Angeles, CA 90077',
};
