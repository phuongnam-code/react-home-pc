import React, { Component } from "react";
//kết nối redux (connect hàm kết nối reactComponent - reduxStore)
import { connect } from "react-redux";

class GioHangRedux extends Component {
	renderGioHang = () => {
		return this.props.gioHang.map((sp, index) => {
			return (
				<tr key={index}>
					<td>{sp.maSP}</td>
					<td>{sp.tenSP}</td>
					<td width="10%">
						<img src={sp.hinhAnh} width="100%" alt="" />
					</td>
					<td>{sp.giaBan.toLocaleString()}</td>
					<td>
						<button onClick={() => this.props.tangGiamSoLuong(sp.maSP, true)}>+</button>
						{sp.soLuong}
						<button onClick={() => this.props.tangGiamSoLuong(sp.maSP, false)}>-</button>
					</td>
					<td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
					<td>
						<button
							onClick={() => {
								this.props.xoaGioHang(sp.maSP);
							}}
						>
							Xóa
						</button>
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="mt-5">
				<h3>Sản phẩm trong giỏ hàng</h3>
				<table className="table">
					<thead>
						<tr>
							<th>Mã</th>
							<th>Tên</th>
							<th>Hình ảnh</th>
							<th>Giá Bán</th>
							<th>Số lượng</th>
							<th>Thành tiền</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{this.renderGioHang()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//state là store tổng => truy xuất đến GioHangReducer =>biến state trên GioHangReducer
	return {
		gioHang: state.GioHangReducer.gioHang, //tạo ra 1 props của component GioHangRedux
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		xoaGioHang: (maSanPham) => {
			//tạo action đưa dữ liệu lên reducer
			let action = {
				type: "XOA_GIO_HANG", //bắt buộc
				maSanPham, // nội dung gửi lên reducer
			};
			console.log(action);
			//dùng hàm dispatch đưa dữ liệu lên reducer
			dispatch(action);
		},
		tangGiamSoLuong: (maSanPham, tangGiam) => {
			let action = {
				type: "TANG_GIAM_SL", //bắt buộc
				tangGiam,
				maSanPham, // nội dung gửi lên reducer
			};
			console.log(action);
			//dùng hàm dispatch đưa dữ liệu lên reducer
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
