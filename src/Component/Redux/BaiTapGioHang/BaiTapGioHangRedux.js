import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import DSSanPhamRedux from "./DSSanPhamRedux";

export default class BaiTapGioHangRedux extends Component {
	render() {
		return (
			<div className="">
				<h1>Bài tập giỏ hàng Redux</h1>
				<div class="row">
					<div className="col-6">
						<DSSanPhamRedux />
					</div>
					<div className="col-6">
						<GioHangRedux />
					</div>
				</div>
			</div>
		);
	}
}
