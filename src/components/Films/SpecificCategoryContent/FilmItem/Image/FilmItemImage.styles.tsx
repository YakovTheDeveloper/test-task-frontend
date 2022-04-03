import styled from 'styled-components';
import * as palette from '../../../../../Colors';

const ImageContainer = styled.div`
	width: 280px;
	height: 370px;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
`;

type OverlayType = {
	isHovered: boolean
}
const Overlay = styled.div<OverlayType>`
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
export const Styled = {
	ImageContainer,
	Overlay
};