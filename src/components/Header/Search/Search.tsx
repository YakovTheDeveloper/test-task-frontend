import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Input from '../../common/Input/Input';

const Search = () => {

	const Container = styled.div`
		gap: 32px;
		height: 25px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const SearchButton = styled.button`
		color: ${palette.red};
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

	`;

	return (
		<Container>
			<Input placeholder='Поиск...'></Input>
			<SearchButton>
				Найти
			</SearchButton>
		</Container>

	);
};

export default Search;