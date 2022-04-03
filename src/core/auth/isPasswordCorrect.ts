import { DatabaseUser } from '../models/user';

export const isPasswordCorrect = (dbUser: DatabaseUser, password: string) =>
	dbUser.password === password;









