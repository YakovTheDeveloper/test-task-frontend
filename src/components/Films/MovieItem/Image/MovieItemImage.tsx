import React, { FC, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../../../Colors';

const ImageContainer = styled.div`
	position: relative;
	width: 280px;
	height: 370px;
`;

type CardOverlayType = {
	isHovered: boolean
}
const CardOverlay = styled.div<CardOverlayType>`
	width: 100%;
	height: 100%;
	padding: 16px;
	display:${props => props.isHovered ? 'block' : 'none'};
	position: absolute;
	top: 0;
	left: 0;
	background: ${palette.gray1};
	opacity: 0.8;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 400;
	color: ${palette.gray6};
	:hover {
		cursor: pointer;
	}
	
`;

type Props = {
	imageUrl: string
	text: string
}

const MovieItemImage: FC<Props> = ({
	imageUrl = '',
	text = 'There should be the information about the film'
}) => {

	const [isHovered, setIsHovered] = useState(false);





	return (
		<ImageContainer

			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={imageUrl ? imageUrl : 'assets/images/movieCards/catImage.jpg'} alt='film picture' />

			{/* {isHovered && <CardOverlay isHovered={isHovered}>
				{text}
			</CardOverlay>} */}

			<CardOverlay isHovered={isHovered}>
				{text}
			</CardOverlay>
		</ImageContainer>
	);
};

export default MovieItemImage;