import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Loader from "../../components/Loader/Loader";
import ControlPanel from "./ControlPanel";
import RequestsTable from "./RequestsTable";
import RequestsViewContextProvider, {
	requestsViewContext,
} from "./RequestsViewContext";

const BodyPart = () => {
	const { loading } = useContext(requestsViewContext);

	return (
		<Box
			sx={{
				mt: 5,
				mx: "8%",
			}}
		>
			<ControlPanel />

			<Box height={20} />

			{loading ? (
				<Loader
					sx={{
						height: 200,
					}}
				/>
			) : (
				<RequestsTable />
			)}
		</Box>
	);
};

const ViewRequests = () => {
	return (
		<RequestsViewContextProvider>
			<Box pt={5}>
				<Typography variant="h3" textAlign="center">
					Order Requests
				</Typography>

				<BodyPart />
			</Box>
		</RequestsViewContextProvider>
	);
};

export default ViewRequests;
