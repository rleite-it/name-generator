import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from ".";

const defaultProps: ButtonProps = {
	type: "button",
	value: "Click me",
	onClick: jest.fn(),
	isLoading: false,
};

describe("Button component", () => {
	it("renders the button with the correct text", () => {
		const { getByRole } = render(<Button {...defaultProps} />);
		expect(getByRole("button")).toHaveTextContent(defaultProps.value);
	});

	it("calls the onClick function when clicked", () => {
		const { getByRole } = render(<Button {...defaultProps} />);
		fireEvent.click(getByRole("button"));
		expect(defaultProps.onClick).toHaveBeenCalled();
	});

	it("disables the button when status prop is true", () => {
		const { getByRole } = render(<Button {...defaultProps} isLoading={true} />);
		expect(getByRole("button")).toBeDisabled();
	});
});
