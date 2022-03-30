import React, { FC } from 'react';
import Footer from './components/Footer/Footer';
import CategoryTabs from './components/Header/CategoryTabs/CategoryTabs';
import Header from './components/Header/Header';

type Props = {
	children?: React.ReactChild
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<div id="app-modal" />
			<Header />
			<CategoryTabs />
			{children}
			<Footer />
		</>
	);
};

export default Layout;