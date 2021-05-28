import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import Tab, { TabProps } from './Tab';

const meta: Meta = {
	title: 'Tab',
	component: Tab,
};

export default meta;

const Template: Story<PropsWithChildren<TabProps>> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Tab',
};

export const Selected = Template.bind({});
Selected.args = {
	children: 'Tab',
	selected: true,
};
