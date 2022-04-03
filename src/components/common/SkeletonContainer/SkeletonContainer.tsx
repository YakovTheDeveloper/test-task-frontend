import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import { FilmType } from '../../../core/models/films';

type DisplayType = {
	$content: boolean
}
const Container = styled.div<DisplayType>`
	height: 434px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 27px;
	display: ${({ $content }) => $content ? 'none' : 'flex'};
	background: ${palette.gray6};
	@media (max-width: 992px){
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
		};
`;
type Props = {
	content: boolean
	children: React.ReactChild
}
const SkeletonContainer: FC<Props> = ({ children, content }) => {
	return (
		<Container $content={content}>
			{children}
		</Container>
	);
};

export default SkeletonContainer;