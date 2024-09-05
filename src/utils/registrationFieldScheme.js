import * as yup from 'yup';

export const registrationFieldScheme = yup.object().shape({
	email: yup
		.string()
		.required('Заполните поле')
		.matches(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
			'Ошибка. Неверно указан email.',
		),
	password: yup
		.string()
		.required('Заполните поле')
		.matches(
			/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
			'Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов.',
		),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Ошибка валидации: пароли не совпадают')
		.required('Заполните поле'),
});
