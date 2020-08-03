import React, { Component } from "react";
import styled from "./fontGameXucXac.module.css";
import { connect } from "react-redux";

class BanCuoc extends Component {
	eventClick = (functionClicked) => {
		let configCSS = styled.btnClick;
		<style>{configCSS}</style>;
		return functionClicked;
	};
	render() {
		return (
			<div className="container" style={{ position: "relative" }}>
				<div className="row">
					<div className={`col-4`}>
						<button
							className={`btn btn-dark display-4 bg-danger ${styled.config_BanCuoc_btn}`}
							style={{ left: "10%" }}
							onClick={() => this.eventClick(this.props.selectTaiXiu(true, true))}
						>
							Tài
						</button>
					</div>
					<div className={`col-4`}>
						<div className={` ${styled.config_Div_xucXac} `}>
							<img src={this.props.mangXucXac[0].img} width="15%" alt="" style={{ margin: "0px 3px", borderRadius: "5px" }} />
							<img src={this.props.mangXucXac[1].img} width="15%" alt="" style={{ margin: "0px 3px", borderRadius: "5px" }} />
							<img src={this.props.mangXucXac[2].img} width="15%" alt="" style={{ margin: "0px 3px", borderRadius: "5px" }} />
						</div>
					</div>
					<div className={`col-4`}>
						<button
							className={`btn display-4 bg-warning ${styled.config_BanCuoc_btn}`}
							style={{ right: "10%" }}
							onClick={() => this.props.selectTaiXiu(false, true)}
						>
							Xỉu
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mangXucXac: state.XucXacReducer.mangXucXac,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectTaiXiu: (taiXiu, click) => {
			let action = {
				type: "TAI_XIU",
				taiXiu,
				click,
			};
			dispatch(action);
			console.log("dispatch:", action);
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);
