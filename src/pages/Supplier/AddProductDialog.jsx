import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import useProductDialog from "./product-dialog.hook";

const AddProductDialog = ({ id, onClose, open }) => {
	const { product, isNew, handleChange, handleSubmit, deleteProduct } =
		useProductDialog(id, onClose);

	return (
		<Dialog open={open} onClose={onClose}>
			<Box component="form" onSubmit={handleSubmit}>
				<DialogTitle>Add a Product</DialogTitle>
				<DialogContent>
					<TextField
						margin="dense"
						name="name"
						label="Product Name"
						fullWidth
						onChange={handleChange}
						value={product.name}
						required
					/>

					<TextField
						margin="dense"
						name="price"
						label="Product Price"
						fullWidth
						onChange={handleChange}
						value={product.price}
						required
					/>
				</DialogContent>
				<DialogActions
					sx={{
						justifyContent: "space-between",
						px: 3,
					}}
				>
					<Button onClick={onClose} variant="outlined">
						Cancel
					</Button>
					{isNew ? (
						<Button variant="contained" type="submit">
							Create
						</Button>
					) : (
						<>
							<Button variant="contained" type="submit">
								Save
							</Button>
							<Button
								variant="outlined"
								onClick={deleteProduct}
								color="error"
							>
								Delete
							</Button>
						</>
					)}
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default AddProductDialog;
