import React, { Component } from "react";
import dataPhone from "./../../data/dataPhone.json";
import DSSanPham from "./DSSanPham";

export default class BaiTapDemoProps extends Component {
	render() {
		console.log(dataPhone);
		return (
			<div className="container">
				<DSSanPham mangSanPham={dataPhone} />
			</div>
		);
	}
}
