import React, { FC, HTMLInputTypeAttribute, useState } from 'react';
import * as palette from '../../../Colors';
import styled from 'styled-components';


type Props = {
	onChange: () => void
	id?: string;
}

const Label = styled.label<{ isChecked: boolean }>`
	width: 16px;
	height: 16px;
	border: 1px solid ${palette.gray1};
	border-radius: 4px;
	position: relative;
	background: ${({ isChecked }) => isChecked ? 'url("assets/vector/check.svg") center no-repeat' : 'none'};

`;
const StyledCheckbox = styled.input<Props>`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
`;

const Checkbox: FC<Props> = ({ onChange, id }) => {

	const [isChecked, setIsChecked] = useState(false);
	const checkHandler = () => {
		setIsChecked(prev => !prev);
	};
	return (
		<Label
			htmlFor={id}
			isChecked={isChecked}
			onClick={checkHandler}
		>
			<StyledCheckbox
				id={id}
				type="checkbox"
				onChange={onChange}
			/>
		</Label>
	);
};

export default Checkbox;