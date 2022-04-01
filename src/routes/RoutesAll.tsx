import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import ChannelsRoute from './Channels';
import FilmsRoute from './Films';



const RoutesAll = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='films' element={<FilmsRoute />} />
					<Route path='channels' element={<ChannelsRoute />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesAll;