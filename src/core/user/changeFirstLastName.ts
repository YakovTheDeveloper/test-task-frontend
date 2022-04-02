import { database } from '../../mockDatabase';
import { DatabaseUser } from '../models/user';
import { UserWithoutCredentials } from '../models/user';
import { fakeDelay } from '../../helpers/fakeDelay';

export const changeFirstLastName2 = async (id: number, newFirstName?: string, newLastName?: string) => {
	const userIndex = database.users.findIndex(user => {
		user.id === id;
	});
	if (userIndex === -1) return;

	const changeName = () => {
		return setTimeout(() => {
			if (newFirstName) database.users[userIndex].firstName = newFirstName;
			if (newLastName) database.users[userIndex].lastName = newLastName;
		}, 2000);
	};

	return changeName();
};


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
		.then((response) => response.json())
		.then((user: DatabaseUser) => user)
		.catch(error => new Error('Server problem', { cause: error }));
	// .then(async (res) => {
	// 	await fakeDelay(1500);
	// 	return res.json();
	// })
	// .then(user => 'OK' as const)
	// .catch(error => {
	// 	console.log('Error message', error);
	// 	return new Error('Error message', { cause: error });
	// });
};