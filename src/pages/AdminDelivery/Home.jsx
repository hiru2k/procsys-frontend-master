import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<Typography variant="h1" fontWeight={500}>
							Take Control
						</Typography>
						<Typography variant="h3">Over your business</Typography>
					</Box>
					<Box
						component="img"
						maxWidth={600}
						sx={{
							borderBottomLeftRadius: 20,
						}}
						src="/static/images/login1.jpg"
					/>
				</Box>
			</Box>
		);
	}
}
