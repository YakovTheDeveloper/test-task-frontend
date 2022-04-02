import { makeAutoObservable, autorun } from 'mobx';
import { validateLoginDataAndGetUser } from '../core/auth/validateLoginDataAndGetUser';
import { changeFirstLastName } from '../core/user/changeFirstLastName';
import { UserWithoutCredentials } from '../core/models/user';
import { deleleTokenFromLocalStorage } from '../helpers/localStorage/deleleTokenFromLocalStorage';
import { setStringifiedTokenToLocalStorage } from '../helpers/localStorage/setStringifiedTokenToLocalStorage';
import { getUserInfoFromToken } from '../core/auth/getUserInfoFromToken';


class User {

	currentUser: UserWithoutCredentials | null = null;
	statusMessage = '';
	loading = false;
	changeNameErrorMessage = '';
	remember = false;

	constructor() {
		makeAutoObservable(this);

		autorun(() => {
			if (!this.currentUser)
				this.currentUser = getUserInfoFromToken() || null;
		});
	}

	// get autoClearStatusMessage() {
	// 	return this.statusMessage = '';
	// 	return;
	// }

	async login(username: string, password: string) {
		this.statusMessage = '';
		this.loading = true;
		const validationResult = await validateLoginDataAndGetUser(username, password);
		if (validationResult.success) {
			this.statusMessage = validationResult.message;
			this.currentUser = validationResult.user;

			if (this.remember) {
				validationResult.user &&
					setStringifiedTokenToLocalStorage(validationResult.user);
			}
			// return;
		}
		this.loading = false;
		this.statusMessage = validationResult.message;
		// this.loading = false
	}


	logout = () => {
		// this.isAuthorized = false
		this.currentUser = null;
		this.statusMessage = '';
		deleleTokenFromLocalStorage();
	};

	changeName = async (firstName: string, lastName: string) => {
		if (!this.currentUser) return;

		this.loading = true;
		this.changeNameErrorMessage = '';

		try {
			const responseWithUpdatedUser = await changeFirstLastName(this.currentUser, firstName, lastName);
			if (responseWithUpdatedUser instanceof Error) return;

			this.currentUser.firstName = firstName;
			this.currentUser.lastName = lastName;
			setStringifiedTokenToLocalStorage(responseWithUpdatedUser);
		}
		catch (error) {
			this.changeNameErrorMessage = 'Server problems, please try again later';
			console.log(error);
		}
		finally {
			this.loading = false;
		}
	};

	// getUserFromTokenIfTokenExist = () => {

	// }
}

export default new User();
// export const user = new User();