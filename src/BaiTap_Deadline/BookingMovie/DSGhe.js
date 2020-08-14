import React, { Component } from "react";
import styleCSS from "./data/BaiTapBookingTicket.module.css";
import { connect } from "react-redux";

class DSGhe extends Component {
	renderGhe = () => {
		return this.props.dsGhe.map((ghe, index) => {
			// console.log(this.props.dsGhe);
			return (
				<tr key={index}>
					<td>{ghe.hang}</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 1} onClick={() => this.props.chonGhe(ghe.hang + 1)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 2} onClick={() => this.props.chonGhe(ghe.hang + 2)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 3} onClick={() => this.props.chonGhe(ghe.hang + 3)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 4} onClick={() => this.props.chonGhe(ghe.hang + 4)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 5} onClick={() => this.props.chonGhe(ghe.hang + 5)} />
					</td>
					<td></td> {/** */}
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 6} onClick={() => this.props.chonGhe(ghe.hang + 6)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 7} onClick={() => this.props.chonGhe(ghe.hang + 7)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 8} onClick={() => this.props.chonGhe(ghe.hang + 8)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 9} onClick={() => this.props.chonGhe(ghe.hang + 9)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 10} onClick={() => this.props.chonGhe(ghe.hang + 10)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 11} onClick={() => this.props.chonGhe(ghe.hang + 11)} />
					</td>
					<td>
						<input type="checkbox" className="seats" value={ghe.hang + 12} onClick={() => this.props.chonGhe(ghe.hang + 12)} />
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="col-7">
				<h4 className={styleCSS.fontBookingMovie}>Màn hình</h4>
				<div className={styleCSS.screen}></div>
				<table className="table">
					<tbody>
						<tr>
							<td></td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td></td> {/** */}
							<td>6</td>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>10</td>
							<td>11</td>
							<td>12</td>
						</tr>
						{this.renderGhe()}
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
		chonGhe: (viTriGhe) => {
			let gheDuocChon = {
				soGhe: viTriGhe,
				gia: 75000,
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
