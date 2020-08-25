import { add_user } from "../types/typeForm";

const stateFormDefault = {
	arrayInfoUser: [{ ho: "nguyen duc", ten: "nam", taiKhoan: "phuongnam", email: "nguyenducnam.it@gmail.com", matKhau: "123@abc" }],
};
// { ho: "nguyen duc", ten: "nam", taiKhoan: "phuongnam", email: "nguyenducnam.it@gmail.com", matKhau: "123@abc" }
const FormReducer = (state = stateFormDefault, action) => {
	switch (action.type) {
		case add_user: {
			let arrayInfoUserUpdate = [...state.arrayInfoUser, action.user];
			state.arrayInfoUser = arrayInfoUserUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default FormReducer;
