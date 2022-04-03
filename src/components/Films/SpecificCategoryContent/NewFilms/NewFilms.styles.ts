import styled from 'styled-components';
import * as palette from '../../../../Colors';

const FilmsContainer = styled.section`
		width: 100%;
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
		@media (max-width: 992px){
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
		};
	`;

const Error = styled.p`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	font-weight: 600;
	padding: 15px;
	background: ${palette.gray6}
`;


export const Styled = {
	FilmsContainer,
	Error
};