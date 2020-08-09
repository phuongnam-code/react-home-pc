import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems/index";
import Axios from "axios";
import { connect } from "react-redux";
class HomeScreen extends Component {
	render() {
		return (
			<div>
				<h1>Danh sách khóa học</h1>
				<div className="container">
					<div className="row">
						{this.props.courseList.map((item, index) => {
							return (
								<div className="col-3" key={index}>
									<CourseItem item={item} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		Axios({
			method: "get",
			url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
		})
			.then((res) => {
				this.props.dispatch({
					type: "FETCH_COURSES",
					payload: res.data,
				});
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
const mapStateToProps = (state) => {
	return { courseList: state.CourseReducer.coures };
};
export default connect(mapStateToProps, null)(HomeScreen);
