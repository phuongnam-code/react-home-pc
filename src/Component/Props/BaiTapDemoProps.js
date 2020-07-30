import React, { Component } from "react";
import DSSanPham from "./DSSanPham";
import GioHang from "./GioHang";

export default class BaiTapDemoProps extends Component {
	dsSanPham = [
		{
			maSP: 1,
			tenSP: "VinSmart Live",
			manHinh: "AMOLED, 6.2, Full HD+",
			heDieuHanh: "Android 9.0 (Pie)",
			cameraTruoc: "20 MP",
			cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 5700000,
			hinhAnh: "./img/vsphone.jpg",
		},
		{
			maSP: 2,
			tenSP: "Meizu 16Xs",
			manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
			heDieuHanh: "Android 9.0 (Pie); Flyme",
			cameraTruoc: "20 MP",
			cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 7600000,
			hinhAnh: "./img/meizuphone.jpg",
		},
		{
			maSP: 3,
			tenSP: "Iphone XS Max",
			manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
			heDieuHanh: "iOS 12",
			cameraSau: "Chính 12 MP & Phụ 12 MP",
			cameraTruoc: "7 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 27000000,
			hinhAnh: "./img/applephone.jpg",
		},
	];

	constructor(props) {
		super(props);
		this.state = {
			gioHang: [
				{
					maSP: 3,
					tenSP: "Iphone XS Max",
					soLuong: 1,
					giaBan: 27000000,
					hinhAnh: "./img/applephone.jpg",
				},
			],
		};
	}

	themGioHang = (spClick) => {
		console.log(spClick);
		//từ sp được click tạo ta sp trong giỏ hàng
		let spGH = {
			maSP: spClick.maSP,
			tenSP: spClick.tenSP,
			soLuong: 1,
			giaBan: spClick.giaBan,
			hinhAnh: spClick.hinhAnh,
		};
		//kiểm tra spclick đã có trong giỏ hay chưa?
		let gioHangCapNhat = [...this.state.gioHang];
		let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spClick.maSP);

		if (index !== -1) {
			//nếu spclick đã có trong giỏ thì tăng soLuong lên
			gioHangCapNhat[index].soLuong += 1;
		} else {
			//nếu chưa có trong giỏ, thêm sp vào giỏ hàng
			gioHangCapNhat.push(spGH);
		}
		this.setState({
			gioHang: gioHangCapNhat,
		});
	};

	xoaItemGioHang = (maSanPham) => {
		// let gioHangCapNhat = [...this.state.gioHang];
		// let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSanPham);
		// if (index !== -1) {
		// 	gioHangCapNhat.splice(index, 1);
		// }

		let gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSanPham);

		this.setState({
			gioHang: gioHangCapNhat,
		});
	};

	tangGiamSL = (maSanPham, tangGiam) => {
		let gioHangCapNhat = [...this.state.gioHang];
		let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSanPham);
		if (index !== -1) {
			if (tangGiam) {
				gioHangCapNhat[index].soLuong += 1;
			} else {
				if (gioHangCapNhat[index].soLuong > 1) {
					gioHangCapNhat[index].soLuong -= 1;
				} else {
					alert("Số lượng tối thiểu là 1");
				}
			}
		}
		this.setState({
			gioHang: gioHangCapNhat,
		});
	};

	render() {
		let tongSoLuong = this.state.gioHang.reduce((tongSL, sp, index) => {
			return (tongSL += sp.soLuong);
		}, 0);
		return (
			<div className="container">
				<h1>Danh sách điên thoại</h1>
				<GioHang gioHangState={this.state.gioHang} xoaItemGioHang={this.xoaItemGioHang} tangGiamSL={this.tangGiamSL} />
				<div className="text-right">
					<span style={{ cursor: "pointer" }} data-toggle="modal" data-target="#modelId">
						Giỏ hàng ({tongSoLuong})
					</span>
				</div>
				<DSSanPham dsSanPham_Props={this.dsSanPham} themGioHang={this.themGioHang} />
			</div>
		);
	}
}
