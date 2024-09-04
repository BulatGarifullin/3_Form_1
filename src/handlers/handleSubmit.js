import { sendFormData } from '../utils/sendFormData';

export const onSubmit = (event, { resetState, email, password, repeatPassword, emailRef, passwordRef, repeatPasswordRef }) => {
	event.preventDefault();
	const state = { email, password, repeatPassword };
	sendFormData(state);
	resetState();
	emailRef.current.style.borderColor = 'inherit';
	passwordRef.current.style.borderColor = 'inherit';
	repeatPasswordRef.current.style.borderColor = 'inherit';
};
