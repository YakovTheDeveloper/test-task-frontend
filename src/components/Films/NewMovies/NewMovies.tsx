import React from 'react';
import styled from 'styled-components';
import MovieItem from '../MovieItem/MovieItem';
import CategoryTitle from '../CategotyTitle/CategoryTitle';
import ContentRow from '../ContentRow/ContentRow';
import { useFetchMovies } from './fetchMovies';
import * as palette from '../../../Colors';
import { FilmItem } from './fetchMovies';

const Container = styled.section`
		width: 100%;
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
		@media (max-width: 992px){
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
		};
	`;


type DisplayType = {
	movies: FilmItem[] | null
}
const Skeleton = styled.div<DisplayType>`
	/* width: 1200px; */
	height: 434px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 27px;
	display: ${({ movies }) => movies ? 'none' : 'flex'};
	background: ${palette.gray6};
	@media (max-width: 992px){
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
		};
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