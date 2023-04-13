import styled from "styled-components";
import { deviceQueries } from "../../styles/globalStyles";

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
	padding: 0 1em;

	${deviceQueries.tablet} {
		font-size: 3rem;
	}

	${deviceQueries.desktopL} {
		font-size: 7rem;
	}
`;

export const GenderFilter = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: space-around;
	width: 75%;
	align-items: center;

	${deviceQueries.tablet} {
		margin-top: 2rem;
		width: 60%;
		justify-content: space-between;
	}
`;

export const CardWrapper = styled.div`
	width: 100%;
	min-height: 350px;
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 3rem;
`;

export const Try = styled.h2`
	font-weight: 600;
`;

export const EthnicityWrapper = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	width: 75%;
	align-items: center;

	${deviceQueries.tablet} {
		margin-top: 2rem;
		width: 60%;
		justify-content: center;
	}
`;
