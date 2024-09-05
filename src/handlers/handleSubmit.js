import { sendFormData } from '../utils/sendFormData';

export const onSubmit = (data, reset) => {
	sendFormData(data);
	reset();
};
