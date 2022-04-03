import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import User from '../../../store/User';
import { Styled } from './ChangeNameForm.styles';

const {
	CloseButton,
	FirstNameInput,
	LastNameInput,
	Form,
	Group,
	Label
} = Styled;

type Props = {
	show: boolean
	closeForm: () => void
}

const ChangeNameForm: FC<Props> = observer(({ show, closeForm }) => {

	const [firstName, setFirstName] = useState(User.currentUser?.firstName || '');
	const [lastName, setLastName] = useState(User.currentUser?.lastName || '');

	useEffect(() => {
		setFirstName(User.currentUser?.firstName || '');
		setLastName(User.currentUser?.lastName || '');
	}, [show]);

	const changeHandler = (name: 'firstname' | 'lastname', e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		name === 'firstname' && setFirstName(target.value);
		name === 'lastname' && setLastName(target.value);
	};
	const changeName = async () => {
		await User.changeName(firstName, lastName);
	};
	const closeFormHandler = () => {
		closeForm();
	};
	const onEnterKey = async (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			await changeName();
			closeFormHandler();
		}
	};
	if (!show) return null;
	return (
		<Form autoComplete="off">
			<CloseButton variant='contained' onClick={closeFormHandler}>
				Закрыть
			</CloseButton>
			<Group>
				<Label htmlFor="firstNameChange">
					Имя
				</Label>
				<FirstNameInput
					onBlur={changeName}
					onKeyDown={onEnterKey}
					id="firstNameChange"
					onChange={(e) => changeHandler('firstname', e)}
					value={firstName}
				/>
			</Group>
			<Group>
				<Label htmlFor="lastNameChange">
					Фамилия
				</Label>
				<LastNameInput
					onBlur={changeName}
					onKeyDown={onEnterKey}
					id="lastNameChange"
					onChange={(e) => changeHandler('lastname', e)}
					value={lastName}
				/>
			</Group>
			<p>
				{User.changeNameErrorMessage}
			</p>
		</Form>
	);
});

export default ChangeNameForm;