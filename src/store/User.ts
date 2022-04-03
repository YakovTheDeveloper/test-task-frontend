import { makeAutoObservable, autorun } from 'mobx';
import { validateLoginDataAndGetUser } from '../core/auth/validateLoginDataAndGetUser';
import { changeFirstLastName } from '../core/user/changeFirstLastName';
import { UserWithoutCredentials } from '../core/models/user';
import { deleleTokenFromLocalStorage } from '../helpers/localStorage/deleleTokenFromLocalStorage';
import { setStringifiedTokenToLocalStorage } from '../helpers/localStorage/setStringifiedTokenToLocalStorage';
import { getUserInfoFromToken } from '../core/auth/getUserInfoFromToken';
import { ValidationResult } from '../core/auth/validateLoginDataAndGetUser';


class User {

	currentUser: UserWithoutCredentials | null = null;
	statusMessage = '';
	loading = false;
	changeNameErrorMessage = '';
	remember = false;

	constructor() {
		makeAutoObservable(this);
		autorun(() => this.getUserFromLocalStorage());
	}

	async login(username: string, password: string) {
		this.loading = true;
		this.statusMessage = '';
		try {
			const validationResult = await validateLoginDataAndGetUser(username, password);
			if (validationResult instanceof Error) throw validationResult;
			else this.onSuccessfulValidation(validationResult);
		}
		catch (error: any) {
			this.statusMessage = error.message;
		}
		finally {
			this.loading = false;
		}
	}

	logout = () => {
		this.currentUser = null;
		this.statusMessage = '';
		deleleTokenFromLocalStorage();
	};

	changeName = async (firstName: string, lastName: string) => {
		this.loading = true;
		this.changeNameErrorMessage = '';
		try {
			await this.changeNameOrThrowError(firstName, lastName);
		}
		catch (error: any) {
			console.log('Error with name changing', error);
			this.changeNameErrorMessage = error.message;
			// this.changeNameErrorMessage = 'Server problems, please try again later';
		}
		finally {
			this.loading = false;
		}
	};

	onSuccessfulValidation(validationData: ValidationResult) {
		this.statusMessage = validationData.message;
		this.currentUser = validationData.user;
		if (this.remember) {
			validationData.user &&
				setStringifiedTokenToLocalStorage(validationData.user);
		}
	}
	getUserFromLocalStorage() {
		if (!this.currentUser)
			this.currentUser = getUserInfoFromToken() || null;
	}

	async changeNameOrThrowError(firstName: string, lastName: string) {
		if (!this.currentUser) return;
		const responseWithUpdatedUser = await changeFirstLastName(this.currentUser, firstName, lastName);
		if (responseWithUpdatedUser instanceof Error) throw responseWithUpdatedUser;
		else {
			this.currentUser.firstName = firstName;
			this.currentUser.lastName = lastName;
			setStringifiedTokenToLocalStorage(responseWithUpdatedUser);
		}
	}
}

export default new User();