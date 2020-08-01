const stateGioHang = {
	gioHang: [
		{
			maSP: 3,
			tenSP: "Iphone XS Max",
			soLuong: 1,
			giaBan: 27000000,
			hinhAnh: "./img/applephone.jpg",
		},
	],
};

export const GioHangReducer = (state = stateGioHang, action) => {
	console.log(action.type);
	switch (action.type) {
		case "THEM_GIO_HANG": {
			let gioHangCapNhat = [...state.gioHang];
			let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.spGioHang.maSP);
			if (index !== -1) {
				gioHangCapNhat[index].soLuong += 1;
			} else {
				gioHangCapNhat.push(action.spGioHang);
			}
			state.gioHang = gioHangCapNhat;
			return { ...state };
		}
		case "XOA_GIO_HANG": {
			let gioHangCapNhat = [...state.gioHang];
			let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSanPham);
			if (index !== -1) {
				gioHangCapNhat.splice(index, 1);
			}
			// state.gioHang = gioHangCapNhat;
			return { ...state, gioHang: gioHangCapNhat };
		}
		case "TANG_GIAM_SL": {
			let gioHangCapNhat = [...state.gioHang];
			let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSanPham);
			if (index !== -1) {
				if (action.tangGiam) {
					gioHangCapNhat[index].soLuong += 1;
				} else {
					if (gioHangCapNhat[index].soLuong > 1) {
						gioHangCapNhat[index].soLuong -= 1;
					} else {
						alert("tối thiểu là 1");
					}
				}
			}
			// state.gioHang = gioHangCapNhat;
			return { ...state, gioHang: gioHangCapNhat };
		}
		default:
			return { ...state };
	}
};
