import { TOKEN_NAME_LOCAL_STORAGE } from '../models/token';

export const isTokenInLocalStorage = () => {
	const tokenExist = localStorage.getItem(TOKEN_NAME_LOCAL_STORAGE);
	if (!tokenExist) return false;
	return true;
};