import React, { useState } from 'react';
import styled from 'styled-components';
import TabName from './TabName/TabName';
import * as palette from '../../../Colors';

const CategoryTabs = () => {

	const [isActive, setIsActive] = useState(false);

	const Container = styled.div`
		gap: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 32px;
	`;	

	return (
		<Container>
			<TabName>
				Фильмы
			</TabName>
			<TabName>
				Телеканалы
			</TabName>
		</Container>
	);
};

export default CategoryTabs;