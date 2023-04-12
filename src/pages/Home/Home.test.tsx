import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Home from "./index";

jest.mock("axios");

describe("Home", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders the page title", () => {
		render(<Home />);
		const title = screen.getByText("home_page.title");
		expect(title).toBeInTheDocument();
	});
});
