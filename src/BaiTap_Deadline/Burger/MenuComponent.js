import React, { Component } from "react";
import { connect } from "react-redux";

class MenuComponent extends Component {
	render() {
		let { prices, total, burgers } = this.props;
		return (
			<div>
				<h3>Chọn thức ăn</h3>
				<table className="table">
					<thead>
						<tr>
							<th>Thức ăn</th>
							<th>+ / -</th>
							<th>Đơn giá</th>
							<th>Thành tiền</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>salad</td>
							<td>
								<button className="btn btn-primary mr-1" onClick={() => this.props.tangGiamSoLuong("salad", true)}>
									+
								</button>
								<span>{burgers.salad}</span>
								<button className="btn btn-success ml-1" onClick={() => this.props.tangGiamSoLuong("salad", false)}>
									-
								</button>
							</td>
							<td>{prices.salad}$</td>
							<td>{burgers.salad * 3}$</td>
						</tr>
						<tr>
							<td>cheese</td>
							<td>
								<button className="btn btn-primary mr-1" onClick={() => this.props.tangGiamSoLuong("cheese", true)}>
									+
								</button>
								<span>{burgers.cheese}</span>
								<button className="btn btn-success ml-1" onClick={() => this.props.tangGiamSoLuong("cheese", false)}>
									-
								</button>
							</td>
							<td>{prices.cheese}$</td>
							<td>{burgers.cheese * 3}$</td>
						</tr>
						<tr>
							<td>beef</td>
							<td>
								<button className="btn btn-primary mr-1" onClick={() => this.props.tangGiamSoLuong("beef", true)}>
									+
								</button>
								<span>{burgers.beef}</span>
								<button className="btn btn-success ml-1" onClick={() => this.props.tangGiamSoLuong("beef", false)}>
									-
								</button>
							</td>
							<td>{prices.beef}$</td>
							<td>{burgers.beef * 5}$</td>
						</tr>
						<tr>
							<td></td>
							<th>Tổng tiền: </th>
							<td></td>
							<td style={{ fontWeight: "bold", fontSize: "22px", color: "red" }}>
								{burgers.beef * 5 + burgers.cheese * 3 + burgers.salad * 3}$
							</td>
						</tr>
					</tbody>
					<tfoot style={{ textAlign: "right" }}>
						<tr>
							<th colSpan="4">
								<button className="btn btn-dark">Thanh toán</button>
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProp = (state) => {
	return {
		prices: state.BurgerReducer.price,
		total: state.BurgerReducer.total,
		burgers: state.BurgerReducer.burger,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		tangGiamSoLuong: (burger, tangGiam) => {
			let action = {
				type: "TANG_GIAM_SO_LUONG_BURGER",
				burger,
				tangGiam,
			};
			dispatch(action);
		},
	};
};

export default connect(mapStateToProp, mapDispatchToProps)(MenuComponent);
