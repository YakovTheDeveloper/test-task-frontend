import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
import User from '../../../store/User';
import { getFirstLetterAndAppendDot } from '../../../helpers/getFirstLetterAndAppendDot';
import AuthModalContent from '../../Modal/Auth/AuthModalContent';
import Modal from '../../Modal/Modal';
import ChangeNameForm from '../ChangeNameForm/ChangeNameForm';

const Container = styled.div`
	gap: 16px;
	display: flex;
	justify-content: end;
	align-items: center;
	position: relative;
	/* min-width: 220px; */
	@media (max-width: 440px){
		grid-area: 2 / 1 / 3 / 2;
	};
`;

type Visible = {
	show: boolean
}
const Name = styled.p<Visible>`
	display: ${({ show }) => show ? 'flex' : 'none'};
	white-space: nowrap;
	&:hover {
		cursor: pointer;
	}
`;

const Login = observer(() => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showChangeNameForm, setShowChangeNameForm] = useState(false);

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		if (User.currentUser) User.logout();
		else {
			setIsModalOpen(true);
		}
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

				<Button
					variant={buttonVariant}
					onClick={clickHandler}
				>{loginButtonText}</Button>
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


