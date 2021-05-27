import { Meta, Story } from '@storybook/react';
import React from 'react';
import EditContact, { EditContactProps } from './EditContact';

const meta: Meta = {
	title: 'Edit Contact Form',
	component: EditContact,
};

export default meta;

const Template: Story<EditContactProps> = (args) => <EditContact {...args} />;

export const Default = Template.bind({});
Default.args = {};
