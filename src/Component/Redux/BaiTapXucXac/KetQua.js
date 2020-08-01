import React, { Component } from "react";
import styled from "./fontGameXucXac.module.css";
import { connect } from "react-redux";

class KetQua extends Component {
	render() {
		return (
			<div className={`${styled.content}`}>
				<button className={`${styled.playGame}`} onClick={() => this.props.doXucXac()}>
					Đổ xúc xắc
				</button>
				<p style={{ margin: "0" }}>
					Bạn chọn:<span style={{ color: "red", fontSize: "60px" }}> {this.props.banChon}</span>
				</p>
				<p style={{ margin: "0" }}>
					Số bàn thắng:<span style={{ color: "red", fontSize: "60px" }}> {this.props.soBanThang}</span>
				</p>
				<p style={{ margin: "0" }}>
					Tổng bàn chơi:<span style={{ color: "red", fontSize: "60px" }}> {this.props.soBanChoi}</span>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		banChon: state.XucXacReducer.banChon,
		soBanThang: state.XucXacReducer.soBanThang,
		soBanChoi: state.XucXacReducer.soBanChoi,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		doXucXac: () => {
			let action = {
				type: "DO_XUC_XAC",
			};
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
