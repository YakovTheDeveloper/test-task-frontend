import styled from 'styled-components';
import Button from '../../common/Button/Button';

const Container = styled.div`
	margin-top: 2px;
	gap: 16px;
	display: flex;
	justify-content: end;
	align-items: center;
	position: relative;
	/* min-width: 220px; */
	@media (max-width: 440px){
		justify-content: center;
		grid-area: 2 / 1 / 3 / 2;
	};
`;

type Visible = {
	show: boolean
}
const Name = styled.p<Visible>`
	display: ${({ show }) => show ? 'flex' : 'none'};
	white-space: nowrap;
	&:hover {
		cursor: pointer;
	}
`;

const LoginButton = styled(Button)`
`;

export const Styled = {
	Container,
	Name,
	LoginButton
};