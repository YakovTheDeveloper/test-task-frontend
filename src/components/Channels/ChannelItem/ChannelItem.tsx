import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Flex from '../../common/Flex/Flex';
import Text from '../../common/Text/Text';
import * as palette from '../../../Colors';

const LogoContainer = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Time = styled.p`
	margin-right: 16px;
`;

const Title = styled.h4`
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 17px;
`;

const Program = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const ProgramItem = styled.li`
	display: flex;
`;

type ProgramItem = {
	time: string
	name: string
}
type Props = {
	logoUrl: string
	title: string
	programList: ProgramItem[]
}
const ChannelItem: FC<Props> = ({ logoUrl, title, programList }) => {
	return (
		<Flex align='center' padding='21px 0px 19px' wrap='wrap'>
			<LogoContainer>
				<img src={logoUrl} alt="channel picture" />
			</LogoContainer>
			<Flex align='start' direction='column'>
				<Title>{title}</Title>
				<Program>
					{programList.map(program =>
						<ProgramItem key={program.name}>
							<Time>{program.time}</Time>
							<Text>{program.name}</Text>
						</ProgramItem>
					)}
				</Program>
			</Flex>
		</Flex>
	);
};

export default ChannelItem;