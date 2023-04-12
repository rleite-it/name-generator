import React, { useEffect, useState } from "react";
import { Wrapper, Title, GenderFilter, CardWrapper, Try } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import axios from "axios";
import { Loading } from "../../icons/Loading";
import { randomName } from "./utils";
import { useTranslation } from "react-i18next";
import { Gender } from "../../constants/enums";

export type NameProps = {
	birthYear: string;
	gender: string;
	ethnicity: string;
	name: string;
	numOfBabies: string;
	rank: string;
};

const Home = () => {
	const [names, setNames] = useState<string[][]>([]);
	const [previousGenerates, setPreviousGenerates] = useState<string[][]>([]);
	const [lastName, setLastName] = useState<NameProps | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const { t } = useTranslation();

	const fetchNames = async () => {
		try {
			const response = await axios.get("./data/names.json");
			setNames(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchNames();
	}, []);

	const generateName = (gender: Gender) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			const name: string[] = randomName(gender, names, lastName);
			setPreviousGenerates((prevGens) => [...prevGens, name]);
			setLastName({
				birthYear: name[0],
				gender: name[1],
				ethnicity: name[2],
				name: name[3],
				numOfBabies: name[4],
				rank: name[5],
			});
		}, 500);
	};

	return (
		<Wrapper>
			<Title>{t("home_page.title")}</Title>
			<GenderFilter>
				<Button
					type="button"
					value={Gender.Male}
					onClick={() => generateName(Gender.Male)}
					isLoading={loading}
				/>
				<Button
					type="button"
					value={Gender.Female}
					onClick={() => generateName(Gender.Female)}
					isLoading={loading}
				/>
			</GenderFilter>

			<CardWrapper>
				{loading ? (
					<Loading />
				) : previousGenerates.length ? (
					<Card baby={lastName} />
				) : (
					<Try>{t("home_page.try")}</Try>
				)}
			</CardWrapper>
		</Wrapper>
	);
};

export default Home;
