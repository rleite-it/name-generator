import React, { MouseEventHandler } from "react";
import { CustomButton } from "./styles";
import { Loading } from "../../icons/Loading";

export type ButtonProps = {
	type: "submit" | "reset" | "button" | undefined;
	value: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	status?: boolean;
};

const Button = ({ type, value, onClick, status }: ButtonProps) => {
	return (
		<CustomButton type={type} onClick={onClick} disabled={status}>
			{value}
		</CustomButton>
	);
};

export default Button;
