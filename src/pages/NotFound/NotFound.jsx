import { Box, Typography } from "@mui/material";
import React from "react";

function NotFound() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Typography
				variant="h1"
				sx={{
					fontSize: "10rem",
				}}
			>
				404 | Not Found
			</Typography>
		</Box>
	);
}

export default NotFound;
