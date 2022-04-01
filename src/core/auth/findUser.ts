import { database } from '../../mockDatabase';
import { DatabaseUser } from '../models/user';

export const userToFindOrNull = (usernameToFind: string): DatabaseUser | null => {
	const user = database.users.find(dbUser => dbUser.username === usernameToFind);
	if (user) return user;
	return null;
};

export const isPasswordCorrect = (dbUser: DatabaseUser, password: string) => dbUser.password === password;






