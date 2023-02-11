import { Add as AddIcon } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import AddProductDialog from "./AddProductDialog";
import useProductsList from "./products-list.hook";

const columns = [
	{ text: "Name" },
	{ text: "Unit Price", sx: { textAlign: "right" } },
	{ text: "Amount", sx: { textAlign: "right" } },
];

const initDialogSate = {
	open: false,
	id: null,
};

const ProductsView = () => {
	const [dialogState, setDialogState] = useState(initDialogSate);
	const { products, loadProducts } = useProductsList();

	return (
		<>
			<Box>
				<Typography variant="h4" textAlign="center" my={5}>
					Products List
				</Typography>

				<Box mx={40}>
					<DataTable
						columns={columns}
						rows={products}
						onRowClick={(id) => setDialogState({ open: true, id })}
					/>
				</Box>
				<Fab
					color="primary"
					aria-label="add"
					sx={{
						position: "fixed",
						bottom: 16,
						right: 16,
					}}
					onClick={() => setDialogState({ open: true, id: null })}
				>
					<AddIcon />
				</Fab>
			</Box>

			<AddProductDialog
				open={dialogState.open}
				id={dialogState.id}
				onClose={() => {
					setDialogState(initDialogSate);
					loadProducts();
				}}
			/>
		</>
	);
};

export default ProductsView;
