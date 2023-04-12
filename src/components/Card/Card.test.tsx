import React from "react";
import { render, screen } from "@testing-library/react";
import Card, { CardProps } from ".";
import babyGirl from "../../assets/baby-girl.jpg";
import babyBoy from "../../assets/baby-boy.jpg";

jest.mock("../../assets/baby-girl.jpg", () => ({
	default: "baby-girl.jpg",
}));
jest.mock("../../assets/baby-boy.jpg", () => ({
	default: "baby-boy.jpg",
}));

const defaultProps: CardProps = {
	baby: {
		birthYear: "2022",
		gender: "FEMALE",
		ethnicity: "White",
		name: "Test Baby",
		numOfBabies: "1",
		rank: "1",
	},
};

describe("Card component", () => {
	it("renders the baby image with the correct source", () => {
		const { getByRole } = render(<Card {...defaultProps} />);
		expect(getByRole("img")).toHaveAttribute("src", babyGirl);
	});

	it("renders the baby name in uppercase", () => {
		const { getByText } = render(<Card {...defaultProps} />);
		expect(getByText("TEST BABY")).toBeInTheDocument();
	});
});
