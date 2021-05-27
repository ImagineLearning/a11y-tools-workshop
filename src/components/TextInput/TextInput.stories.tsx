import { Meta, Story } from '@storybook/react';
import React from 'react';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta = {
	title: 'Text Input',
	component: TextInput,
};

export default meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
	placeholder: 'Enter text...',
};

export const SingleLineWithValue = Template.bind({});
SingleLineWithValue.args = {
	value: 'Text entered.',
};

export const Multiline = Template.bind({});
Multiline.args = {
	type: 'multiline',
	placeholder: 'Enter text...',
};
