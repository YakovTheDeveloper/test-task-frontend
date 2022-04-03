import styled from 'styled-components';
import * as palette from '../../../Colors';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const FirstNameInput = styled(Input)`
	
`;
const LastNameInput = styled(Input)`
	
`;

const Form = styled.form`
	padding: 15px;
	gap: 15px;
	position: absolute;
	top: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	background-color: ${palette.white};
`;
const Group = styled.div`
	display: flex;
	flex-direction: column;
`;
const Label = styled.label`
	font-size: 12px;
`;

const CloseButton = styled(Button)`
	order: -2;
`;

export const Styled = {
	FirstNameInput,
	LastNameInput,
	Form,
	Group,
	Label,
	CloseButton
};