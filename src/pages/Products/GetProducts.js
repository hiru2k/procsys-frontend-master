import React, { Component } from "react";
import axios from "axios";

export default class GetProducts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			payments: [],
		};
	}

	componentDidMount() {
		this.retrivePayments();
	}

	retrivePayments() {
		axios.get("/api/products").then((res) => {
			if (res.data.success) {
				this.setState({
					payments: res.data.products,
				});

				console.log(this.state.payments);
			}
		});
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div>
							<div
								className="textcenter"
								style={{ marginTop: "40px" }}
							>
								<h4>Employee Payment xxxSummary</h4>
							</div>
							<hr />

							<div class="card2" id="content">
								<div class="container">
									<form
										className="needs-validation"
										noValidate
									>
										<div
											className="form-group"
											style={{ marginBottom: "15px" }}
										>
											<label
												style={{ marginBottom: "15px" }}
												class="form-label"
											></label>
											<input
												style={{
													backgroundColor:
														"LightCyan",
												}}
												type="text"
												className="form-control"
												placeholder="Enter Year"
											/>
										</div>
									</form>

									<div class="form-floating">
										<select
											class="form-select"
											id="floatingSelect"
											aria-label="Floating label select example"
											style={{
												backgroundColor: "LightCyan",
											}}
										>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="1">April</option>
											<option value="2">May</option>
											<option value="2">June</option>
											<option value="3">July</option>
											<option value="1">August</option>
											<option value="2">September</option>
											<option value="3">Octomber</option>
											<option value="1">November</option>
											<option value="2">December</option>
										</select>
										<label for="floatingSelect">
											Select Month
										</label>
									</div>

									<div className="col-lg-3 mt-2 mb-2"></div>
								</div>
								<table
									className="table table-hover"
									style={{ marginTop: "40px" }}
								>
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">uuu</th>
											<th scope="col">ggg</th>
										</tr>
									</thead>

									<tbody>
										{this.state.payments.map(
											(
												payments,
												index //used salaries array variable
											) => (
												<tr key={index}>
													<th scope="row">
														{index + 1}
													</th>

													<td
														style={{
															color: "darkblue",
															fontWeight: "bold",
														}}
													>
														{payments.title}
													</td>
													<td
														style={{
															color: "blue",
															fontWeight: "bold",
														}}
													>
														{payments.price}
													</td>

													<td></td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
