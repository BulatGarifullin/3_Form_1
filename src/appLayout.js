import styles from './App.module.css';

export const AppLayout = ({
	email,
	password,
	repeatPassword,
	emailError,
	passwordError,
	repeatPasswordError,
	onSubmit,
	onEmailChange,
	onPasswordChange,
	onRepeatPasswordChange,
	buttonRef,
	emailRef,
	passwordRef,
	repeatPasswordRef,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<form onSubmit={onSubmit} className={styles.form}>
					<label>
						{emailError && <div className={styles.errorLabel}>{emailError}</div>}
						<input
							value={email}
							name="email"
							type="email"
							placeholder="Введите email"
							onChange={onEmailChange}
							required
							ref={emailRef}
						></input>
					</label>
					<label>
						{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
						<input
							disabled={emailError || !email}
							value={password}
							name="password"
							type="password"
							placeholder="Введите пароль"
							onChange={onPasswordChange}
							required
							ref={passwordRef}
						></input>
					</label>
					<label>
						{repeatPasswordError && <div className={styles.errorLabel}>{repeatPasswordError}</div>}
						<input
							disabled={passwordError || !password}
							value={repeatPassword}
							name="repeatPassword"
							type="password"
							placeholder="Повторите пароль"
							onChange={onRepeatPasswordChange}
							required
							ref={repeatPasswordRef}
						></input>
					</label>
					<button ref={buttonRef} type="submit">
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	);
};
