import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import * as palette from '../../Colors';

type Props = {
	children?: React.ReactChild
	closeModal?: (e: React.MouseEvent) => void
}
const StyledModal = styled.div`
	border-radius: 8px;
	background: ${palette.white};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
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