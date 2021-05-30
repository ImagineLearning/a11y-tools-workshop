import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBox, { SearchBoxProps } from './SearchBox';

const meta: Meta = {
	title: 'Search Box',
	component: SearchBox,
};

export default meta;

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Search...',
};
