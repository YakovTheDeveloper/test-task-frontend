import React, { FC } from 'react';
import * as palette from '../../../Colors';
import styled from 'styled-components';

type Props = {
	placeholder: string
}



const Input: FC<Props> = ({ placeholder }) => {

	const Input = styled.input`
	height: 25px;
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	border: none;
	border-bottom: 1px solid ${palette.gray1};
	color: ${palette.gray1};

	::placeholder,
 	 ::-webkit-input-placeholder {
    	color: ${palette.gray3};
 	 }
  	:-ms-input-placeholder {
     	color: ${palette.gray3};
  	}`;


	return (
		<Input
			placeholder={placeholder}
		/>
	);
};

export default Input;