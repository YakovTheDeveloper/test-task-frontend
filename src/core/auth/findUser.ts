import { database } from '../../mockDatabase';
import { DatabaseUser } from '../models/user';
import { fakeDelay } from '../../helpers/fakeDelay';

export const userToFindOrNull = (usernameToFind: string): DatabaseUser | null => {
	fetch('http://localhost:3001/users')
		.then(res => res.json())
		.then(users => console.log(users))
		.catch(error => console.log(error));



	const user = database.users.find(dbUser => dbUser.username === usernameToFind);
	if (user) return user;
	return null;
};

export const isPasswordCorrect = (dbUser: DatabaseUser, password: string) => dbUser.password === password;


const findUser = (users: DatabaseUser[], usernameToFind: string) => {
	return users.find(dbUser => dbUser.username === usernameToFind) || null;
};







