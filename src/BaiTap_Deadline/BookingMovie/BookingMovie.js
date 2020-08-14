import React, { Component } from "react";
import styleCSS from "./data/BaiTapBookingTicket.module.css";
import DSGhe from "./DSGhe";
import ChonGhe from "./ChonGhe";

export default class BookingMovie extends Component {
	render() {
		return (
			<div className={styleCSS.bgContainer}>
				<h1 className={styleCSS.fontBookingMovie} style={{ color: "orange" }}>
					ĐẶT VÉ XEM PHIM
				</h1>
				<div className="row">
					<DSGhe />
					<ChonGhe />
				</div>
			</div>
		);
	}
}
