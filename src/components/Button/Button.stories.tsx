import { Meta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import Button, { ButtonProps } from './Button';

const meta: Meta = {
	title: 'Button',
	component: Button,
};

export default meta;

const Template: Story<PropsWithChildren<ButtonProps>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
	buttonType: 'primary',
	children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	buttonType: 'secondary',
	children: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
	buttonType: 'success',
	children: 'Success Button',
};

export const Alert = Template.bind({});
Alert.args = {
	buttonType: 'alert',
	children: 'Alert Button',
};

export const Warning = Template.bind({});
Warning.args = {
	buttonType: 'warning',
	children: 'Warning Button',
};

export const Clear = Template.bind({});
Clear.args = {
	buttonType: 'clear',
	children: 'Clear Button',
};
