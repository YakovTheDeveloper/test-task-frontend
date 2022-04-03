import React, { FC, useState } from 'react';
import { Styled } from './FilmItemImage.styles';

type Props = {
	imageUrl: string
	text: string
}
const FilmItemImage: FC<Props> = ({
	imageUrl = '',
	text = 'There should be the information about the film'
}) => {
	const { Overlay, ImageContainer } = Styled;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<ImageContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={imageUrl ? imageUrl : 'assets/images/movieCards/catImage.jpg'} alt='film' />

			<Overlay isHovered={isHovered}>
				{text}
			</Overlay>
		</ImageContainer>
	);
};

export default FilmItemImage;