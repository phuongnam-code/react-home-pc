import data from "./../../BaiTap_Deadline/BookingMovie/data/danhSachGhe.json";
const stateDefault = {
	data,
	gheDaDat: [{ soGhe: "A1", gia: 75000 }],
};

const BookingMovieReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "CHON_GHE": {
			console.log("action.viTriGhe: ", action.gheDuocChon.soGhe);

			let gheDaDatUpdate = [...state.gheDaDat];
			let index = gheDaDatUpdate.findIndex((ghe) => ghe.soGhe === action.gheDuocChon.soGhe);

			if (index === -1) {
				gheDaDatUpdate.push(action.gheDuocChon);
			}
			console.log(gheDaDatUpdate);
			state.gheDaDat = gheDaDatUpdate;

			// console.log(listGhe);
			return { ...state };
		}
		case "HUY_GHE": {
			let gheDaDatUpdate = [...state.gheDaDat];
			let index = gheDaDatUpdate.findIndex((ghe) => ghe.soGhe === action.viTriGhe);
			if (index !== -1) {
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
