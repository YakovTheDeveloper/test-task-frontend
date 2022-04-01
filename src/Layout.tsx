import React, { FC } from 'react';
import Footer from './components/Footer/Footer';
import CategoryTabs from './components/Header/CategoryTabs/CategoryTabs';
import Header from './components/Header/Header';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1180px;
	margin: 0 auto;
`;
const ElementToInsertModal = styled.div``;

const Layout = () => {
	return (
		<>

			<Container>
				<Header />
				<CategoryTabs />
				<Main />

				<ElementToInsertModal id='app-modal' />
			</Container>
			<Footer />
		</>
	);
};

const Main = () => {
	return (
		<SimpleBar style={{ maxHeight: '762px' }}>
			<Outlet />
		</SimpleBar>
	);
};

export default Layout;
