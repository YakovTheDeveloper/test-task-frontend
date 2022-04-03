import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search/Search';
import VideoServiceLogo from '../Logos/VideoService/VideoServiceLogo';
import { observer } from 'mobx-react-lite';
import Login from './Login/Login';

const Container = styled.header`
	width: 100%;
	height: 40px;
	padding-bottom: 4px;
	margin: 32px 0px 44px;

	display: grid; 
	grid-template-columns: 1fr 1fr 1fr; 
	grid-template-rows: 1fr; 

	@media (max-width: 992px){
		height: auto;
		gap: 15px 0px;
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr 1fr; 
	};
	@media (max-width: 440px){
			gap: 15px 0px;
			grid-template-columns: 1fr; 
			grid-template-rows: 1fr 1fr 1fr; 
			align-items: center;
	};
`;

const Header = observer(() => {
	return (
		<Container>
			<VideoServiceLogo />
			<Search />
			<Login />
		</Container>
	);
});

//refactor need footer whole width

export default Header;


