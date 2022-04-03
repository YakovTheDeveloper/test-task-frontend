import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';

type Props = {
	children: React.ReactChild
}
const Text: FC<Props> = ({ children }) => {
	const TextContent = styled.footer`
		font-weight: 400;
		color: ${palette.gray1}
	`;
	return (
		<>
			<TextContent>
				{children}
			</TextContent>
		</>
	);
};

export default Text;

