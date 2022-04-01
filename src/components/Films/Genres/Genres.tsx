import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../CategotyTitle/CategoryTitle';
import ContentRow from '../ContentRow/ContentRow';
import * as palette from '../../../Colors';

const Container = styled.section`
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 992px){
			align-items: center;
	};
`;

type GenreBoxType = {
	background: string,
}
const GenreBox = styled.div<GenreBoxType>`
	width: 280px;
	height: 208px;
	padding: 80px 0px 24px;
	gap: 32px;
	/* position: relative; */
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${props => props.background};
	box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 6px;
	opacity: 0.8;
	&:hover{
		opacity: 1;
		cursor: pointer;
	}
`;

const GenreEmoji = styled.p`
	/* position: absolute; */
	/* top: 50%;
	left: 50%; */
	font-weight: 400;
	font-size: 40px;
`;
const GenreName = styled.h3`
 	font-weight: 400;
	font-size: 20px;
	color: ${palette.white};
`;

const Genres = () => {

	const genres = [
		{
			name: 'Комедии',
			icon: '😁',
			background: 'linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)',
		},
		{
			name: 'Драма',
			icon: '😭',
			background: 'linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)',
		},
		{
			name: 'Фантастика',
			icon: '👽',
			background: 'linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)',
		},
		{
			name: 'Ужасы',
			icon: '👻',
			background: 'linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)',
		}
	];

	return (
		<Container>
			<CategoryTitle>
				Жанры
			</CategoryTitle>
			<ContentRow>
				<>
					{genres.map(genre =>
						<GenreBox
							background={genre.background}
							key={genre.name}
						>
							<GenreEmoji>{genre.icon}</GenreEmoji>
							<GenreName>{genre.name}</GenreName>
						</GenreBox>
					)}
				</>
			</ContentRow>
		</Container>
	);
};

export default Genres;