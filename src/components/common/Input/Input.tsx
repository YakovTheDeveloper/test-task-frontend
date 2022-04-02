import React, { FC, HTMLInputTypeAttribute } from 'react';
import * as palette from '../../../Colors';
import styled from 'styled-components';


type Props = {
	width?: string
	placeholder?: string
	onChange?: (e: React.ChangeEvent) => void
	value?: string
	id?: string
	onBlur?: () =>  void
	type?: HTMLInputTypeAttribute
}

const StyledInput = styled.input<Props>`
	width: ${({ width }) => width || '100%'};
	height: 25px;
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	border: none;
	border-bottom: 1px solid ${palette.gray1};
	color: ${palette.gray1};
	outline: none;

::placeholder,
  ::-webkit-input-placeholder {
	font-weight: 400;
	color: ${palette.gray3};
  }
  :-ms-input-placeholder {
	font-weight: 400;
	 color: ${palette.gray3};
  }
`;

const Input: FC<Props> = (props) => {
	return (
		<StyledInput
			{...props}
		/>
	);
};

export default Input;