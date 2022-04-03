import React, { FC } from 'react';
import styled from 'styled-components';
import FilmItemImage from './Image/FilmItemImage';
import * as palette from '../../../../Colors';

type Props = {
	title: string
	imageUrl: string
	text: string
}

const FilmItem: FC<Props> = ({ title, imageUrl, text }) => {
	const Container = styled.div`
		width: 280px;
		height: 434px;
		gap: 16px;
		display: flex;
		flex-direction: column;
	`;
	const Title = styled.h4`
		font-size: 20px;
		font-weight: 400;
		color: ${palette.gray1};
	`;

	return (
		<Container>
			<FilmItemImage imageUrl={imageUrl} text={text} />
			<Title>
				{title}
			</Title>
		</Container>
	);
};

export default FilmItem;