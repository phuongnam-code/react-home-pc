import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
	state = {
		values: {
			maSV: "",
			hoTen: "",
			sdt: "",
			email: "",
		},
		errors: {
			maSV: "",
			hoTen: "",
			sdt: "",
			email: "",
		},
		valid: false,
	};

	handleChange = (event) => {
		let tagInput = event.target;
		let { name, value, type } = tagInput;

		let errorMessage = "";
		if (value.trim() === "") {
			errorMessage = name + " không được để trống!";
		}
		if (type === "email") {
			let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!regexEmail.test(value)) {
				errorMessage = name + " không đúng định dạng!";
			}
		}

		let values = { ...this.state.values, [name]: value };
		let errors = { ...this.state.errors, [name]: errorMessage };
		this.setState(
			{
				values: values,
				errors: errors,
			},
			() => {
				this.checkValid();
			}
		);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.themSinhVien(this.state);
	};

	checkValid = () => {
		let valid = true;
		for (const key in this.state.errors) {
			if (this.state.errors[key] !== "" || this.state.values[key] === "") {
				valid = false;
			}
		}

		this.setState({
			...this.state,
			valid: valid,
		});
	};

	render() {
		return (
			<div>
				<div className="bg-dark text-light">
					<h3>Thông tin sinh viên</h3>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="maSV">Mã sinh viên</label>
								<input
									type="text"
									className="form-control"
									name="maSV"
									id="maSV"
									onChange={this.handleChange}
									value={this.state.values.maSV}
								/>
								<small id="helpId" className="form-text text-danger ">
									{this.state.errors.maSV}
								</small>
							</div>
							<div className="form-group">
								<label htmlFor="hoTen">Họ tên sinh viên</label>
								<input
									type="text"
									className="form-control"
									name="hoTen"
									id="hoTen"
									onChange={this.handleChange}
									value={this.state.values.hoTen}
								/>
								<small id="helpId" className="form-text text-danger ">
									{this.state.errors.hoTen}
								</small>
							</div>
						</div>
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="sdt">SĐT sinh viên</label>
								<input
									type="number"
									className="form-control"
									name="sdt"
									id="sdt"
									onChange={this.handleChange}
									value={this.state.values.sdt}
								/>
								<small id="helpId" className="form-text text-danger ">
									{this.state.errors.sdt}
								</small>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email sinh viên</label>
								<input
									type="email"
									className="form-control"
									name="email"
									id="email"
									onChange={this.handleChange}
									value={this.state.values.email}
								/>
								<small id="helpId" className="form-text text-danger ">
									{this.state.errors.email}
								</small>
							</div>
						</div>
					</div>
					<div className="text-left">
						{this.state.valid ? (
							<button type="submit" className="btn btn-primary">
								Thêm sinh viên
							</button>
						) : (
							<button type="submit" className="btn btn-primary" disabled>
								Thêm sinh viên
							</button>
						)}
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		themSinhVien: (sv) => {
			let action = {
				type: "THEM_SINH_VIEN",
				sv,
			};
			console.log(action);
			dispatch(action);
		},
	};
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
