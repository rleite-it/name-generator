// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Card, { CardProps } from ".";

const meta: Meta<typeof Card> = {
	title: "Card",
	component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Female: Story = {
	args: {
		baby: {
			birthYear: "2022",
			gender: "FEMALE",
			ethnicity: "White",
			name: "Alice",
			numOfBabies: "1",
			rank: "1",
		},
	},
};

export const Male: Story = {
	args: {
		baby: {
			birthYear: "2015",
			gender: "MALE",
			ethnicity: "White",
			name: "John",
			numOfBabies: "350",
			rank: "1",
		},
	},
};
