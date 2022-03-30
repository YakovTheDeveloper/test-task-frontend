import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';


const textStyle = `
	color: ${palette.red};
	background: 'none';
`;
const containedStyle = `
	width: 113px;
	padding: 9px 32px 10px;
	border-radius: 4px;
	color: ${palette.white};
	background: ${palette.red};
	&:hover{
		background: ${palette.darkRed};
	}
`;
type PossibleButtonTypes = 'text' | 'contained'
type Props = {
	variant: PossibleButtonTypes
	children?: React.ReactChild
	onClick?: (e?: any) => void
	width?: string
}

const StyledButton = styled.button<Props>`
	width:${({ width }) => width || 'fit-content'};
	font-size: 16px;
  	font-weight: 500;
	line-height: 19px;
	${({ variant }) => {
		if (variant === 'text') return textStyle;
		if (variant === 'contained') return containedStyle;
	}}			
`;

const Button: FC<Props> = ({ variant, children, onClick }) => {
	return (
		<StyledButton
			variant={variant}
			onClick={onClick}
			type='button'
		>
			{children}
		</StyledButton>
	);
};

export default Button;