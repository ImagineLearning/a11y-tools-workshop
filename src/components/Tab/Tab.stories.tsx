import { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import BaseTab, { BaseTabProps } from './BaseTab';

const meta: Meta = {
	title: 'Tab',
	component: BaseTab,
};

export default meta;

const Template: Story<PropsWithChildren<BaseTabProps>> = (args) => <BaseTab {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Tab',
	value: 'tab',
};

export const Selected = Template.bind({});
Selected.args = {
	children: 'Tab',
	selected: true,
	value: 'tab',
};
