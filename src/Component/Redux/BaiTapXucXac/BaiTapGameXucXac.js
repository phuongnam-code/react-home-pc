import React, { Component } from "react";
import styled from "./fontGameXucXac.module.css";
import BanCuoc from "./BanCuoc";
import KetQua from "./KetQua";

export default class BaiTapGameXucXac extends Component {
	render() {
		return (
			<div className={`${styled.configDiv_container} ${styled.fontGameXucXac}`}>
				<h1 className="display-3 my-3">Bài tập game xúc xắc</h1>
				<BanCuoc />
				<KetQua />
			</div>
		);
	}
}
