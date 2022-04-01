import { isTokenInLocalStorage } from './isTokenInLocalStorage';
import { TOKEN_NAME_LOCAL_STORAGE, tokenType } from '../models/token';
import { UserWithoutCredentials } from '../models/user';

export const getUserInfoFromToken = () => {
	const tokenExist = isTokenInLocalStorage();
	if (tokenExist) {
		const token: tokenType = JSON.parse(localStorage.getItem(TOKEN_NAME_LOCAL_STORAGE) || '');
		const userInfo: UserWithoutCredentials = {
			id: token.decodedPayload.id,
			firstName: token.decodedPayload.firstName,
			lastName: token.decodedPayload.lastName
		};
		return userInfo;
	}
	return null;
};