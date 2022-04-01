import { database } from '../../mockDatabase';

export const changeFirstLastName = async (id: number, newFirstName?: string, newLastName?: string) => {
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
