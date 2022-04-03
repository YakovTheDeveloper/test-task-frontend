import { DatabaseUser } from '../models/user';
import { fetchUser } from '../user/fetchUser';
import { isPasswordCorrect } from './isPasswordCorrect';

type StatusMessage = 'Пользователь не найден' | 'Неверный пароль' | 'Успешно'
export type ValidationResult = {
	success: boolean
	message: StatusMessage
	user: DatabaseUser | null
}

export const validateLoginDataAndGetUser = async (
	username: string,
	password: string
): Promise<ValidationResult | Error> => {
	try {
		const user = await fetchUser(username);
		if (user instanceof Error) throw user;

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

	}
	catch (error) {
		console.log(error);
		if (error instanceof Error) return error;
		throw new Error('Something went wrong with user fetching');
	}
};