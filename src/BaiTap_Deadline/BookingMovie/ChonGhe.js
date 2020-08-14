import React, { Component } from "react";
import styleCSS from "./data/BaiTapBookingTicket.module.css";
import { connect } from "react-redux";

class ChonGhe extends Component {
	render() {
		return (
			<div className={`col-5 ${styleCSS.fontBookingMovie}`}>
				<h4 className={styleCSS.fontBookingMovie}>Danh sách ghế bạn chọn</h4>
				<div style={{ textAlign: "left", marginTop: "20px", display: "flex", alignItems: "center" }}>
					<span className={styleCSS.ghe} style={{ display: "inline-block", marginRight: "10px" }}></span>
					<span>Ghế trống</span>
				</div>
				<div style={{ textAlign: "left", marginTop: "20px", display: "flex", alignItems: "center" }}>
					<span className={styleCSS.gheDuocChon} style={{ display: "inline-block", marginRight: "10px" }}></span>
					<span>Ghế đã đặt</span>
				</div>
				<div style={{ textAlign: "left", marginTop: "20px", display: "flex", alignItems: "center" }}>
					<span className={styleCSS.gheDangChon} style={{ display: "inline-block", marginRight: "10px" }}></span>
					<span>Ghế đang chọn</span>
				</div>
				<table className="table mt-4">
					<thead>
						<tr>
							<th>Số ghế</th>
							<th>Giá</th>
							<th>Hủy</th>
						</tr>
					</thead>
					<tbody>
						{this.props.gheDaDat.map((ghe, index) => {
							return (
								<tr key={index}>
									<td>{ghe.soGhe}</td>
									<td>{ghe.gia.toLocaleString()}</td>
									<td>
										<button className="btn text-danger" style={{ fontSize: "25px" }} onClick={() => this.props.huyGhe(ghe.soGhe)}>
											X
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td>Tổng tiền</td>
							<td colSpan="2">0</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		gheDaDat: state.BookingMovieReducer.gheDaDat,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		huyGhe: (viTriGhe) => {
			let action = {
				type: "HUY_GHE",
				viTriGhe,
			};
			dispatch(action);
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ChonGhe);
