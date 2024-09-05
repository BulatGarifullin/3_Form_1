import styles from './App.module.css';

export const AppLayout = ({ register, handleSubmit, isValid, emailError, passwordError, repeatPasswordError, buttonRef }) => {
	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<label>
						{emailError && <div className={styles.errorLabel}>{emailError}</div>}
						<input name="email" type="text" placeholder="Введите email" {...register('email')}></input>
					</label>
					<label>
						{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
						<input name="password" type="password" placeholder="Введите пароль" {...register('password')}></input>
					</label>
					<label>
						{repeatPasswordError && <div className={styles.errorLabel}>{repeatPasswordError}</div>}
						<input
							name="repeatPassword"
							type="password"
							placeholder="Повторите пароль"
							{...register('repeatPassword')}
						></input>
					</label>
					<button ref={buttonRef} type="submit" disabled={!isValid}>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	);
};
