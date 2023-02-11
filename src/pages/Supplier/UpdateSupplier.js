import React, { Component } from "react";
import axios from "axios";
import { blue } from "@material-ui/core/colors";

export default class EditSupplier extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supplierId: "",
			supplierName: "",
			supplierAddress: "",
			email: "",
			phone: "",
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			...this.state,
			[name]: value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const id = this.props.match.params.id;
		const { supplierId, supplierName, supplierAddress, email, phone } =
			this.state;

		const data = {
			supplierId: supplierId,
			supplierName: supplierName,
			supplierAddress: supplierAddress,
			email: email,
			phone: phone,
		};
		console.log(data);

		axios.put(`http://localhost:8000/suppdate/${id}`, data).then((res) => {
			if (res.data.success) {
				alert("Suppliers Updated Successfully");
				this.setState({
					supplierId: "",
					supplierName: "",
					supplierAddress: "",
					email: "",
					phone: "",
				});
			}
		});
	};

	componentDidMount() {
		const id = this.props.match.params.id;

		axios.get(`http://localhost:8000/supplierget/${id}`).then((res) => {
			if (res.data.success) {
				this.setState({
					supplierId: res.data.post.supplierId,
					supplierName: res.data.post.supplierName,
					supplierAddress: res.data.post.supplierAddress,
					email: res.data.post.email,
					phone: res.data.post.phone,
				});
				console.log(this.state);
			}
		});
	}

	render() {
		return (
			<div>
				<br />
				<center>
					<form
						style={{
							width: "550px",
							padding: "20px",
							background: " #eee6ff",
							borderRadius: "40px",
							borderLeft: "6px solid  #9666ff",
						}}
					>
						<center>
							<h3 style={{ color: blue[500] }}>
								Update Supplier Details{" "}
							</h3>
						</center>

						<label style={{ fontSize: "17px" }}>
							Supplier Id :{" "}
						</label>
						<br />
						<input
							class="form-control"
							id="supplierId"
							type="text"
							name="supplierId"
							value={this.state.supplierId}
							onChange={this.handleInputChange}
						/>

						<label style={{ fontSize: "17px" }}>
							Supplier name :{" "}
						</label>
						<br />
						<input
							class="form-control"
							id="supplierName"
							type="text"
							name="supplierName"
							value={this.state.supplierName}
							onChange={this.handleInputChange}
						/>
						<label style={{ fontSize: "17px" }}>
							Supplier Address :{" "}
						</label>
						<br />
						<input
							class="form-control"
							id="supplierAddress"
							type="text"
							name="supplierAddress"
							value={this.state.supplierAddress}
							onChange={this.handleInputChange}
						/>

						<label style={{ fontSize: "17px" }}> Email : </label>
						<br />
						<input
							class="form-control"
							id="email"
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
						<br />
						<label style={{ fontSize: "17px" }}>
							contact number:{" "}
						</label>
						<br />
						<input
							class="form-control"
							id="phone"
							type="text"
							name="phone"
							value={this.state.phone}
							onChange={this.handleInputChange}
						/>

						<br></br>

						<center>
							<button
								type="submit"
								onClick={this.onSubmit}
								class="btn btn-primary"
							>
								Update Data
							</button>
						</center>
						<br></br>

						<center>
							<button type="button" class="btn btn-primary">
								<a
									href="/Supplier/get"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									View Updates
								</a>
							</button>
						</center>
					</form>
				</center>
				<br />
			</div>
		);
	}
}
