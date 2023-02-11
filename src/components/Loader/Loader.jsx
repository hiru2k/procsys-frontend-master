import { Box, CircularProgress } from "@mui/material";

const Loader = ({ sx }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				...sx,
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loader;
