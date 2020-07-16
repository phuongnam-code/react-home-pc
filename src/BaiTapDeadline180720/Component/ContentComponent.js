import React, { Component } from "react";
import Carousel from "./ContenComponent/Carousel";
import CardGridBootstrap from "./ContenComponent/CardGridBootstrap";

export default class ContentComponent extends Component {
	render() {
		return (
			<div className="container pt-4">
				<Carousel />
				<CardGridBootstrap />
			</div>
		);
	}
}
