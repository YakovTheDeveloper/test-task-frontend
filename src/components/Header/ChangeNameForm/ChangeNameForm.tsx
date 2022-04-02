import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import * as palette from '../../../Colors';
import User from '../../../store/User';

const ChangeFirstNameInput = styled(Input)`
	
`;
const ChangeLastNameInput = styled(Input)`
	
`;

const Form = styled.form`
	/* max-width: 400px; */
	padding: 15px;
	gap: 15px;
	position: absolute;
	top: 0;
	/* right: 50%; */
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 1px solid ${palette.gray1}; */
	box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	background-color: ${palette.white};
`;
const Group = styled.div`
	display: flex;
	flex-direction: column;
`;
const Label = styled.label`
	font-size: 12px;
`;

const CloseButton = styled(Button)`
	order: -2;
	/* position: absolute;
	top: 0;
	left: 0; */
`;
const ChangeNameButton = styled(Button)``;


type Props = {
	show: boolean
	closeForm: () => void
}

const ChangeNameForm: FC<Props> = observer(({ show, closeForm }) => {

	const [firstName, setFirstName] = useState(User.currentUser?.firstName || '');
	const [lastName, setLastName] = useState(User.currentUser?.lastName || '');

	// useEffect(() => {
	// 	setFirstName(User.currentUser?.firstName || '');
	// 	setLastName(User.currentUser?.lastName || '');
	// }, []);


	const changeHandler = (name: 'firstname' | 'lastname', e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		name === 'firstname' && setFirstName(target.value);
		name === 'lastname' && setLastName(target.value);
	};

	const changeName = async () => {
		await User.changeName(firstName, lastName);
	};

	const closeFormHandler = () => {
		setFirstName(User.currentUser?.firstName || '');
		setLastName(User.currentUser?.lastName || '');
		closeForm();
	};

	if (!show) return null;
	return (
		<Form>
			<CloseButton variant='contained' onClick={closeFormHandler}>
				Закрыть
			</CloseButton>
			<Group>
				<Label htmlFor="firstNameChange">
					Имя
				</Label>
				<ChangeFirstNameInput
					onBlur={changeName}
					id="firstNameChange"
					onChange={(e) => changeHandler('firstname', e)}
					value={firstName}
				/>
			</Group>
			<Group>
				<Label htmlFor="lastNameChange">
					Фамилия
				</Label>
				<ChangeLastNameInput
					onBlur={changeName}
					id="lastNameChange"
					onChange={(e) => changeHandler('lastname', e)}
					value={lastName}
				/>
			</Group>

			{/* <ChangeNameButton variant='text' onClick={changeName}>
				Сменить имя
			</ChangeNameButton> */}
			<p>
				{User.changeNameErrorMessage}
			</p>
		</Form>
	);
});

export default ChangeNameForm;