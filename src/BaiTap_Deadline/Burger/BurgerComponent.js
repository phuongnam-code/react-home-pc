import React, { Component } from "react";
import styleCSS from "./burgerCSS.module.css";
import { connect } from "react-redux";

class BurgerComponent extends Component {
	renderBurger = () => {
		let burgerContent = [];
		for (let i = 0; i < this.props.burger.salad; i++) {
			burgerContent.push(<div className={styleCSS.salad} key={burgerContent.length}></div>);
		}
		for (let i = 0; i < this.props.burger.cheese; i++) {
			burgerContent.push(<div className={styleCSS.cheese} key={burgerContent.length}></div>);
		}
		for (let i = 0; i < this.props.burger.beef; i++) {
			burgerContent.push(<div className={styleCSS.beef} key={burgerContent.length}></div>);
		}
		console.log(burgerContent);
		console.log(typeof burgerContent[0]);
		return burgerContent;
	};
	render() {
		return (
			<div>
				<h3>Bánh burger</h3>
				<div className="box">
					<div className={styleCSS.breadTop}></div>
					<div>Thêm thức ăn</div>
					{this.renderBurger()}
					{/* <div className={styleCSS.salad}></div>
					<div>Thêm thức ăn</div>
					<div className={styleCSS.cheese}></div>
					<div className={styleCSS.beef}></div> */}
					<div className={styleCSS.breadBottom}></div>
				</div>
			</div>
		);
	}
}

const mapStateToProp = (state) => {
	return {
		burger: state.BurgerReducer.burger,
	};
};

export default connect(mapStateToProp, null)(BurgerComponent);
