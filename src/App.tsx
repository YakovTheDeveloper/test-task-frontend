import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Films';
import CategoryTabs from './components/Header/CategoryTabs/CategoryTabs';
import Footer from './components/Footer/Footer';
import Layout from './Layout';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Layout/>

			{/* <Header />
			<CategoryTabs />

			<Footer /> */}
		</div>
	);
}

export default App;
