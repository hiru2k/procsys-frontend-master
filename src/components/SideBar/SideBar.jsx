import "./SideBar.scss";
import {
	AttachMoney as AttachMoneyIcon,
	Construction as ConstructionIcon,
	Home as HomeIcon,
	LocalShipping as LocalShippingIcon,
	Person as PersonIcon,
	Receipt as ReceiptIcon,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const links = [
	{
		title: "Home",
		href: "/",
		icon: HomeIcon,
	},
	{
		title: "Order Rquests",
		href: "/requests",
		icon: ReceiptIcon,
	},
	{
		title: "Suppliers",
		href: "/suppliers",
		icon: LocalShippingIcon,
	},
	{
		title: "Sites",
		href: "/sites",
		icon: ConstructionIcon,
	},
	{
		title: "Site Managers",
		href: "/site-managers",
		icon: PersonIcon,
	},
	{
		title: "Accountants",
		href: "/accountants",
		icon: AttachMoneyIcon,
	},
];

const SideBarRow = ({ link }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
				pl: 2,
				height: 50,
				transitionDuration: "0.5s",
				":hover": {
					backgroundColor:
						location.pathname === link.href ? "" : "rgb(37 64 65)",
				},
			}}
			onClick={() => navigate(link.href)}
			className={location.pathname === link.href ? "side-bar-active" : ""}
		>
			<link.icon />
			<Typography ml={2}>{link.title}</Typography>
		</Box>
	);
};

const SideBar = () => {
	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
				color: "primary.contrastText",
				width: "100%",
				boxSizing: "border-box",
				gridArea: "sidebar",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{links.map((link) => (
				<SideBarRow key={link.title} link={link} />
			))}
		</Box>
	);
};

export default SideBar;
