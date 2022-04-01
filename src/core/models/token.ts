export const TOKEN_NAME_LOCAL_STORAGE = 'token';

export type tokenType = {
	decodedPayload: {
		id: number
		username: string
		password: string
		firstName: string
		lastName: string
	}
};