const stateDefault = {
	mangSinhVien: [{ maSV: 1, hoTen: "Nguyễn Văn A", sdt: "0979777999", email: "a.vannguyen@gmail.com" }],
};

const QuanLySinhVienReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "THEM_SINH_VIEN":
			console.log(state.mangSinhVien);
			console.log(action.sv);
			const mangSVUpdate = [...state.mangSinhVien, action.sv];
			console.log(mangSVUpdate);
			state.mangSinhVien = mangSVUpdate;
			return { ...state };

		default:
			return { ...state };
	}
};

export default QuanLySinhVienReducer;
