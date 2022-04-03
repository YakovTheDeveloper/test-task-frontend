import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Flex from '../../common/Flex/Flex';
import Text from '../../common/Text/Text';
import Program from './Program/Program';
import * as palette from '../../../Colors';




const StyledFlex = styled(Flex)`
	flex-direction: row;
	flex-wrap: nowrap;
	row-gap: 20px;
	background: ${palette.gray6};
	border-radius: 8px;
	@media (max-width: 992px){
		/* flex-direction: column; */
		align-items: center;
		flex-wrap: nowrap;
	};
	@media (max-width: 440px){
		flex-direction: column;
	};
`;
const ProgramContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 992px){
		width: 500px;
	};
	@media (max-width: 440px){
		width: 100%;
	};
	/* display: flex;
	flex-direction: column; */
`;

const LogoContainer = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 992px){
		width: 200px;
	};
`;

const Title = styled.h4`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	margin-bottom: 17px;
	@media (max-width: 440px){
		align-self: center;
	};
`;

export type ProgramItemType = {
	time: string
	name: string
}
type Props = {
	logoUrl: string
	title: string
	programList: ProgramItemType[]
}
const ChannelItem: FC<Props> = ({ logoUrl, title, programList }) => {
	return (
		<StyledFlex
			align='center'
			padding='21px 0px 19px'
			wrap='wrap'>
			<LogoContainer>
				<img src={logoUrl} alt="channel" />
			</LogoContainer>
			<ProgramContainer>
				<Title>{title}</Title>
				<Program programList={programList} />
			</ProgramContainer>
		</StyledFlex>
	);
};

export default ChannelItem;