import styled from "styled-components";
import { deviceQueries } from "../../styles/globalStyles";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 250px;
	height: 350px;
	background-color: rgba(255, 255, 255, 0.95);
	padding: 1.5rem 1.2rem;
	border: 1px solid #000;
	box-shadow: -5px 5px 5px rgba(24, 24, 24, 1);

	${deviceQueries.mobileM} {
		width: 300px;
		height: 400px;
	}

	${deviceQueries.desktopL} {
		width: 600px;
		height: 800px;
	}
`;

export const BabyWrapper = styled.div`
	width: 100%;
	height: 85%;
	background-color: white;
	border: 1px solid #000;
	filter: sepia(0.2) saturate(1.5) contrast(0.8) brightness(0.9);
	overflow: hidden;
`;

export const BabyImage = styled.img`
	position: relative;
	z-index: -10px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	transition: transform 0.5s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const BabyName = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 600;
	color: #1a1a1a;

	${deviceQueries.desktopL} {
		font-size: 3rem;
	}
`;
