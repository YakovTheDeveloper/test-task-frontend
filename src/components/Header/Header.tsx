import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search/Search';
import LoginButton from '../common/Button/LoginButton/LoginButton';
import Button from '../common/Button/Button';
import VideoServiceLogo from '../Logos/VideoService/VideoServiceLogo';
import Category from './CategoryTabs/CategoryTabs';
import Modal from '../Modal/Modal';
import AuthModalContent from '../Modal/Auth/AuthModalContent';
import { getFirstLetterWithDot } from '../../helpers/getFirstLetterWithDot';


const Container = styled.div`
	width: 100%;
	column-gap: 20px;
	row-gap: 35px;
	padding-bottom: 4px;
	margin: 32px 0px 44px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Login = styled.div`
	gap: 16px;
	min-width: 220px;
	display: flex;
	align-items: center;
	justify-content: end;
`;
const Name = styled.p`
	white-space: nowrap;
`;

type User = {
	firstName: string,
	lastName: string,
} | null

const Header = () => {



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

		!isAuthorized
			? setIsModalOpen(true)
			: logout();
	};

	const closeModal = (e: React.MouseEvent) => {
		setIsModalOpen(false);
	};



	useEffect(() => {
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


	const loginButtonText = isAuthorized ? 'Выйти' : 'Войти';
	const buttonVariant = isAuthorized ? 'text' : 'contained';

	// const firstNameLastName = userInfo &&
	// 	`${userInfo.firstName} ${getFirstLetterWithDot(userInfo.lastName)}`;

	return (
		<Container>
			<VideoServiceLogo />
			<Search />

			<Login>
				{userInfo &&
					<Name>
						{userInfo.firstName} {userInfo.lastName}
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
};

//refactor need footer whole width

export default Header;
