import { useEffect, useState } from 'react';
import { database } from '../../mockDatabase';

type User = {
	id: number;
	username: any;
	password: string;
	firstName: string;
	lastName: string;
}

const isPasswordCorrect = (dbUser: User, password: string) => dbUser.password === password;

export const useAuth = () => {

	const [user, setUser] = useState<User | null>(null);
	const [validationStatus, setValidationStatus] = useState<boolean | null>(null);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (validationStatus === true) {
			setMessage('Успешно');
			
			// if (!localStorage.getItem('mockToken'))
			// 	localStorage.setItem('mockToken', '23523857ZFJSKNC');

			if (!localStorage.getItem('credentials'))
				localStorage.setItem('credentials', JSON.stringify({
					...user,
					token: '23523857ZFJSKNC'
				}));


		}
		if (validationStatus === false) setMessage('Неудача');

		const timeout = setTimeout(() => setMessage(''), 3000);
		return () => clearTimeout(timeout);
	}, [validationStatus]);

	const validateUser = (usernameToValidate: string, password: string) => {

		const userToFind = database.users
			.find(dbUser => dbUser.username === usernameToValidate);

		if (!userToFind) {
			setUser(null);
			setValidationStatus(false);
			setTimeout(() => setValidationStatus(null), 3000);
			return;
		}

		if (isPasswordCorrect(userToFind, password)) {
			setUser(userToFind);
			setValidationStatus(true);
			setTimeout(() => setValidationStatus(null), 3000);
		}

	};

	// return { validateUser, validationStatus, userExist };
	return { message, setMessage, validateUser };
};