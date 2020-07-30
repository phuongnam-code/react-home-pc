import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DSSanPham extends Component {
	constructor(props) {
		super(props);
		this.state = {
			xemChiTiet: this.props.dsSanPham_Props[0],
		};
	}

	renderSP = () => {
		return this.props.dsSanPham_Props.map((sp, index) => {
			return (
				<div className="col-4" key={index}>
					<SanPham sanPham={sp} xemChiTiet={this.xemChiTiet} themGioHang={this.props.themGioHang} />
				</div>
			);
		});
	};

	xemChiTiet = (sanPham) => {
		console.log(sanPham);
		this.setState({
			xemChiTiet: sanPham,
		});
	};

	render() {
		let { xemChiTiet } = this.state;
		return (
			<div>
				<div className="row mb-4">{this.renderSP()}</div>
				<h2>Thông tin cấu hình</h2>
				<div className="row mt-4">
					<div className="col-5">
						<img src={xemChiTiet.hinhAnh} width="90%" alt="" />
					</div>
					<div className="col-7">
						<h4>{this.state.xemChiTiet.tenSP}</h4>
						<table className="table">
							<thead>
								<tr>
									<th className="text-left" width="30%">
										Màn hình
									</th>
									<td>{xemChiTiet.manHinh}</td>
								</tr>
								<tr>
									<th className="text-left" width="30%">
										Hệ điều hành
									</th>
									<td>{xemChiTiet.heDieuHanh}</td>
								</tr>
								<tr>
									<th className="text-left" width="30%">
										Camera sau
									</th>
									<td>{xemChiTiet.cameraSau}</td>
								</tr>
								<tr>
									<th className="text-left" width="30%">
										Camera trước
									</th>
									<td>{xemChiTiet.cameraTruoc}</td>
								</tr>
								<tr>
									<th className="text-left" width="30%">
										RAM
									</th>
									<td>{xemChiTiet.ram}</td>
								</tr>
								<tr>
									<th className="text-left" width="30%">
										ROM
									</th>
									<td style={{ borderBottom: "1px solid #dee2e6" }}>{xemChiTiet.rom}</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
