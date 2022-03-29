import React, { FC } from 'react';
import styled from 'styled-components';
import * as palette from '../../../../Colors';

type Props = {
	children: React.ReactChild
}

const TabName: FC<Props> = ({ children }) => {

	const Text = styled.a`
		font-weight: 500;
		font-size: 28px;
		line-height: 33px;
		color: ${isActive => isActive ? palette.red : palette.gray1}
	`;

	return (
		<Text>
			{children}
		</Text>
	);
};

export default TabName;