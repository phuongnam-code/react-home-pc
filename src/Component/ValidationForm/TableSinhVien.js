import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
	renderTableSinhVien = () => {
		return this.props.mangSinhVien.map((sv, index) => {
			return (
				<tr key={index}>
					<td>{sv.maSV}</td>
					<td>{sv.hoTen}</td>
					<td>{sv.sdt}</td>
					<td>{sv.email}</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="mt-3">
				<div className="bg-dark text-light">
					<h3>Danh sách sinh viên</h3>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>Mã sinh viên</th>
							<th>Họ tên</th>
							<th>Số điện thoại</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>{this.renderTableSinhVien()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
	};
};

export default connect(mapStateToProps, null)(TableSinhVien);
