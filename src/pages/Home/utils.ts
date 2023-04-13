import { NameProps } from ".";

export const randomName = (
	gender: string | null,
	names: string[][],
	lastName: NameProps | null,
	ethnicity: string | null
): string[] => {
	const filteredNames = names.filter(
		(name: string[]) =>
			name[9] === gender?.toUpperCase() &&
			name[10] === ethnicity &&
			name[11] !== lastName?.name
	);

	return filteredNames[Math.floor(Math.random() * filteredNames.length - 1)];
};
