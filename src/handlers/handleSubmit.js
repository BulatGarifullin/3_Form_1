import { sendFormData } from '../utils/sendFormData';

export const onSubmit = (
	event,
	{ email, password, repeatPassword, setEmail, setPassword, setRepeatPassword, emailRef, passwordRef, repeatPasswordRef },
) => {
	event.preventDefault();
	const state = { email, password, repeatPassword };
	sendFormData(state);
	setEmail('');
	setPassword('');
	setRepeatPassword('');
	emailRef.current.style.borderColor = 'inherit';
	passwordRef.current.style.borderColor = 'inherit';
	repeatPasswordRef.current.style.borderColor = 'inherit';
};
