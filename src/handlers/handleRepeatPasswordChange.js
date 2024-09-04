export const onRepeatPasswordChange = ({ target }, { updateState, password, buttonRef, repeatPasswordRef }) => {
	const { name, value } = target;

	updateState(name, value);

	let newError = null;
	let isValid = true;

	if (value !== password) {
		newError = 'Пароль невалидный';
		isValid = false;
		repeatPasswordRef.current.style.borderColor = 'red';
	} else if (!newError && value.length && isValid) {
		repeatPasswordRef.current.style.borderColor = '#4caf50';
		buttonRef.current.focus();
	}

	updateState('repeatPasswordError', newError);
};
