import { useNavigate } from "react-router-dom";
import DataTable from "../../components/DataTable/DataTable";
import { Box, Fab, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import useSitesList from "./sites-list.hook";

const columns = [
	{ text: "Name" },
	{ text: "Address", sx: { textAlign: "right" } },
];

const SiteList = () => {
	const navigate = useNavigate();
	const { sites } = useSitesList();

	return (
		<Box mx={10}>
			<Typography variant="h3" textAlign="center" my={5}>
				Sites List
			</Typography>

			<Box sx={{ px: 20 }}>
				<DataTable
					columns={columns}
					rows={sites}
					onRowClick={(id) => navigate(`/sites/${id}`)}
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
				onClick={() => navigate("/sites/create")}
			>
				<AddIcon />
			</Fab>
		</Box>
	);
};

export default SiteList;
