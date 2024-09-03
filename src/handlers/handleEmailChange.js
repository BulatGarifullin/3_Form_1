import { EMAIL_REGEXP } from '../regexp/EmailRegexp';

export const onEmailChange = ({ target }, { setEmail, setEmailError, emailRef }) => {
	setEmail(target.value);

	let newError = null;
	let isValid = true;

	if (!EMAIL_REGEXP.test(target.value)) {
		newError = 'Ошибка. Неверно указан email.';
		isValid = false;
		emailRef.current.style.borderColor = 'red';
	} else if (!newError && target.value.length && isValid) {
		emailRef.current.style.borderColor = '#4caf50';
	}

	setEmailError(newError);
};
