import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Container = styled.div`
	width: 402px;
	gap: 32px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Search = () => {
	return (
		<Container>
			<Input placeholder='Поиск...'></Input>
			<Button variant='text' width='50px'>
				Найти
			</Button>
		</Container>

	);
};

export default Search;