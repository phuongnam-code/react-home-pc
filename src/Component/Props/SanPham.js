import React, { Component } from "react";

export default class SanPham extends Component {
	render() {
		let { sanPham, themGioHang } = this.props;
		return (
			<div className="card text-left">
				<img className="card-img-top" src={sanPham.hinhAnh} alt="" />
				<div className="card-body">
					<h4 className="card-title">{sanPham.tenSP}</h4>
					<p className="card-text">Giá: {sanPham.giaBan}</p>
					<button className="btn btn-primary mr-2" onClick={() => this.props.xemChiTiet(sanPham)}>
						Xem chi tiết
					</button>
					<button className="btn btn-primary" onClick={() => themGioHang(sanPham)}>
						Thêm vào giỏ
					</button>
				</div>
			</div>
		);
	}
}
