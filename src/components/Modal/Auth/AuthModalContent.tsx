import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useAuth } from '../../../hooks/auth/useAuth';
import { observer } from 'mobx-react-lite';
import User from '../../../store/User';
import Checkbox from '../../common/Checkbox/Checkbox';
import Flex from '../../common/Flex/Flex';

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


const AuthMessage = styled.p`
`;
const LoginInput = styled(Input)``;
const PasswordInput = styled(Input)``;

type Props = {
	closeModal?: () => void
}

const AuthModalContent: FC<Props> = observer(({ closeModal }) => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [rememberUser, setRememberUser] = useState(false);

	const onLoginChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setLogin(target.value);
	};
	const onPasswordChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setPassword(target.value);
	};

	useEffect(() => {
		rememberUser ? User.remember = true : User.remember = false;
	}, [rememberUser]);


	const loginHandler = (e: React.MouseEvent) => {
		if (login === '' || password === '') {
			User.statusMessage = 'Заполните поле ввода';
			return;
		}
		e.preventDefault();
		User.login(login, password);

		// if (rememberUser) {
		// 	User.remember = true;
		// 	User.login(login, password);
		// }
		// else {
		// 	User.remember = false;
		// 	User.login(login, password);
		// }
	};

	useEffect(() => {
		User.statusMessage = '';
	}, []);

	useEffect(() => {
		if (User.currentUser) closeModal && closeModal();
	}, [User.currentUser]);



	return (
		<Form>
			<Flex gap='24px' direction='column'>
				<Title>
					Вход
				</Title>
				<LoginInput
					placeholder='Логин'
					onChange={onLoginChange}
					value={login}
				/>
				<PasswordInput
					placeholder='Пароль'
					onChange={onPasswordChange}
					value={password}
				/>
				<Remember gap="8px" align='center' justify='start'>
					<Checkbox
						id="remember"
						onChange={() => setRememberUser(prev => !prev)}
					/>
					<label htmlFor="remember">
						Запомнить
					</label>
				</Remember>
			</Flex>




			<div>
				{User.loading && 'Loading...'}
			</div>

			<AuthMessage>
				{User.statusMessage}
			</AuthMessage>

			<LoginButton
				variant='contained'
				onClick={loginHandler}
			>Войти
			</LoginButton>




		</Form>
	);
});

export default AuthModalContent;