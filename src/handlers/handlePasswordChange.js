import { PASSWORD_REGEXP } from '../regexp/PasswordRegexp';

export const onPasswordChange = (
	{ target },
	{ setPassword, setPasswordError, setRepeatPassword, setRepeatPasswordError, passwordRef },
) => {
	setPassword(target.value);

	let newError = null;
	let isValid = true;

	if (!PASSWORD_REGEXP.test(target.value)) {
		newError =
			'Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов.';
		setRepeatPassword('');
		setRepeatPasswordError('');
		isValid = false;
		passwordRef.current.style.borderColor = 'red';
	} else if (!newError && target.value.length && isValid) {
		passwordRef.current.style.borderColor = '#4caf50';
	}

	setPasswordError(newError);
};
