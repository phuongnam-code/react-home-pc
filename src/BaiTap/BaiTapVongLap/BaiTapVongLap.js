import React, { Component } from "react";

export default class BaiTapVongLap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mangSanPham: [
				{ id: 1, name: "iPhoneX", price: 1200 },
				{ id: 2, name: "Samsung", price: 1000 },
				{ id: 3, name: "LG", price: 700 },
				{ id: 4, name: "Huawei", price: 900 },
			],
		};
	}

	renderSanPham = () => {
		return this.state.mangSanPham.map((sp, index) => {
			return (
				<tr key={index}>
					<td>{sp.id}</td>
					<td>{sp.name}</td>
					<td>{sp.price}</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Bài tập vòng lặp</h1>
				<table class="table">
					<thead>
						<tr>
							<th>ID SP</th>
							<th>Tên SP</th>
							<th>Giá bán</th>
						</tr>
					</thead>
					<tbody>{this.renderSanPham()}</tbody>
				</table>
			</div>
		);
	}
}
