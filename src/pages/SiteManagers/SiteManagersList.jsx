import { useNavigate } from "react-router-dom";
import DataTable from "../../components/DataTable/DataTable";
import { Box, Fab, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import useSiteManagersList from "./site-managers-list.hook";

const columns = [
	{ text: "Name" },
	{ text: "Phone", sx: { textAlign: "center" } },
	{ text: "Email", sx: { textAlign: "right" } },
];

const SiteManagersList = () => {
	const navigate = useNavigate();
	const { sitesManagers } = useSiteManagersList();

	return (
		<Box mx={10}>
			<Typography variant="h3" textAlign="center" my={5}>
				Sites Manager List
			</Typography>

			<DataTable
				columns={columns}
				rows={sitesManagers}
				onRowClick={(id) => navigate(`/site-managers/${id}`)}
			/>

			<Fab
				color="primary"
				aria-label="add"
				sx={{
					position: "fixed",
					bottom: 16,
					right: 16,
				}}
				onClick={() => navigate("/site-managers/create")}
			>
				<AddIcon />
			</Fab>
		</Box>
	);
};

export default SiteManagersList;
