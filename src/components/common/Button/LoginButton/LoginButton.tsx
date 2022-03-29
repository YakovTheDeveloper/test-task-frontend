import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../../Colors';

const LoginButton = () => {

	const Button = styled.button`
		color: ${palette.white};
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		background: ${palette.red};
		border-radius: 4px;
		padding: 9px 32px 10px;
	`;

	return (
		<Button>
			Войти
		</Button>
	);
};

export default LoginButton;