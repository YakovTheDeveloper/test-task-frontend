import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text/Text';
import * as palette from '../../Colors';

const Container = styled.footer`
	width: 100%;
	background: ${palette.gray6};
`;
const Inner = styled.div`
	margin: 0 auto;
	width: 1180px;
	padding: 22px 0px 25px;
	gap: 40px;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	background: ${palette.gray6};
	font-weight: 400;
	color: ${palette.gray1};
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
`;

// const BackgroundAllPageWidth = styled.div`
// 	position: absolute;
// 	width: 100vw;
// 	height: 120px;
// 	background: ${palette.gray6};
// 	z-index: -2;
// 	position: absolute;
//     bottom: 0;
// 	left: 0;
	
// `;

// refactor img
const Footer = () => {
	return (
		<Container>
			<Inner>
				<img src="/assets/images/logotypes/htc-cs-logo.png" alt="" width='32' height='64' />
				<Information>
					<Text>
						426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
					</Text>
					<Text>
						+7 (3412) 93-88-61, 43-29-29
					</Text>
					<WebsiteLink href='https://htc-cs.ru/' target='_blank'>
						htc-cs.ru
					</WebsiteLink>
				</Information>
			</Inner>
			{/* <BackgroundAllPageWidth/> */}
		</Container>


	);
};

export default Footer;