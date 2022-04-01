import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search/Search';
import LoginButton from '../common/Button/LoginButton/LoginButton';
import Button from '../common/Button/Button';
import VideoServiceLogo from '../Logos/VideoService/VideoServiceLogo';
import Category from './CategoryTabs/CategoryTabs';
import Modal from '../Modal/Modal';
import AuthModalContent from '../Modal/Auth/AuthModalContent';
import User from '../../store/User';
import { observer } from 'mobx-react-lite';
import { getFirstLetterWithDot } from '../../helpers/getFirstLetterWithDot';


const Container = styled.header`
	width: 100%;
	/* column-gap: 20px;
	row-gap: 35px; */
	padding-bottom: 4px;
	margin: 32px 0px 44px;

	display: grid; 
	grid-template-columns: 1fr 1fr 1fr; 
	grid-template-rows: 1fr; 

	@media (max-width: 992px){
		gap: 15px 0px;
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr 1fr; 
		/* flex-direction: column; */
	};
	@media (max-width: 440px){
			grid-auto-flow: column;
			gap: 15px 0px;
			grid-template-columns: 1fr; 
			grid-template-rows: 1fr 1fr 1fr; 

			/* align-items: center; */
	};
`;
const Login = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 16px;
	/* min-width: 220px; */
	@media (max-width: 440px){
		grid-area: 2 / 1 / 3 / 2;
	};
`;

const Name = styled.p`
	white-space: nowrap;
`;

type User = {
	firstName: string,
	lastName: string,
} | null

const Header = observer(() => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [userInfo, setUserInfo] = useState<User>({
		firstName: '',
		lastName: '',
	});

	const logout = () => {
		localStorage.removeItem('credentials');
		setIsAuthorized(false);
		setUserInfo(null);
	};

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		if (User.currentUser) User.logout();
		else {
			setIsModalOpen(true);
			// User.statusMessage = '';
		}
	};

	const closeModal = (e: React.MouseEvent) => {
		setIsModalOpen(false);
	};



	useEffect(() => {
		console.log(User);
		const credentials = localStorage.getItem('credentials');
		if (credentials) {
			const parsed = JSON.parse(credentials || '');

			setIsAuthorized(true);
			setUserInfo({
				firstName: parsed.firstName,
				lastName: getFirstLetterWithDot(parsed.lastName),
			});
		}
		// else setUserInfo(null)
	}, [isModalOpen]);


	const loginButtonText = User.currentUser ? 'Выйти' : 'Войти';
	const buttonVariant = User.currentUser ? 'text' : 'contained';

	// const firstNameLastName = userInfo &&
	// 	`${userInfo.firstName} ${getFirstLetterWithDot(userInfo.lastName)}`;

	return (
		<Container>
			<VideoServiceLogo />
			<Search />

			<Login>
				{User.currentUser &&
					<Name>
						{User.currentUser.firstName} {User.currentUser.lastName}
					</Name>
				}
				<Button
					variant={buttonVariant}
					onClick={clickHandler}
				>{loginButtonText}</Button>
			</Login>

			{isModalOpen &&
				<Modal closeModal={closeModal}>
					<AuthModalContent />
				</Modal>
			}
		</Container>
	);
});

//refactor need footer whole width

export default Header;


