import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import FilmsRoute from './routes/Films';
import ChannelsRoute from './routes/Channels';
import Layout from './Layout';
import RoutesAll from './routes/RoutesAll';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<RoutesAll />
	</React.StrictMode>,
	document.getElementById('root')
);

