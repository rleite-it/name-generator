import { NameProps } from ".";

export const randomName = (
	gender: string,
	names: string[][],
	lastName: NameProps | null
): string[] => {
	const filteredNames = names.filter(
		(name: string[]) =>
			name[1] === gender.toUpperCase() && name[3] !== lastName?.name
	);

	return filteredNames[Math.floor(Math.random() * filteredNames.length - 1)];
};
