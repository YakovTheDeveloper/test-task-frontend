import { useState } from 'react';

export const useLoginData = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [rememberUserSelect, setRememberUserSelect] = useState(false);

	const onLoginChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setLogin(target.value);
	};
	const onPasswordChange = (e: React.ChangeEvent<Element>) => {
		const target = e.target as HTMLTextAreaElement;
		setPassword(target.value);
	};

	return {
		login,
		onLoginChange,
		password,
		onPasswordChange,
		rememberUserSelect,
		setRememberUserSelect
	};
};