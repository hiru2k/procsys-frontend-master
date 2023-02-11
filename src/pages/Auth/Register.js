import React, { useState } from "react";
import axios from "axios";

function Register() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const registerSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/user/register", { ...user });

			localStorage.setItem("firstLogin", true);

			window.location.href = "/";
		} catch (err) {
			alert(err.response.data.msg);
		}
	};

	return (
		<div
			class="w3-card-4 w3-margin"
			style={{ width: "1400px", height: "100%" }}
		>
			<table id="customers1" style={{ marginTop: "40px" }}>
				<thead>
					<tr>
						<th scope="col" style={{ width: "150px" }}>
							<img
								height="560px"
								style={{
									marginTop: "25px",
									width: "1000px",
									marginLeft: "200px",
								}}
								src={"/static/images/login1.jpg"}
								alt="yo yo"
							/>

							<br />
						</th>

						<div
							className="chge"
							style={{ marginLeft: "300px", marginTop: "100px" }}
						>
							<th scope="col" style={{ width: "160px" }}>
								<div className="login-page">
									<div id="log">
										<form
											onSubmit={registerSubmit}
											style={{
												maxWidth: "500px",
												margin: "auto",
											}}
										>
											<h2
												style={{
													color: "white",
													fontWeight: "4px",
												}}
											>
												Register Form
											</h2>
											<div class="input-container">
												<i class="fa fa-envelope icon"></i>
												<input
													type="name"
													name="name"
													required
													placeholder="Name"
													value={user.name}
													onChange={onChangeInput}
												/>
											</div>

											<div class="input-container">
												<i class="fa fa-asterisk icon"></i>
												<input
													type="email"
													name="email"
													required
													autoComplete="on"
													placeholder="Email"
													value={user.email}
													onChange={onChangeInput}
												/>
											</div>

											<div class="input-container">
												<i class="fa fa-asterisk icon"></i>
												<input
													type="password"
													name="password"
													required
													autoComplete="on"
													placeholder="Password"
													value={user.password}
													onChange={onChangeInput}
												/>
											</div>

											<span class="psw">
												<a
													style={{
														marginLeft: "380px",
														fontWeight: "normal",
													}}
													href="/login"
												>
													Login
												</a>
											</span>
											<div className="row">
												<button
													type="submit"
													id="btn_view"
													style={{
														backgroundColor:
															"#151E3D",
														color: "white",
														borderColor: "black",
														marginLeft: "20px",
														width: "400px",
														height: "50px",
														marginTop: "10px",
													}}
												>
													Register
												</button>
											</div>
										</form>
									</div>
								</div>
							</th>
						</div>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default Register;
