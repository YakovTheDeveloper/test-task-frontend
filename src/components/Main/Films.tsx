import React from 'react';
import styled from 'styled-components';
import NewMovies from './NewMovies/NewMovies';
import Genres from './Genres/Genres';

const Films = () => {

	const Container = styled.div`
		gap: 20px;
		margin-bottom: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
`;


	return (
		<Container>
			<NewMovies />
			<Genres />
		</Container>

	);
};

export default Films;