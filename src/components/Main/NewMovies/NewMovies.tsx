import React from 'react';
import styled from 'styled-components';
import MovieItem from '../MovieItem/MovieItem';
import CategoryTitle from '../CategotyTitle/CategoryTitle';
import ContentRow from '../ContentRow/ContentRow';
import * as palette from '../../../Colors';

const NewMovies = () => {

	const Container = styled.div`
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;
	// const MoviesRow = styled.div`
	// 	row-gap: 50px;
	// 	display: flex;
	// 	justify-content: space-between;
	// 	flex-wrap: wrap;
	// `;

	const films = ['Мульт в кино. Выпуск №103. Некогда грустить!', 'Новый Бэтмен', 'Однажды... в Голливуде', 'Стриптизёрши'];

	return (
		<Container>
			<CategoryTitle>
				🔥 Новинки
			</CategoryTitle>
			<ContentRow>
				<>
					{films.map(item =>
						<MovieItem
							title={item}
							imageUrl={''}
							text={item}
							key={item}
						/>
					)}
				</>
			</ContentRow>
		</Container>
	);
};

export default NewMovies;