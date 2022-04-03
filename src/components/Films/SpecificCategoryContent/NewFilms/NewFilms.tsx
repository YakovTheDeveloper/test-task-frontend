import React from 'react';
import FilmItem from '../FilmItem/FilmItem';
import CategoryTitle from '../../CategotyTitle/CategoryTitle';
import ContentRow from '../../ContentRow/ContentRow';
import { observer } from 'mobx-react-lite';
import Films from '../../../../store/Films';
import { Styled } from './NewFilms.styles';
import FetchError from '../../../common/Error/FetchError';
import SkeletonContainer from '../../../common/SkeletonContainer/SkeletonContainer';

const NewFilms = observer(() => {
	const { FilmsContainer } = Styled;
	const FilmList = (
		<>
			{Films.content?.map(movie =>
				<FilmItem
					title={movie.name}
					imageUrl={movie.img}
					text={movie.description}
					key={movie.name}
				/>
			)};
		</>
	);
	return (
		<FilmsContainer>
			<CategoryTitle>
				🔥Новинки
			</CategoryTitle>
			<SkeletonContainer content={!!Films.content}>
				<FetchError
					doesErrorOccur={Films.error.status === true}
					errorMessage={Films.error.message}
					onClickReload={() => Films.getFilms()}
				/>
			</SkeletonContainer>
			<ContentRow>
				{FilmList}
			</ContentRow>
		</FilmsContainer>
	);
});

export default NewFilms;