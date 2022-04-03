import { ChannelType } from '../models/channels';
import { fakeDelay } from '../../helpers/fakeDelay';
import { manageErrors } from '../../helpers/fetch/manageErrors';

export const fetchChannels = async (): Promise<ChannelType[] | Error> => {
	return fetch('http://localhost:3001/channels')
		.then(async (res) => {
			await fakeDelay(1000);
			manageErrors(res);
			return res;
		})
		.then(res => res.json())
		.then(async (channels: ChannelType[]) => {
			return channels;
		})
		.catch(error => {
			return error;
		});
};

