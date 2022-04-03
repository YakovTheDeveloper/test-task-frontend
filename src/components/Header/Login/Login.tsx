import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
import User from '../../../store/User';
import { Styled } from './Login.styles';
import { getFirstLetterAndAppendDot } from '../../../helpers/getFirstLetterAndAppendDot';
import AuthModalContent from '../../Modal/Auth/AuthModalContent';
import Modal from '../../Modal/Modal';
import ChangeNameForm from '../ChangeNameForm/ChangeNameForm';

const Login = observer(() => {
	const { Container, Name, LoginButton } = Styled;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showChangeNameForm, setShowChangeNameForm] = useState(false);

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		if (!User.currentUser) setIsModalOpen(true);
		else User.logout();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const changeNameHandler = (e: React.MouseEvent) => {
		setShowChangeNameForm(true);
	};

	const loginButtonText = User.currentUser ? 'Выйти' : 'Войти';
	const buttonVariant = User.currentUser ? 'text' : 'contained';
	const showNameConditional = Boolean(!showChangeNameForm && User.currentUser);

	return (
		<>
			<Container>
				<Name
					show={showNameConditional}
					onClick={changeNameHandler}
				>

					{User.currentUser && User.currentUser.firstName} { }
					{User.currentUser && getFirstLetterAndAppendDot(User.currentUser.lastName)}
				</Name>
				<ChangeNameForm
					show={showChangeNameForm}
					closeForm={() => setShowChangeNameForm(false)}
				/>

				<LoginButton
					variant={buttonVariant}
					onClick={clickHandler}
				>{loginButtonText}
				</LoginButton>
			</Container>

			{isModalOpen &&
				<Modal closeModal={closeModal}>
					<AuthModalContent closeModal={closeModal} />
				</Modal>
			}
		</>
	);
});

export default Login;


