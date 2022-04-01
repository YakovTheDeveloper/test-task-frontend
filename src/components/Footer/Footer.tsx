import React from 'react';
import { Styled } from './Footer.styles';
import Text from '../common/Text/Text';

const {
	Container,
	Information,
	Inner,
	WebsiteLink } = Styled;

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