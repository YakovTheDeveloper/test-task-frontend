import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../common/Flex/Flex';
import * as palette from '../../Colors';
import { database } from '../../mockDatabase';
import ChannelItem from './ChannelItem/ChannelItem';

const Container = styled.div`
	gap: 16px;
	margin-bottom: 72px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	font-weight: 400;
`;

const Channels = () => {

	type ActiveStatus = { isActive: boolean }
	const linkStyle = (linkProps: ActiveStatus) => ({
		paddingBottom: '8px',
		color: linkProps.isActive ? palette.red : palette.gray1,
		borderBottom: linkProps.isActive ? `2px solid ${palette.red}` : 'none'
	});

	return (
		<Container>
			{database.channels.map(channel =>
				<ChannelItem
					logoUrl={channel.img}
					programList={channel.program}
					title={channel.name}
					key={channel.name}
				/>
			)}
		</Container >
	);
};

export default Channels;