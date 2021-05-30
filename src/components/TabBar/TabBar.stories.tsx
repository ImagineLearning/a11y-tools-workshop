import { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import Tab from '../Tab/Tab';
import TabBar, { TabBarProps } from './TabBar';

const meta: Meta = {
	title: 'Tab Bar',
	component: TabBar,
};

export default meta;

const Template: Story<PropsWithChildren<TabBarProps>> = (args) => <TabBar {...args} />;

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
