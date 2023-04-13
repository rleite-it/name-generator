import React, { MouseEventHandler } from "react";
import { CustomButton } from "./styles";
import { Loading } from "../../icons/Loading";
import { useTranslation } from "react-i18next";

export type ButtonProps = {
	type: "submit" | "reset" | "button" | undefined;
	value: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	isLoading?: boolean;
	selected?: boolean;
};

const Button = ({
	type,
	value,
	onClick,
	isLoading,
	selected = false,
}: ButtonProps) => {
	const { t } = useTranslation();
	return (
		<CustomButton
			type={type}
			onClick={onClick}
			disabled={isLoading}
			selected={selected}
		>
			{t(`button.${value}`)}
		</CustomButton>
	);
};

export default Button;
