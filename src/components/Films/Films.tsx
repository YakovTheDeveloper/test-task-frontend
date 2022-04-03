import React from 'react';
import styled from 'styled-components';
import Genres from './Genres/Genres';
import NewFilms from './SpecificCategoryContent/NewFilms/NewFilms';

const Container = styled.div`
	margin-bottom: 72px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Films = () => {
	return (
		<Container>
			<NewFilms />
			<Genres />
		</Container>
	);
};

export default Films;