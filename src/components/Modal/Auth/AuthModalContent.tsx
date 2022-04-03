import React, { FC, useEffect, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { observer } from 'mobx-react-lite';
import User from '../../../store/User';
import Checkbox from '../../common/Checkbox/Checkbox';
import Flex from '../../common/Flex/Flex';
import { useLoginData } from './useLoginData';
import { Styled } from './AuthModalContent.styles';

type Props = {
	closeModal: () => void
}
const AuthModalContent: FC<Props> = observer(({ closeModal }) => {
	const {
		AuthMessage,
		Form,
		LoginButton,
		LoginInput,
		PasswordInput,
		Remember,
		Title
	} = Styled;

	const {
		login,
		onLoginChange,
		password,
		onPasswordChange,
		rememberUserSelect,
		setRememberUserSelect
	} = useLoginData();

	useEffect(() => {
		User.remember = rememberUserSelect;
	}, [rememberUserSelect]);


	const loginHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
		if (login === '' || password === '') {
			User.statusMessage = 'Заполните поле ввода';
			return;
		}
		e.preventDefault();
		User.login(login, password);
	};
	const loginOnEnter = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			loginHandler(e);
		}
	};

	useEffect(() => {
		User.statusMessage = '';
	}, []);

	useEffect(() => {
		if (User.currentUser) closeModal();
	}, [User.currentUser]);



	return (
		<Form onKeyDown={loginOnEnter}>
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
						onChange={() => setRememberUserSelect(prev => !prev)}
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