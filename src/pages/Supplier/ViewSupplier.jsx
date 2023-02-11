import "./CreateSupplier.css";
import { blue } from "@material-ui/core/colors";
import { OutlinedInput } from "@material-ui/core";
import { RateReview as RateReviewIcon } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import useSupplierUtils from "./hook";
import { useNavigate } from "react-router-dom";

export default function ViewSupplier() {
	const {
		supplier,
		handleSubmit,
		reset,
		handleChange,
		isNew,
		deleteSupplier,
	} = useSupplierUtils();
	const navigate = useNavigate();

	const title = isNew ? "Create Supplier" : "Edit Supplier";

	return (
		<form onSubmit={handleSubmit}>
			<Paper
				sx={{
					mt: 8,
					mx: "auto",
					p: 3,
					width: "70%",
				}}
			>
				<Typography variant="h4" color="blue" textAlign="center" mb={5}>
					{title}
					&nbsp;
					<RateReviewIcon
						fontSize="large"
						style={{ color: blue[500] }}
					/>
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						rowGap: 2,
					}}
				>
					<div className="col-md-12 mb-4">
						<div className="form-group">
							<OutlinedInput
								id="supplierName"
								placeholder="Supplier name"
								required
								fullWidth
								variant="outlined"
								onChange={handleChange}
								name="name"
								value={supplier.name}
								inputProps={{
									style: { padding: 12 },
								}}
							/>
						</div>
					</div>

					<div className="col-md-12 mb-4">
						<div className="form-group">
							<OutlinedInput
								id="supplierAddress"
								placeholder="Supplier addresss"
								required
								fullWidth
								variant="outlined"
								onChange={handleChange}
								name="address"
								value={supplier.address}
								inputProps={{
									style: { padding: 12 },
								}}
							/>
						</div>
					</div>

					<div className="col-md-12 mb-4">
						<div className="form-group">
							<OutlinedInput
								type="tel"
								id="phone"
								placeholder="Phone number"
								required
								fullWidth
								onChange={handleChange}
								name="phone"
								value={supplier.phone}
								inputProps={{
									style: { padding: 12 },
									pattern: "[0-9]{10}",
								}}
							/>
						</div>
					</div>

					<div className="col-md-12 mb-4">
						<div className="form-group">
							<OutlinedInput
								type="email"
								id="email"
								placeholder="Email"
								required
								fullWidth
								onChange={handleChange}
								name="email"
								value={supplier.email}
								inputProps={{
									style: { padding: 12 },
								}}
							/>
						</div>
					</div>
				</Box>

				<Box height={40} />

				<Box
					sx={{
						display: "flex",
						justifyContent: isNew ? "center" : "space-between",
						width: "100%",
					}}
				>
					{isNew ? (
						<Button variant="contained" type="submit">
							Create
						</Button>
					) : (
						<>
							<Button variant="outlined" onClick={reset}>
								Reset
							</Button>
							<Button variant="contained" type="submit">
								Update
							</Button>
							<Button
								variant="contained"
								color="error"
								onClick={deleteSupplier}
							>
								Delete
							</Button>
						</>
					)}
				</Box>
			</Paper>

			<Box height={30} />

			{!isNew && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
					onClick={() => navigate("products")}
				>
					<Button variant="outlined">View Products</Button>
				</Box>
			)}
		</form>
	);
}
