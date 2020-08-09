const initialState = {
	burger: { salad: 1, cheese: 1, beef: 1 },
	price: { salad: 3, cheese: 3, beef: 5 },
	total: 11,
};

const BurgerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TANG_GIAM_SO_LUONG_BURGER": {
			let burgersUpdate = { ...state.burger };
			let pricesUpdate = { ...state.price };
			switch (action.burger) {
				case "salad":
					if (action.tangGiam) {
						burgersUpdate.salad += 1;
					} else if (burgersUpdate.salad > 1) {
						burgersUpdate.salad -= 1;
					}
					break;
				case "cheese":
					if (action.tangGiam) {
						burgersUpdate.cheese += 1;
					} else if (burgersUpdate.cheese > 1) {
						burgersUpdate.cheese -= 1;
					}
					break;
				case "beef":
					if (action.tangGiam) {
						burgersUpdate.beef += 1;
					} else if (burgersUpdate.beef > 1) {
						burgersUpdate.beef -= 1;
					}
					break;
				default:
					break;
			}
			state.burger = burgersUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default BurgerReducer;
