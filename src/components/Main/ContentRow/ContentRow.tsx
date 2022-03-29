import React, { FC } from 'react';
import styled from 'styled-components';

const Row = styled.div`
	width: 100%;
	column-gap: 20px;
	row-gap: 50px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
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