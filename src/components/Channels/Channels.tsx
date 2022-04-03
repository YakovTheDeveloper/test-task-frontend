import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import ChannelItem from './ChannelItem/ChannelItem';
import channels from '../../store/Channels';
import FetchError from '../common/Error/FetchError';
import SkeletonContainer from '../common/SkeletonContainer/SkeletonContainer';

const Container = styled.div`
	margin-top: -5px;
	gap: 16px;
	margin-bottom: 72px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	font-weight: 400;
`;

const Channels = observer(() => {
	return (
		<Container>
			<SkeletonContainer content={!!channels.content}>
				<FetchError
					doesErrorOccur={channels.error.status}
					errorMessage={channels.error.message}
					onClickReload={() => channels.getChannels()}
				/>
			</SkeletonContainer>
			
			{channels.content?.map(channel =>
				<ChannelItem
					logoUrl={channel.img}
					programList={channel.program}
					title={channel.name}
					key={channel.name}
				/>
			)}
		</Container >
	);
});

export default Channels;