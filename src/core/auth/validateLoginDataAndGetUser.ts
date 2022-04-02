import { DatabaseUser } from '../models/user';
import { fetchUser } from './fetchUser';
import { userToFindOrNull, isPasswordCorrect } from './findUser';

type StatusMessage = 'Пользователь не найден' | 'Неверный пароль' | 'Успешно'
type ValidationResult = {
	success: boolean
	message: StatusMessage
	user: DatabaseUser | null 
}

export const validateLoginDataAndGetUser = async (username: string, password: string): Promise<ValidationResult> => {

	const user = await fetchUser(username);
	if (!user) return {
		success: false,
		message: 'Пользователь не найден',
		user: null
	};

	const success = isPasswordCorrect(user, password);
	if (!success) return {
		success: false,
		message: 'Неверный пароль',
		user: null
	};

	return {
		success: true,
		message: 'Успешно',
		user
	};
};