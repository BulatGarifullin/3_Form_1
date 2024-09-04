import { useState } from 'react';
import { initialState } from '../constants/initialState';

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState((prevState) => ({
				...prevState,
				[fieldName]: newValue,
			}));
		},
		resetState: () => setState(initialState),
	};
};
