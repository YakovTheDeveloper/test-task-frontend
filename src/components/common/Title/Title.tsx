import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';

type Props = {
	titleText: string
}

const Title: FC<Props> = ({ titleText = "New film" }) => {


	const Title = styled.h3`
		font-size: 20px;
		font-weight: 400;
		color: ${palette.gray1};
	`;

	return (
		<Title>
			{titleText}
		</Title>
	);
};

export default Title;