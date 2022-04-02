import React, { useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../Colors';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
	gap: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 32px;
	font-size: 28px;
	font-weight: 500;
`;

const CategoryTabs = () => {

	type ActiveStatus = { isActive: boolean }
	const linkStyle = (linkProps: ActiveStatus) => ({
		paddingBottom: '8px',
		color: linkProps.isActive ? palette.red : palette.gray1,
		borderBottom: linkProps.isActive ? `2px solid ${palette.red}` : 'none'
	});

	return (
		<Container>
			<NavLink
				to='/films'
				style={linkStyle}
			>
				Фильмы
			</NavLink>
			<NavLink
				to='/channels'
				style={linkStyle}
			>
				Телеканалы
			</NavLink>
		</Container >
	);
};

export default CategoryTabs;