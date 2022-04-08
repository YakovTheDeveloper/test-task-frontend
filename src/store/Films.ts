import { makeAutoObservable, autorun } from 'mobx';
import { FilmType } from '../core/models/films';
import { fetchFilms } from '../core/films/fetchFilms';

class Films {
	content: FilmType[] | null = null;
	errorMessage = '';
	error = {
		status: false,
		message: ''
	};
	loading = false;

	constructor() {
		makeAutoObservable(this);
		autorun(() => {
			if (!this.content) this.getFilms();
		});
	}

	getFilms = async () => {
		this.clearError();
		this.loading = true;
		try {
			const films = await fetchFilms();
			if (films instanceof Error) throw films;
			this.content = films;
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


export default new Films();