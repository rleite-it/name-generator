import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Home from ".";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Home component", () => {
	it("renders the title correctly", () => {
		render(<Home />);
		expect(screen.getByText("Name Generator")).toBeInTheDocument();
	});

	it("renders the buttons with the correct values", () => {
		render(<Home />);
		expect(screen.getByRole("button", { name: "Male" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Female" })).toBeInTheDocument();
	});

	it.only("generates a name when the Male button is clicked", async () => {
		const data = [["2022", "MALE", "White", "Test Baby", "1", "1"]];
		mockedAxios.get.mockResolvedValueOnce({ data });
		render(<Home />);

		const maleButton = screen.getByRole("button", { name: "Male" });
		await act(async () => {
			maleButton.click();
			await waitFor(() => expect(maleButton).not.toBeDisabled());
		});

		expect(screen.getByText("Test Baby")).toBeInTheDocument();
	});

	it("generates a name when the Female button is clicked", async () => {
		const data = [["2022", "FEMALE", "White", "Test Baby", "1", "1"]];
		mockedAxios.get.mockResolvedValueOnce({ data });
		render(<Home />);
		const femaleButton = screen.getByRole("button", { name: "Female" });
		femaleButton.click();
		await waitFor(() => expect(femaleButton).not.toBeDisabled());
		expect(screen.getByText("Test Baby")).toBeInTheDocument();
	});
});
