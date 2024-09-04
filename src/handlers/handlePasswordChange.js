import { PASSWORD_REGEXP } from '../regexp/PasswordRegexp';

export const onPasswordChange = ({ target }, { updateState, passwordRef }) => {
	const { name, value } = target;

	updateState(name, value);

	let newError = null;
	let isValid = true;

	if (!PASSWORD_REGEXP.test(value)) {
		newError =
			'Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов.';
		updateState('repeatPassword', '');
		updateState('repeatPasswordError', '');
		isValid = false;
		passwordRef.current.style.borderColor = 'red';
	} else if (!newError && value.length && isValid) {
		passwordRef.current.style.borderColor = '#4caf50';
	}

	updateState('passwordError', newError);
};
