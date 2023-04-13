import styled from "styled-components";
import { deviceQueries } from "../../styles/globalStyles";

export const CustomButton = styled.button`
	min-width: 10rem;
	border: 2px solid #ffffff;
	border-radius: 5px;
	padding: 1.8rem 0;
	font-size: 1.2rem;
	font-weight: 600;
	color: #ffffff;
	background-color: ${(props) => (props.selected ? "green" : "#1a1a1a")};
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		background-color: #ffffff;
		border: 2px solid #1a1a1a;
		color: #1a1a1a;
	}

	&:disabled {
		background-color: #555555;
		color: #444;
		border: 2px solid #ffffff;
	}

	${deviceQueries.desktopL} {
		min-width: 400px;
		font-size: 3rem;
		padding: 3rem 0;
	}
`;
