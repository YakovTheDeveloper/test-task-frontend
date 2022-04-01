import { TOKEN_NAME_LOCAL_STORAGE } from '../../core/models/token';

export const deleleTokenFromLocalStorage = () => {
	localStorage.removeItem(`${TOKEN_NAME_LOCAL_STORAGE}`);
};