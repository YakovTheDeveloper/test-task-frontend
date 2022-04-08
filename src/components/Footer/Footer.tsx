import React from 'react';
import { Styled } from './Footer.styles';
import Text from '../common/Text/Text';

const {
	Container,
	Information,
	Inner,
	WebsiteLink,
	Logo } = Styled;

const Footer = () => {
	return (
		<Container>
			<Inner>
				<Logo
					src="/assets/images/logotypes/htc-cs-logo.png"
					alt="logo"
					width='32px'
					height='64px' />
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
		</Container>


	);
};

export default Footer;