import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../Colors';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Container = styled.div`
	margin-top: 11px;
	width: 402px;
	column-gap: 32px;
	row-gap: 12px;
	display: flex;
	align-items: start;
	justify-content: space-between;

	@media (max-width: 992px){
		grid-area: 2 / 1 / 3 / 3;
		justify-self: center;
	};

	@media (max-width: 440px){
			grid-area: 3 / 1 / 3 / 2;
			max-width: 200px;
			flex-direction: column;
			align-items: center;
			margin-bottom: 15px;
	};
`;

const StyledInput = styled(Input)`
	width: 320px;
	@media (max-width: 440px){
		width: 200px;
	};
`;

const Search = () => {
	return (
		<Container>
			<StyledInput placeholder='Поиск...' width='320px'></StyledInput>
			<Button variant='text' width='50px'>
				Найти
			</Button>
		</Container>

	);
};

export default Search;