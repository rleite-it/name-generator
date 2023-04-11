import React from "react";
import { BabyImage, BabyName, BabyWrapper, Wrapper } from "./styles";
import babyGirl from "../../assets/baby-girl.jpg";
import babyBoy from "../../assets/baby-boy.jpg";
import { NameProps } from "../../pages/Home";

type CardProps = {
	baby: NameProps | null;
};

const Card = ({ baby }: CardProps) => {
	return (
		<Wrapper>
			<BabyWrapper>
				<BabyImage src={baby?.gender === "FEMALE" ? babyGirl : babyBoy} />
			</BabyWrapper>
			<BabyName>{baby?.name.toUpperCase()}</BabyName>
		</Wrapper>
	);
};

export default Card;
