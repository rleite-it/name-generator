import React, { MouseEventHandler } from "react";
import { CustomButton } from "./styles";
import { Loading } from "../../icons/Loading";
import { useTranslation } from "react-i18next";

export type ButtonProps = {
	type: "submit" | "reset" | "button" | undefined;
	value: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	isLoading?: boolean;
};

const Button = ({ type, value, onClick, isLoading }: ButtonProps) => {
	const { t } = useTranslation();

	return (
		<CustomButton type={type} onClick={onClick} disabled={isLoading}>
			{t(`button.${value}`)}
		</CustomButton>
	);
};

export default Button;
