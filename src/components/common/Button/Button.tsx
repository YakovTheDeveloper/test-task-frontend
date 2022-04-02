import React, { ButtonHTMLAttributes, FC } from 'react';
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
	type?: 'button' | 'submit'
	onClick?: (e?: any) => void
	width?: string
	alignSelf?: React.CSSProperties['alignSelf']
	justifySelf?: React.CSSProperties['justifySelf']
}

const StyledButton = styled.button<Props>`
	display: flex;
	justify-content: center;
	text-align: center;
	align-self:${({ alignSelf }) => alignSelf || 'auto '};
	justify-self:${({ justifySelf }) => justifySelf || 'auto '};
	width:${({ width }) => width || 'fit-content'};
	font-size: 16px;
  	font-weight: 500;
	line-height: 19px;
	${({ variant }) => {
		if (variant === 'text') return textStyle;
		if (variant === 'contained') return containedStyle;
	}}			
`;

const Button: FC<Props> = (props) => {
	return (
		<StyledButton
			type={props.type ? props.type : 'button'}
			{...props}
		>
			{props.children}
		</StyledButton>
	);
};

export default Button;