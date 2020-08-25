import React, { Component } from "react";
import styleCSS from "./Form.module.css";
import swal from "@sweetalert/with-react";
import { connect } from "react-redux";
import { addUserAction } from "../../redux/actions/actionForm";

class BaiTapForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: { ho: "", ten: "", taiKhoan: "", email: "", matKhau: "", re_matKhau: "" },
			errors: { ho: "", ten: "", taiKhoan: "", email: "", matKhau: "", re_matKhau: "" },
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		let { name, value, type } = event.target;

		let newValues = {
			...this.state.values,
			[name]: value,
		};

		let newErrors = {
			...this.state.errors,
			[name]: value.trim() === "" ? `${name} không được bỏ trống ` : "",
		};

		if (type === "email") {
			let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!regexEmail.test(value)) {
				newErrors[name] = name + " không hợp lệ!";
			}
		}
		if (name == "re_matKhau" && value != this.state.values.matKhau) {
			newErrors[name] = "Password nhập lại chưa đúng";
		}
		let newState = {
			values: newValues,
			errors: newErrors,
		};

		this.setState(newState);
	}

	handleSubmit(event) {
		event.preventDefault();

		let valid = true;

		for (const key in this.state.value) {
			if (this.state.values[key] !== "") {
				valid = false;
				break;
			}
		}

		for (const key in this.state.errors) {
			if (this.state.errors[key] !== "") {
				valid = false;
			}
		}

		if (!valid) {
			swal("Dữ liệu không hợp lệ!");
			return;
		}
		this.props.dispatch(addUserAction(this.state.values));
		swal(
			<div>
				<h1>Đăng kí thành công!</h1>
				<div className="row">
					<div className="col-3">
						<p>user: </p>
						<p>email: </p>
						<p>pass: </p>
					</div>
					<div className="col-3">
						<p>{this.state.values.taiKhoan}</p>
						<p>{this.state.values.email}</p>
						<p>{this.state.values.matKhau}</p>
					</div>
				</div>
			</div>
		);
	}

	render() {
		let { ho, ten, taiKhoan, email, matKhau, re_matKhau } = this.state.values;
		return (
			<div className={` ${styleCSS.wrap}`}>
				<div className={`card  ${styleCSS.card__config}`}>
					<h3 className="mb-3">THÔNG TIN NGƯỜI DÙNG</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<span className={styleCSS.__config50}>
								<input
									type="text"
									onChange={this.handleInputChange}
									className="form-control"
									name="ho"
									placeholder="Họ"
									value={ho}
									required
								/>
							</span>
							<span className={styleCSS.__config45}>
								<input
									type="text"
									onChange={this.handleInputChange}
									className="form-control"
									name="ten"
									placeholder="Tên"
									value={ten}
									required
								/>
							</span>
							<small className="text-danger">
								{this.state.errors.ho}
								{this.state.errors.ten}
							</small>
						</div>
						<div className="form-group my-3">
							<input
								type="text"
								onChange={this.handleInputChange}
								className="form-control"
								name="taiKhoan"
								placeholder="Tài khoản"
								value={taiKhoan}
								required
							/>
							<small className="text-danger">{this.state.errors.taiKhoan}</small>
						</div>
						<div className="form-group my-3">
							<input
								type="email"
								onChange={this.handleInputChange}
								className="form-control"
								name="email"
								placeholder="Email"
								value={email}
								required
							/>
							<small className="text-danger">{this.state.errors.email}</small>
						</div>
						<div className="form-group">
							<span className={styleCSS.__config50}>
								<input
									type="text"
									onChange={this.handleInputChange}
									className="form-control"
									name="matKhau"
									placeholder="Mậ khẩu"
									value={matKhau}
									required
								/>
							</span>
							<span className={styleCSS.__config45}>
								<input
									type="text"
									className="form-control"
									value={re_matKhau}
									name="re_matKhau"
									placeholder="Nhập lại mật khẩu"
									required
									onChange={this.handleInputChange}
								/>
							</span>
							<small className="text-danger">
								{this.state.errors.matKhau}
								{this.state.errors.re_matKhau}
							</small>
						</div>

						<button type="submit" className="btn btn-dark">
							Xác nhận
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		arrayInfoUser: state.FormReducer.arrayInfoUser,
	};
};

export default connect(mapStateToProps)(BaiTapForm);
