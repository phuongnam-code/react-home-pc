import data from "./../../BaiTap_Deadline/BookingMovie/data/danhSachGhe.json";
const stateDefault = {
	data,
	gheDaDat: [],
	tongTien: 0,
};

const BookingMovieReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "CHON_GHE": {
			// console.log("action: ", action);

			let gheDaDatUpdate = [...state.gheDaDat];

			let index = gheDaDatUpdate.findIndex((ghe) => ghe.soGhe === action.gheDuocChon.soGhe);

			if (index === -1) {
				state.tongTien += action.gheDuocChon.gia;
				gheDaDatUpdate.push(action.gheDuocChon);
			} else {
				state.tongTien -= action.gheDuocChon.gia;
				gheDaDatUpdate.splice(index, 1);
			}
			state.gheDaDat = gheDaDatUpdate;
			return { ...state };
		}
		case "HUY_GHE": {
			let gheDaDatUpdate = [...state.gheDaDat];
			let index = gheDaDatUpdate.findIndex((ghe) => ghe.soGhe === action.gheDuocChon.soGhe);
			if (index !== -1) {
				// action.gheDuocChon.daDat = false;
				state.tongTien -= action.gheDuocChon.gia;
				gheDaDatUpdate.splice(index, 1);
			}
			state.gheDaDat = gheDaDatUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default BookingMovieReducer;
