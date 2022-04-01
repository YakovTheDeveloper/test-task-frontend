import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useAuth } from '../../../hooks/auth/useAuth';
import { observer } from 'mobx-react-lite';
import User from '../../../store/User';

const Title = styled.h3`
	text-align: center;
	font-weight: 500;
	font-size: 28px;
	line-height: 33px;
`;

const AuthMessage = styled.p`

`;

const AuthModalContent = observer(() => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const onLoginChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setLogin(target.value);
	};
	const onPasswordChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setPassword(target.value);
	};

	const loginHandler = (e: React.MouseEvent) => {
		if (login === '' || password === '') {
			User.statusMessage = 'Заполните поле ввода';
			return;
		}
		User.login(login, password);
		// validateUser(login, password);
		e.preventDefault();
	};

	useEffect(() => {
		User.statusMessage = '';
	}, []);



	return (
		<>
			<Title>
				Вход
			</Title>

			<Input
				placeholder='Логин'
				onChange={onLoginChange}
				value={login}
			/>
			<Input
				placeholder='Пароль'
				onChange={onPasswordChange}
				value={password}
			/>

			<Button
				variant='contained'
				onClick={loginHandler}
			>Войти
			</Button>

			<AuthMessage>
				{User.statusMessage}
			</AuthMessage>
		</>
	);
});

export default AuthModalContent;