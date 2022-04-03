import styled from 'styled-components';
import * as palette from '../../../Colors';
import Button from '../../common/Button/Button';
import Flex from '../../common/Flex/Flex';
import Input from '../../common/Input/Input';


const Form = styled.form`
	width: 304px;
	height: 394px;
	/* gap: 24px; */
	padding: 36px;
	border-radius: 8px;
	background: ${palette.white};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;
const Title = styled.h3`
	text-align: center;
	font-weight: 500;
	font-size: 28px;
	line-height: 33px;
`;
const Remember = styled(Flex)`
	align-self: start;
`;

const LoginButton = styled(Button)`
`;


const AuthMessage = styled.p``;
const LoginInput = styled(Input)``;
const PasswordInput = styled(Input)``;

export const Styled = {
	Form,
	Title,
	Remember,
	LoginButton,
	AuthMessage,
	LoginInput,
	PasswordInput
};
