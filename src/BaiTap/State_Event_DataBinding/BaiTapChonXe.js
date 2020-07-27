import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
	state = {
		img: "./img/black-car.jpg",
	};

	chooseCar = (color) => {
		let imgSrc = "";
		switch (color) {
			case "black":
				imgSrc = "./img/black-car.jpg";
				break;
			case "red":
				imgSrc = "./img/red-car.jpg";
				break;
			case "steel":
				imgSrc = "./img/steel-car.jpg";
				break;

			case "silver":
				imgSrc = "./img/silver-car.jpg";
				break;
			default:
				break;
		}
		console.log(color);
		this.setState({
			img: imgSrc,
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Bài tập chọn xe</h1>
				<div class="row my-3">
					<div className="col-7 ">
						<img src={this.state.img} alt width="100%" />
						<p>
							<strong>Honda Civic</strong>
						</p>
					</div>
					<div className="col-5 mt-5">
						<button className="mr-2" onClick={() => this.chooseCar("black")}>
							<img src="./img/icon-black.jpg" alt width="30px" />
							black
						</button>
						<button className="mr-2" onClick={() => this.chooseCar("red")}>
							<img src="./img/icon-red.jpg" alt width="30px" />
							red
						</button>
						<button className="mr-2" onClick={() => this.chooseCar("steel")}>
							<img src="./img/icon-steel.jpg" alt width="30px" />
							steel
						</button>
						<button className="mr-2" onClick={() => this.chooseCar("silver")}>
							<img src="./img/icon-silver.jpg" alt width="30px" />
							silver
						</button>
					</div>
				</div>
			</div>
		);
	}
}
