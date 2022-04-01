import styled from 'styled-components';
import * as palette from '../../Colors';

const Container = styled.footer`
	width: 100%;
	background: ${palette.gray6};
`;
const Inner = styled.div`
	margin: 0 auto;
	max-width: 1180px;
	padding: 22px 0px 25px;
	row-gap: 10px;
	column-gap: 40px;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	background: ${palette.gray6};
	font-weight: 400;
	color: ${palette.gray1};
	@media (max-width: 992px){
			align-items: center;
			justify-content: center;
	};
`;
const WebsiteLink = styled.a`
	width: fit-content;
	margin-top: 4px;
	font-weight: 500;
	color: ${palette.htcColor};
`;

const Information = styled.p`
	gap: 6px;
	display: flex;
	flex-direction: column;
	@media (max-width: 992px){
		max-width: 500px;
	};
`;

export const Styled = {
	Container,
	Inner,
	WebsiteLink,
	Information,
};