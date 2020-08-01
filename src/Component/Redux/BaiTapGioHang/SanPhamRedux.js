import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
	render() {
		let { sp } = this.props;
		return (
			<div className="card text-left">
				<img className="card-img-top" src={sp.hinhAnh} alt="" />
				<div className="card-body">
					<h4 className="card-title">{sp.tenSP}</h4>
					<p className="card-text">{sp.giaBan}</p>
					<button
						onClick={() => {
							this.props.themGioHang(sp);
						}}
					>
						Thêm vào giỏ
					</button>
				</div>
			</div>
		);
	}
}

//xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
	return {
		//tạo ra component (là function đưa dữ liệu lên store)
		themGioHang: (sp) => {
			let spGioHang = {
				maSP: sp.maSP,
				tenSP: sp.tenSP,
				giaBan: sp.giaBan,
				soLuong: 1,
				hinhAnh: sp.hinhAnh,
			};
			//tạo action đưa dữ liệu lên reducer
			let action = {
				type: "THEM_GIO_HANG", //bắt buộc
				spGioHang: spGioHang, // nội dung gửi lên reducer
			};
			console.log(action);
			//dùng hàm dispatch đưa dữ liệu lên reducer
			dispatch(action);
		},
	};
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
