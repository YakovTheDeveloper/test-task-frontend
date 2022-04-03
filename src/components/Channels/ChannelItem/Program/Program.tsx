import React, { FC, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../../../Colors';
import { ProgramItemType } from '../ChannelItem';

const Container = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const ProgramItem = styled.li`
	gap: 21px;
	display: flex;
	line-height: 19px;
	&:first-child{
		color:${palette.red};
	}
	@media (max-width: 440px){
		gap: 8px;
	};
`;

const Time = styled.span``;
const ProgramName = styled.span``;

type Props = {
	programList: ProgramItemType[]
}
const Program: FC<Props> = ({ programList }) => {
	return (
		<Container>
			{programList.map(program =>
				<ProgramItem key={program.name}>
					<Time>{program.time}</Time> 
					<ProgramName>{program.name}</ProgramName>
				</ProgramItem>
			)}
		</Container>
	);
};

export default Program;