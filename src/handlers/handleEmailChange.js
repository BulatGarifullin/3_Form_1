import { EMAIL_REGEXP } from '../regexp/EmailRegexp';

export const onEmailChange = ({ target }, { updateState, emailRef }) => {
	const { name, value } = target;

	updateState(name, value);

	let newError = null;
	let isValid = true;

	if (!EMAIL_REGEXP.test(value)) {
		newError = 'Ошибка. Неверно указан email.';
		isValid = false;
		emailRef.current.style.borderColor = 'red';
	} else if (!newError && value.length && isValid) {
		emailRef.current.style.borderColor = '#4caf50';
	}

	updateState('emailError', newError);
};

// const updates = {
// 	[target.name]: target.value,
// 	emailError: newError
//   };

// updateState((prevState) => ({
// 	...prevState,
// 	...updates
//   }));
