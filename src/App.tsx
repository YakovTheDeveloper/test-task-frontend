import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CategoryTabs from './components/Header/CategoryTabs/CategoryTabs';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<CategoryTabs />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
