import React, { FC } from 'react';
import styled from 'styled-components';
import MovieItemImage from './Image/MovieItemImage';
import * as palette from '../../../Colors';

type Props = {
	title: string
	imageUrl: string
	text: string
}

const MovieItem: FC<Props> = ({
	title = 'New film',
	imageUrl = '',
	text = 'There should be the information about the film'

}) => {
	const Container = styled.div`
		width: 280px;
		height: 434px;
		gap: 16px;
		display: flex;
		flex-direction: column;
	`;
	const Text = styled.p`
		font-size: 20px;
		font-weight: 400;
		color: ${palette.gray1};
	`;
	
	return (
		<Container>
			<MovieItemImage imageUrl={imageUrl} text={text} />
			<Text>
				{title}
			</Text>
		</Container>
	);
};

export default MovieItem;