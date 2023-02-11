import { DensityMedium as DensityMediumIcon } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProfilePic from "./ProfilePic";

const Header = () => {
	const { user } = useSelector((s) => s.auth);

	return (
		<Box
			sx={{
				display: "flex",
				backgroundColor: "primary.main",
				color: "primary.contrastText",
				justifyContent: "space-between",
				alignItems: "center",
				py: 1.5,
				pr: 1.5,
				gridArea: "header",
			}}
		>
			{user && (
				<IconButton>
					<DensityMediumIcon
						sx={{
							color: "primary.contrastText",
						}}
					/>
				</IconButton>
			)}

			<Typography variant="h5" margin="auto">
				MPS
			</Typography>

			{user && <ProfilePic />}
		</Box>
	);
};

export default Header;
