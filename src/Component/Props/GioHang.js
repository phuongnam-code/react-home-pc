import React, { Component } from "react";

export default class GioHang extends Component {
	renderGioHang = () => {
		return this.props.gioHangState.map((sp, index) => {
			return (
				<tr key={index}>
					<td>{sp.maSP}</td>
					<td width="100px" height="150px">
						<img src={sp.hinhAnh} width="100%" alt="" />
					</td>
					<td>{sp.tenSP}</td>
					<td>
						<button onClick={() => this.props.tangGiamSL(sp.maSP, true)} className="mr-2">
							+
						</button>
						<span style={{ fontSize: "20px" }}>{sp.soLuong}</span>
						<button onClick={() => this.props.tangGiamSL(sp.maSP, false)} className="ml-2">
							-
						</button>
					</td>
					<td>{sp.giaBan.toLocaleString()}</td>
					<td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
					<td>
						<button className="btn btn-danger" onClick={() => this.props.xoaItemGioHang(sp.maSP)}>
							Xóa
						</button>
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content" style={{ width: "800px" }}>
						<div className="modal-header" style={{ borderBottom: "none", color: "red", justifyContent: "center" }}>
							<h2 className="modal-title">Sản phẩm trong giỏ</h2>
						</div>
						<div className="modal-body" style={{ paddingTop: "0px" }}>
							<table className="table">
								<thead>
									<tr>
										<th>Mã</th>
										<th>Hình ảnh</th>
										<th>Tên sản phẩm</th>
										<th>Số lượng</th>
										<th>Đơn giá</th>
										<th>Thành tiền</th>
									</tr>
								</thead>
								<tbody>{this.renderGioHang()}</tbody>
								<tfoot>
									<tr>
										<td colSpan="4"></td>
										<td>
											<strong>Tổng tiền</strong>
										</td>
										<td colSpan="2">
											{this.props.gioHangState
												.reduce((tongTien, sp) => {
													return (tongTien += sp.soLuong * sp.giaBan);
												}, 0)
												.toLocaleString()}
											<span> vnđ</span>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
						<div className="modal-footer" style={{ borderTop: "none" }}>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
