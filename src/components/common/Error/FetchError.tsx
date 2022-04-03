import React, { FC } from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import { toPrimitive } from 'mobx/dist/internal';

const Error = styled.p`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	font-weight: 600;
	padding: 15px;
	background: ${palette.gray6}
`;

type Props = {
	doesErrorOccur: boolean
	errorMessage: string
	onClickReload: () => void
}

const FetchError: FC<Props> = ({
	doesErrorOccur,
	errorMessage,
	onClickReload,
}) => {
	if (!doesErrorOccur) return <p>Loading...</p>;
	return (
		<Error>
			<p>{errorMessage}</p>
			<Button
				variant="contained"
				type="button"
				width='160px'
				onClick={() => onClickReload()}
			>Try to reload</Button>
		</Error>
	);
};

export default FetchError;

