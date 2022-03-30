import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import * as palette from '../../Colors';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useAuth } from '../../hooks/auth/useAuth';
import AuthModal from './Auth/AuthModalContent';


type Props = {
	children?: React.ReactChild
	closeModal?: (e: React.MouseEvent) => void
}
const StyledModal = styled.div`
	gap: 24px;
	width: 304px;
	height: 394px;
	padding: 36px;
	border-radius: 8px;
	background: ${palette.white};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ModalShadow = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: ${palette.gray1Modal} ;
	z-index: 4;
`;

const Modal: FC<Props> = ({ children, closeModal }) => {

	const element = document.getElementById('app-modal');


	if (element) return createPortal(
		<ModalShadow onClick={closeModal}>
			<StyledModal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				{children}
			</StyledModal>
		</ModalShadow>,
		element,
	);
	else return null;
};

export default Modal;