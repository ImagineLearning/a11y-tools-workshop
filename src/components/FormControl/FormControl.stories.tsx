import { Meta, Story } from '@storybook/react';
import React from 'react';
import FormControl, { FormControlProps } from './FormControl';

const meta: Meta = {
	title: 'Form Control',
	component: FormControl,
};

export default meta;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;

export const Text = Template.bind({});
Text.args = {
	label: 'Enter text...',
};

export const TextWithError = Template.bind({});
TextWithError.args = {
	...Text.args,
	value: 'Hello world!',
	error: "There's something wrong with the text you entered.",
};
