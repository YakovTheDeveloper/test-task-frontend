export const manageErrors = (response: Response) => {
	if (!response.ok) {
		if (response.statusText === 'Not Found')
			throw Error('Страница не найдена');
		else throw Error(response.statusText);
	}
	return response;
};