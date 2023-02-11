import { useState } from "react";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import authHelper from "../../helpers/auth.api";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/slices/auth.slice";

const ProfilePic = () => {
	const { user } = useSelector((s) => s.auth);
	const [anchorEle, setAnchorEle] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleMenuOpen = (e) => {
		setAnchorEle(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEle(null);
	};

	const logout = () => {
		handleMenuClose();
		navigate("/");
		dispatch(authActions.removeUser());
		authHelper.logout();
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					columnGap: 2,
					cursor: "pointer",
				}}
				onClick={handleMenuOpen}
			>
				<Typography>
					{user.firstName} {user.lastName}
				</Typography>

				<Avatar />
			</Box>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEle}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorEle)}
				onClose={handleMenuClose}
			>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</>
	);
};

export default ProfilePic;
