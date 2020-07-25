import React, { Component } from "react";

export default class StateMethodDemo extends Component {
	isLogin;
	userName;

	constructor() {
		super();
		this.state = {
			isLogin: false,
			userName: "",
		};
	}

	login = () => {
		this.setState(
			{
				isLogin: true,
				userName: "Phương Nam",
			},
			() => {
				console.log(this.state);
				console.log(this.state.userName);
			}
		);
	};

	logout = () => {
		this.setState({
			isLogin: false,
			userName: "",
		});
	};

	render() {
		return (
			<div className="container">
				{this.state.isLogin ? (
					<div>
						Hello {this.state.userName}!
						<button onClick={this.logout} style={{ float: "right" }}>
							logOut
						</button>
					</div>
				) : (
					<button onClick={this.login}>logIn</button>
				)}
			</div>
		);
	}
}
