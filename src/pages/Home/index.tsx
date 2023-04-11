import React, { useEffect, useState } from "react";
import { Wrapper, Title, GenderFilter, CardWrapper, Try } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import axios from "axios";
import { Loading } from "../../icons/Loading";
import { randomName } from "./utils";

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

	useEffect(() => {
		try {
			axios
				.get("./data/names.json")
				.then((response) => setNames(response.data))
				.catch((error) => console.error(error));
		} catch (error) {
			console.error(error);
		}
	}, []);

	const generateName = (gender: string) => {
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
			<Title>Name Generator</Title>
			<GenderFilter>
				<Button
					type="button"
					value="Male"
					onClick={() => generateName("MALE")}
					status={loading}
				/>
				<Button
					type="button"
					value="Female"
					onClick={() => generateName("FEMALE")}
					status={loading}
				/>
			</GenderFilter>

			<CardWrapper>
				{previousGenerates.length ? (
					!loading ? (
						<Card baby={lastName} />
					) : (
						<Loading width="5rem" height="5rem" color="#fff" />
					)
				) : !loading ? (
					<Try>Give it a try!</Try>
				) : (
					<Loading width="5rem" height="5rem" color="#fff" />
				)}
			</CardWrapper>
		</Wrapper>
	);
};

export default Home;
