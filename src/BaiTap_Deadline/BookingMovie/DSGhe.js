import React, { Component } from "react";
import styleCSS from "./data/BaiTapBookingTicket.module.css";
import { connect } from "react-redux";

class DSGhe extends Component {
	renderNumber = () => {
		let listGhe;
		let arrayTemp = this.props.dsGhe.slice(0, 1);
		// console.log(arrayTemp);
		arrayTemp.map((itemTemp) => {
			return (listGhe = itemTemp.danhSachGhe);
		});
		return listGhe.map((item, index) => {
			return <td key={index}>{item.soGhe}</td>;
		});
	};

	renderDSGhe = (listGhe) => {
		return listGhe.map((item, index) => {
			return (
				<td key={index}>
					{item.daDat === false ? (
						<button className={styleCSS.ghe} style={{ background: "white" }} onClick={() => this.props.chonGhe(item)}>
							{item.soGhe}
						</button>
					) : (
						<button className={styleCSS.gheDuocChon} disabled>
							{item.soGhe}
						</button>
					)}
				</td>
			);
		});
	};

	renderHangGhe = () => {
		return this.props.dsGhe.slice(1).map((ghe, index) => {
			return (
				<tr key={index}>
					<td>{ghe.hang}</td>
					{this.renderDSGhe(ghe.danhSachGhe)}
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="col-8">
				<h4 className={styleCSS.fontBookingMovie}>Màn hình</h4>
				<div className={styleCSS.screen}></div>
				<table className="table">
					<tbody>
						<td></td>
						{this.renderNumber()}
						{this.renderHangGhe()}
					</tbody>
				</table>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		dsGhe: state.BookingMovieReducer.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		chonGhe: (ghe) => {
			let gheDuocChon = {
				soGhe: ghe.soGhe,
				gia: ghe.gia,
				daDat: true,
			};
			let action = {
				type: "CHON_GHE",
				gheDuocChon,
			};
			dispatch(action);
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DSGhe);
