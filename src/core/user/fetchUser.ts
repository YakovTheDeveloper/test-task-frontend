import { DatabaseUser } from '../models/user';
import { fakeDelay } from '../../helpers/fakeDelay';
import { manageErrors } from '../../helpers/fetch/manageErrors';

const findUser = (users: DatabaseUser[], usernameToFind: string) => {
	return users.find(dbUser => dbUser.username === usernameToFind) || null;
};

export const fetchUser = async (usernameToFind: string): Promise<DatabaseUser | null> => {
	return fetch('http://localhost:3001/users')
		.then(res => manageErrors(res))
		.then(res => res.json())
		.then(async (users: DatabaseUser[]) => {
			await fakeDelay();
			return findUser(users, usernameToFind);
		})
		.catch(error => {
			return error;
		});
};

export const isPasswordCorrect = (dbUser: DatabaseUser, password: string) => dbUser.password === password;










