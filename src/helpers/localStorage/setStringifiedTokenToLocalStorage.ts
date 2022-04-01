import { TOKEN_NAME_LOCAL_STORAGE } from '../../core/models/token';
import { tokenType } from '../../core/models/token';
import { DatabaseUser } from '../../core/models/user';

export const setStringifiedTokenToLocalStorage = (userPayload: DatabaseUser) => {
	const formattedData: tokenType = {
		decodedPayload: userPayload
	};
	const stringifiedData = JSON.stringify(formattedData);
	localStorage.setItem(`${TOKEN_NAME_LOCAL_STORAGE}`, stringifiedData);
};