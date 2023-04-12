export default {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"jest-transform-stub",
	},
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"jest-transform-stub",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testPathIgnorePatterns: ["/node_modules/"],
	collectCoverage: false,
	collectCoverageFrom: [
		"src/**/!(*.stories).{ts,tsx}",
		"!<rootDir>/src/main.tsx",
	],
	modulePaths: ["<rootDir>/src/"],
};
