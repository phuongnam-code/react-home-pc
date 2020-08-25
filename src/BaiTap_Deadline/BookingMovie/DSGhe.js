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
		return listGhe.map((ghe, index) => {
			if (ghe.daDat) {
				return (
					<td key={index}>
						<button className={styleCSS.gheDuocChon} disabled>
							X
						</button>
					</td>
				);
			}
			let indexGheDD = this.props.gheDaDat.findIndex((gheDD) => {
				return gheDD.soGhe === ghe.soGhe;
			});
			return (
				<td key={index}>
					<button className={`${styleCSS.ghe} ${indexGheDD !== -1 ? styleCSS.gheDangChon : ""}`} onClick={() => this.props.chonGhe(ghe)}>
						{ghe.soGhe}
					</button>
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
		gheDaDat: state.BookingMovieReducer.gheDaDat,
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
