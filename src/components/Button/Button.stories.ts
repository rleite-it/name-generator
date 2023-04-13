// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from ".";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		value: "male",
		type: "button",
		onClick: () => alert("Button clicked!"),
		isLoading: false,
	},
};

export const Disabled: Story = {
	args: {
		value: "male",
		type: "button",
		onClick: () => alert("Button clicked!"),
		isLoading: true,
	},
};
