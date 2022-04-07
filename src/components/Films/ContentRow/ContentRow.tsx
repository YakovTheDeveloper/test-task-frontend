import React, { FC } from 'react';
import styled from 'styled-components';

const Row = styled.div`
	column-gap: 20px;
	row-gap: 50px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 992px){
		justify-content: space-evenly;
	};
	`;

type Props = {
	children: React.ReactChild
}
const ContentRow: FC<Props> = ({ children }) => {

	return (
		<Row>
			{children}
		</Row>
	);
};

export default ContentRow;