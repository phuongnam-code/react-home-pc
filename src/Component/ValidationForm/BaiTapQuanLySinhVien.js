import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapQuanLySinhVien extends Component {
	render() {
		return (
			<div className="container">
				<h1>Bài tập From - Quản lý sinh viên</h1>
				<FormSinhVien />
				<TableSinhVien />
			</div>
		);
	}
}
