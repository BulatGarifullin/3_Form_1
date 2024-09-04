import { AppLayout } from './appLayout';
import { onSubmit, onEmailChange, onPasswordChange, onRepeatPasswordChange } from './handlers';
import { useStore } from './hooks/useStore';
import { useRef } from 'react';

export const App = () => {
	const { getState, updateState, resetState } = useStore();
	const { email, password, repeatPassword, emailError, passwordError, repeatPasswordError } = getState();

	const buttonRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const repeatPasswordRef = useRef(null);

	const state = {
		updateState,
		resetState,
		email,
		password,
		repeatPassword,
		emailError,
		passwordError,
		repeatPasswordError,
		buttonRef,
		emailRef,
		passwordRef,
		repeatPasswordRef,
	};

	const props = {
		getState,
		updateState,
		resetState,
		email,
		password,
		repeatPassword,
		emailError,
		passwordError,
		repeatPasswordError,
		buttonRef,
		emailRef,
		passwordRef,
		repeatPasswordRef,
		onSubmit: (event) => onSubmit(event, state),
		onEmailChange: ({ target }) => onEmailChange({ target }, state),
		onPasswordChange: ({ target }) => onPasswordChange({ target }, state),
		onRepeatPasswordChange: ({ target }) => onRepeatPasswordChange({ target }, state),
	};

	return <AppLayout {...props} />;
};
