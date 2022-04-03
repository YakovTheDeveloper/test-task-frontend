import { database } from '../../mockDatabase';
import { DatabaseUser } from '../models/user';
import { UserWithoutCredentials } from '../models/user';
import { fakeDelay } from '../../helpers/fakeDelay';
import { manageErrors } from '../../helpers/fetch/manageErrors';


export const changeFirstLastName = async (
	user: UserWithoutCredentials,
	newFirstName?: string,
	newLastName?: string): Promise<DatabaseUser | Error> => {

	const dataToUpdate = {
		firstName: newFirstName || user.firstName,
		lastName: newLastName || user.lastName
	};

	const config = {
		method: 'PATCH',
		body: JSON.stringify(dataToUpdate),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	};
	return fetch(`http://localhost:3001/users/${user.id}`, config)
		.then((res) => manageErrors(res))
		.then((res) => res.json())
		.then((user: DatabaseUser) => user)
		.catch(error => new Error('Server problem', { cause: error }));
};
