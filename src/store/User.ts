import { makeAutoObservable, autorun } from 'mobx';
import { database } from '../mockDatabase';
import { setStringifiedTokenToLocalStorage } from '../helpers/localStorage/setStringifiedTokenToLocalStorage';
import { validateLoginDataAndGetUser } from '../core/auth/validateLoginDataAndGetUser';
import { changeFirstLastName } from '../core/user/changeFirstLastName';
import { UserWithoutCredentials } from '../core/models/user';
import { deleleTokenFromLocalStorage } from '../helpers/localStorage/deleleTokenFromLocalStorage';
import { getUserInfoFromToken } from '../core/auth/getUserInfoFromToken';


class User {

	currentUser: UserWithoutCredentials | null = null;
	statusMessage = '';

	constructor() {
		makeAutoObservable(this);

		autorun(() => {
			if (!this.currentUser) this.currentUser = getUserInfoFromToken() || null;
		});
	}

	login(username: string, password: string) {
		const validationResult = validateLoginDataAndGetUser(username, password);
		if (validationResult.success) {
			this.statusMessage = validationResult.message;
			this.currentUser = validationResult.user;
			validationResult.user && setStringifiedTokenToLocalStorage(validationResult.user);
			return;
		}
		this.statusMessage = validationResult.message;
	}


	logout = () => {
		// this.isAuthorized = false
		this.currentUser = null;
		this.statusMessage = '';
		deleleTokenFromLocalStorage();
	};

	changeName = async (firstName: string, lastName: string, id: number) => {
		if (this.currentUser) {
			await changeFirstLastName(id, firstName, lastName);
			this.currentUser.firstName = firstName;
			this.currentUser.lastName = lastName;
		}
	};

	// getUserFromTokenIfTokenExist = () => {

	// }
}

export default new User();
// export const user = new User();