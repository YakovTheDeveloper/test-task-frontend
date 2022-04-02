import { DatabaseUser } from '../models/user';
import { fakeDelay } from '../../helpers/fakeDelay';

const findUser = (users: DatabaseUser[], usernameToFind: string) => {
	return users.find(dbUser => dbUser.username === usernameToFind) || null;
};

export const fetchUser = (usernameToFind: string): Promise<DatabaseUser | null> => {
	const user = fetch('http://localhost:3001/users')
		.then(res => res.json())
		.then(async (users: DatabaseUser[]) => {
			await fakeDelay();
			return findUser(users, usernameToFind);
		})
		.catch(error => {
			console.log(error);
			return null;
		});

	return user;
};

export const isPasswordCorrect = (dbUser: DatabaseUser, password: string) => dbUser.password === password;










