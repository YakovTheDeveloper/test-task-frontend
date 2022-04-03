import { FilmType } from '../models/films';
import { fakeDelay } from '../../helpers/fakeDelay';
import { manageErrors } from '../../helpers/fetch/manageErrors';

export const fetchFilms = async (): Promise<FilmType[] | Error> => {
	return fetch('http://localhost:3001/films')
		.then(async (res) => {
			await fakeDelay(1000);
			manageErrors(res);
			return res;
		})
		.then(res => res.json())
		.then(async (films: FilmType[]) => {
			return films;
		})
		.catch(error => {
			return error;
		});
};

