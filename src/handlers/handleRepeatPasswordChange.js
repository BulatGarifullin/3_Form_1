export const onRepeatPasswordChange = (
	{ target },
	{ password, setRepeatPasswordError, setRepeatPassword, buttonRef, repeatPasswordRef },
) => {
	setRepeatPassword(target.value);

	let newError = null;
	let isValid = true;

	if (target.value !== password) {
		newError = 'Пароль невалидный';
		isValid = false;
		repeatPasswordRef.current.style.borderColor = 'red';
	} else if (!newError && target.value.length && isValid) {
		repeatPasswordRef.current.style.borderColor = '#4caf50';
		buttonRef.current.focus();
	}

	setRepeatPasswordError(newError);
};
