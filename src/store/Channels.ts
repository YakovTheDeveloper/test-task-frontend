import { makeAutoObservable, autorun } from 'mobx';
import { ChannelType } from '../core/models/channels';
import { fetchChannels } from '../core/channels/fetchChannels';

class Channels {

	content: ChannelType[] | null = null;
	errorMessage = '';
	error = {
		status: false,
		message: ''
	};
	loading = false;

	constructor() {
		makeAutoObservable(this);
		autorun(() => {
			if (!this.content) this.getChannels();
		});
	}

	getChannels = async () => {
		this.clearError();
		this.loading = true;
		try {
			const channels = await fetchChannels();
			if (channels instanceof Error) throw channels;
			this.content = channels;
		}
		catch (error: any) {
			if (error instanceof Error)
				this.setError(true, error.message || 'Connection problems');
		}
		finally {
			this.loading = false;
		}

	};

	setError = (status: boolean, message: string) =>
		this.error = { status, message };

	clearError = () => this.error = { status: false, message: '' };
}

const channels = new Channels();
export default channels;
// export default new Channels();