import React, { Component } from "react";

export default class DataBindingDemo extends Component {
	trungTam = "Cyber Soft";
	lop = "Frontend 44";
	hoTen = "Đức Nam";

	render() {
		return (
			<div>
				<ul className="container">
					<li>{this.trungTam}</li>
					<li>{this.lop}</li>
					<li>{this.hoTen}</li>
				</ul>
			</div>
		);
	}
}
