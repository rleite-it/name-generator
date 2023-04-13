import React, { useEffect, useState } from "react";
import {
	Wrapper,
	Title,
	GenderFilter,
	CardWrapper,
	Try,
	EthnicityWrapper,
} from "./styles";
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
	const [ethnicities, setEthnicities] = useState<string[]>([]);
	const [previousGenerates, setPreviousGenerates] = useState<string[][]>([]);
	const [lastName, setLastName] = useState<NameProps | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
	const [selectedEthnicity, setSelectedEthnicity] = useState<string | null>(
		null
	);

	const { t } = useTranslation();

	const fetchNames = async () => {
		try {
			const response = await axios.get(
				"https://data.cityofnewyork.us/api/views/25th-nujf/rows.json"
			);
			const results = response.data.data;
			setNames(results);

			let arrEthnicity: string[] = [];

			for (const item of results) {
				if (!arrEthnicity.includes(item[10])) {
					arrEthnicity.push(item[10]);
				}
			}

			setEthnicities(arrEthnicity);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchNames();
	}, []);

	const generateName = (gender: Gender | null, ethnicity: string | null) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			const name: string[] = randomName(gender, names, lastName, ethnicity);
			setPreviousGenerates((prevGens) => [...prevGens, name]);

			setLastName({
				birthYear: name[8],
				gender: name[9],
				ethnicity: name[10],
				name: name[11],
				numOfBabies: name[12],
				rank: name[13],
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
					onClick={() => setSelectedGender(Gender.Male)}
					isLoading={loading}
					selected={selectedGender === Gender.Male}
				/>
				<Button
					type="button"
					value="generate"
					onClick={() => generateName(selectedGender, selectedEthnicity)}
					isLoading={!(!!selectedGender && !!selectedEthnicity)}
				/>
				<Button
					type="button"
					value={Gender.Female}
					onClick={() => setSelectedGender(Gender.Female)}
					isLoading={loading}
					selected={selectedGender === Gender.Female}
				/>
			</GenderFilter>

			<EthnicityWrapper>
				{/* {ethnicities.length &&
					ethnicities.map((ethnicity) => (
						<Button
							type="button"
							value={ethnicity}
							onClick={() => setSelectedEthnicity(ethnicity)}
						/>
					))} */}
				<select onChange={(e) => setSelectedEthnicity(e.currentTarget.value)}>
					<option value="" selected disabled hidden>
						Select Ethinicity
					</option>
					{ethnicities.length &&
						ethnicities.map((ethnicity) => (
							<option value={ethnicity}>{ethnicity}</option>
						))}
				</select>
			</EthnicityWrapper>

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
