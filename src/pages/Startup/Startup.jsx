import { Box, CircularProgress } from "@mui/material";

const Startup = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Startup;
