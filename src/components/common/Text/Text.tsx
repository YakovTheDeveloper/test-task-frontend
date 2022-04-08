import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';

type Props = {
	children: React.ReactChild
}
const TextContent = styled.footer`
		font-weight: 400;
		color: ${palette.gray1}
	`;
const Text: FC<Props> = ({ children }) => {
	return (
		<>
			<TextContent>
				{children}
			</TextContent>
		</>
	);
};

export default Text;

