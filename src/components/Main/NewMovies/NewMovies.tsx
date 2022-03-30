import React from 'react';
import styled from 'styled-components';
import MovieItem from '../MovieItem/MovieItem';
import CategoryTitle from '../CategotyTitle/CategoryTitle';
import ContentRow from '../ContentRow/ContentRow';
import { useFetchMovies } from './fetchMovies';
import * as palette from '../../../Colors';
import { FilmItem } from './fetchMovies';

const Container = styled.section`
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
	`;


type DisplayType = {
	movies: FilmItem[] | null
}
const Skeleton = styled.div<DisplayType>`
	width: 1200px;
	height: 434px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 27px;
	display: ${({ movies }) => movies ? 'none' : 'flex'};
	background: ${palette.gray6};
`;

const NewMovies = () => {

	const { movies } = useFetchMovies();


	return (
		<Container>
			<CategoryTitle>
				🔥 Новинки
			</CategoryTitle>
			<Skeleton movies={movies}>
				<span>Loading...</span>
			</Skeleton>
			<ContentRow>
				<>
					{movies?.map(movie =>
						<MovieItem
							title={movie.name}
							imageUrl={movie.img}
							text={movie.description}
							key={movie.name}
						/>
					)}
				</>
			</ContentRow>
		</Container>
	);
};

export default NewMovies;