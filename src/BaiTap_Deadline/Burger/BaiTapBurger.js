import React, { Component } from "react";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";

export default class BaiTapBurger extends Component {
	render() {
		return (
			<div className="container">
				<h1>Bài tập Burger</h1>
				<div className="row">
					<div className="col-6 pt-2">
						<BurgerComponent />
					</div>
					<div className="col-6 pt-2">
						<MenuComponent />
					</div>
				</div>
			</div>
		);
	}
}
