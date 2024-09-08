import styles from './app.module.css';
import { useState, useRef, useEffect } from 'react';
import { Field } from './components/field';
import {
	emailValidator,
	passwordMinValidator,
	passwordSymbolsValidator,
} from './validators';

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passcheck, setPasscheck] = useState('');

	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasscheckValid, setIsPasscheckValid] = useState(false);

	const submitButtonRef = useRef(null);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
	};

	const isFormValide = isEmailValid && isPasswordValid && isPasscheckValid;

	useEffect(() => {
		if (isFormValide) {
			submitButtonRef.current.focus();
		}
	}, [isFormValide]);

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<Field
					type="text"
					name="email"
					placeholder="Почта..."
					value={email}
					setValue={setEmail}
					setIsValid={setIsEmailValid}
					validators={[emailValidator]}
				/>
				<Field
					type="password"
					name="password"
					placeholder="Пароль..."
					value={password}
					setValue={setPassword}
					setIsValid={setIsPasswordValid}
					validators={[passwordMinValidator, passwordSymbolsValidator]}
				/>
				<Field
					type="password"
					name="passcheck"
					placeholder="Повтор пароля..."
					value={passcheck}
					setValue={setPasscheck}
					setIsValid={setIsPasscheckValid}
					validators={[
						(value) => (value === password ? null : 'Пароли не совпадают'),
					]}
					dependencies={{ password }}
					forceValidation={(value) => value.length > 0}
				/>
				<button type="submit" disabled={!isFormValide} ref={submitButtonRef}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
