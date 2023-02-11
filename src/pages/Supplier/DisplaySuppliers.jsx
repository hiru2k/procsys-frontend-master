import { useNavigate } from "react-router-dom";
import useSuppliersList from "./supplier-list.hook";
import DataTable from "../../components/DataTable/DataTable";
import { Box, Fab, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const columns = [
	{ text: "Name" },
	{ text: "Address", sx: { textAlign: "center" } },
	{ text: "Phone", sx: { textAlign: "center" } },
	{ text: "Email", sx: { textAlign: "right" } },
];

function DisplaySuppliers() {
	const navigate = useNavigate();
	const { suppliers } = useSuppliersList();

	return (
		<Box mx={10}>
			<Typography variant="h3" textAlign="center" my={5}>
				Suppliers List
			</Typography>

			<DataTable
				columns={columns}
				rows={suppliers}
				onRowClick={(id) => navigate(`/suppliers/${id}`)}
			/>

			<Fab
				color="primary"
				aria-label="add"
				sx={{
					position: "fixed",
					bottom: 16,
					right: 16,
				}}
				onClick={() => navigate("/suppliers/create")}
			>
				<AddIcon />
			</Fab>
		</Box>
	);
}

export default DisplaySuppliers;
