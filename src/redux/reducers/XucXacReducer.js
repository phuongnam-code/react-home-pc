const stateDefault = {
	clicked: false, // clicked == false =>button TÀI-XỈU chưa được chọn, clicked == true =>button TÀI-XỈU được chọn
	banChon: false,
	soBanThang: 0,
	soBanChoi: 0,
	mangXucXac: [
		{ id: 1, img: "./img/gameXucXac/1.png" },
		{ id: 3, img: "./img/gameXucXac/3.png" },
		{ id: 6, img: "./img/gameXucXac/6.png" },
	],
	dsXucXac: [
		{ id: 1, img: "./img/gameXucXac/1.png", soDiem: 1 },
		{ id: 2, img: "./img/gameXucXac/2.png", soDiem: 2 },
		{ id: 3, img: "./img/gameXucXac/3.png", soDiem: 3 },
		{ id: 4, img: "./img/gameXucXac/4.png", soDiem: 4 },
		{ id: 5, img: "./img/gameXucXac/5.png", soDiem: 5 },
		{ id: 6, img: "./img/gameXucXac/6.png", soDiem: 6 },
	],
};

export const XucXacReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "TAI_XIU": {
			let selectTX;
			if (action.taiXiu === true) {
				selectTX = "TÀI";
			} else {
				selectTX = "XỈU";
			}
			return { ...state, banChon: selectTX, clicked: action.click };
		}
		case "DO_XUC_XAC": {
			if (state.clicked) {
				let randomArrXucXac = [];
				let tongDiem = 0;
				for (let i = 0; i < 3; i++) {
					//random ra 1 số ngẫu nhiên từ 0 -> 5
					let indexNumberRandom = Math.floor(Math.random() * 6);
					// tạo ra 1 viên xúc xắc từ numberRandom
					let xucXacRandom = {
						id: state.dsXucXac[indexNumberRandom].id,
						img: state.dsXucXac[indexNumberRandom].img,
					};
					tongDiem += indexNumberRandom + 1;
					//bỏ xúc xắc ngẫu nhiên vào mảng
					randomArrXucXac.push(xucXacRandom);
				}
				// số lần thắng
				if (state.banChon === "TÀI" || state.banChon === "XỈU") {
					if (tongDiem >= 10) {
						state.soBanThang += 1;
					}
				}
				//reset clicked về false yêu cầu người dùng chọn button TÀI-XỈU
				state.clicked = false;
				return { ...state, mangXucXac: randomArrXucXac, soBanChoi: state.soBanChoi + 1 };
			} else {
				alert("Mời bạn chọn TÀI XỈU");
			}

			return { ...state };
		}
		default:
			return { ...state, banChon: "??" };
	}
};
