import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import FilmsRoute from './routes/films';
import ChannelsRoute from './routes/channels';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FilmsRoute />} />
				<Route path="films" element={<FilmsRoute />} />
				<Route path="channels" element={<ChannelsRoute />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

