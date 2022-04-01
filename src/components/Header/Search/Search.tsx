import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Container = styled.div`
	/* max-width: 402px; */
	width: 402px;
	column-gap: 32px;
	row-gap: 12px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 992px){
		grid-area: 2 / 1 / 3 / 3;
		justify-self: center;
	};

	@media (max-width: 440px){
			grid-area: 3 / 1 / 3 / 2;
			max-width: 300px;
			flex-direction: column;
			margin-bottom: 15px;
			
			/* align-items: center; */
	};
`;

const Search = () => {
	return (
		<Container>
			<Input placeholder='Поиск...' width='320px'></Input>
			<Button variant='text' width='50px'>
				Найти
			</Button>
		</Container>

	);
};

export default Search;