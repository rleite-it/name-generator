import React, { MouseEventHandler } from "react";
import { CustomButton } from "./styles";
import { Loading } from "../../icons/Loading";

export type ButtonProps = {
	type: "submit" | "reset" | "button" | undefined;
	value: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	isLoading?: boolean;
};

const Button = ({ type, value, onClick, isLoading }: ButtonProps) => {
	return (
		<CustomButton type={type} onClick={onClick} disabled={isLoading}>
			{value}
		</CustomButton>
	);
};

export default Button;
