import { add_user } from "../types/typeForm";

export const addUserAction = (user) => {
	return {
		type: add_user,
		user: user,
	};
};
