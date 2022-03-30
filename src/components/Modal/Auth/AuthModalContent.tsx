import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useAuth } from '../../../hooks/auth/useAuth';

type Props = {
	children?: React.ReactChild
	isOpen?: () => void
	closeModal?: (e: React.MouseEvent) => void
}
const Title = styled.h3`
	text-align: center;
	font-weight: 500;
	font-size: 28px;
	line-height: 33px;
`;


const AuthModal: FC<Props> = ({ children, isOpen, closeModal }) => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const { message, setMessage, validateUser } = useAuth();

	const onLoginChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setLogin(target.value);
	};
	const onPasswordChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setPassword(target.value);
	};

	const clickHandler = (e: React.MouseEvent) => {
		if (login === '' || password === '') {
			setMessage('Заполните поле ввода');
			return;
		}
		validateUser(login, password);
		e.preventDefault();
	};


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
				onClick={clickHandler}
			>Войти
			</Button>

			<div>
				{message}
			</div>
		</>
	);
};

export default AuthModal;