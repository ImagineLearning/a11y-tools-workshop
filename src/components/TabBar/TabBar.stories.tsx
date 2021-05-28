import React from 'react';
import { Meta, Story } from '@storybook/react';
import TabBar, { TabBarProps } from './TabBar';
import Tab from '../Tab/Tab';

const meta: Meta = {
	title: 'Tab Bar',
	component: TabBar,
};

export default meta;

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<Tab value={0}>Tab 1</Tab>
			<Tab value={1}>Tab 2</Tab>
			<Tab value={2}>Tab 3</Tab>
		</>
	),
	selected: 0,
};
