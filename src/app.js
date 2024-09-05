import { AppLayout } from './appLayout';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationFieldScheme } from './utils/index';
import { onSubmit } from './handlers/handleSubmit';

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		resolver: yupResolver(registrationFieldScheme),
	});
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	const buttonRef = useRef(null);

	useEffect(() => {
		if (isValid && buttonRef.current) {
			buttonRef.current.focus();
		}
	}, [isValid]);

	const props = {
		register,
		handleSubmit: handleSubmit((data) => onSubmit(data, reset)),
		registrationFieldScheme,
		errors,
		isValid,
		emailError,
		passwordError,
		repeatPasswordError,
		buttonRef,
	};

	return <AppLayout {...props} />;
};
