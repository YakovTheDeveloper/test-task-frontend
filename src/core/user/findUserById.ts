import { DatabaseUser } from '../models/user';

export const findUserById = async (id: number) => {
	return fetch(`localhost:3001/users/${id}`)
		.then(res => res.json())
		.then((user: DatabaseUser) => user)
		.catch(error => new Error('Error message', { cause: error }));
};