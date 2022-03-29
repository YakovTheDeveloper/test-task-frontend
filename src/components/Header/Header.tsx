import React from 'react';
import styled from 'styled-components';
import Search from './Search/Search';
import LoginButton from '../common/Button/LoginButton/LoginButton';
import VideoServiceLogo from '../Logos/VideoService/VideoServiceLogo';
import Category from './CategoryTabs/CategoryTabs';

const Header = () => {

	const Container = styled.div`
		width: 100%;
		padding-bottom: 4px;
		margin: 32px 0px 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	`;

	return (
		<Container>
			<VideoServiceLogo />
			<Search />
			<LoginButton/>
		</Container>
	);
};

export default Header;
