import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { XucXacReducer } from "./XucXacReducer";
import QuanLySinhVienReducer from "./QuanLySinhVienReducer";
import CourseReducer from "./CourseReducer";
import BurgerReducer from "./BurgerReducer";
//store tổng ứng dụng
export const rootReducer = combineReducers({
	//nơi sẽ chứa các reducer cho nghiệp vụ con(store con)
	GioHangReducer,
	XucXacReducer,
	QuanLySinhVienReducer,
	CourseReducer,
	BurgerReducer,
});
