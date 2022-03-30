import React, { useEffect, useState } from 'react';
import { database } from '../../../mockDatabase';

export type FilmItem = {
	name: string
	img: string
	description: string
}

export const useFetchMovies = () => {

	const [movies, setMovies] = useState<FilmItem[] | null>(null);

	useEffect(() => {

		setTimeout(() => {
			const getMovies = async (): Promise<FilmItem[] | null> => {
				return database.films;
			};
			getMovies().then(res => setMovies(res));
		}, 1000);

	}, []);

	return { movies };

};
