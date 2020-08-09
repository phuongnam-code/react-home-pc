import React, { Component } from "react";

export default class CourseItem extends Component {
	render() {
		return (
			<div className="card mt-3">
				<img src={this.props.item.hinhAnh} alt="" width="80%" />
				<h4>{this.props.item.tenKhoaHoc}</h4>
				<p>
					<strong>Người tạo: </strong>
					<span>{this.props.item.nguoiTao.hoTen}</span>
				</p>
				<div>
					<button>Detail...</button>
				</div>
			</div>
		);
	}
}
