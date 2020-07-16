import React, { Component } from "react";
import CardItem from "./CardItem";

export default class CardGridBootstrap extends Component {
	render() {
		return (
			<div className="row text-center">
				<div className="col-lg-3 col-md-6 mb-4">
					<CardItem />
				</div>
				<div className="col-lg-3 col-md-6 mb-4">
					<CardItem />
				</div>
				<div className="col-lg-3 col-md-6 mb-4">
					<CardItem />
				</div>
				<div className="col-lg-3 col-md-6 mb-4">
					<CardItem />
				</div>
			</div>
		);
	}
}
