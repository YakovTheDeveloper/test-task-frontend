import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';

type Props = {
	children: React.ReactChild
}
const Text = styled.h3`
	width: 100%;
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	color: ${palette.gray1};
	@media (max-width: 992px){
		text-align: center;
		margin-bottom: 24px;
	};
`;
const CategoryTitle: FC<Props> = ({ children }) => {
	return (
		<Text>
			{children}
		</Text>
	);
};

export default CategoryTitle;