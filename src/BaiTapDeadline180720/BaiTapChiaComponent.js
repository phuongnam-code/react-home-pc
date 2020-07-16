import React, { Component } from "react";
import HeaderComponent from "./Component/HeaderComponent";
import ContentComponent from "./Component/ContentComponent";
import FooterComponent from "./Component/FooterComponent";

export default class BaiTapChiaComponent extends Component {
	render() {
		return (
			<div>
				<HeaderComponent />
				<ContentComponent />
				<FooterComponent />
			</div>
		);
	}
}
