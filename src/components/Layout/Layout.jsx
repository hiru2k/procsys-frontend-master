import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
	const { user } = useSelector((s) => s.auth);

	return (
		<Box
			sx={{
				// make header on top, sidebar on left, and outlet on right
				display: "grid",
				gridTemplateColumns: "240px 1fr",
				gridTemplateRows: "64px 1fr",
				gridTemplateAreas: user
					? `
					"header header"
					"sidebar outlet"
				`
					: `
					"header header"
					"outlet outlet"
				`,
				height: "100vh",
				width: "100vw",
				overflowX: "hidden",
			}}
		>
			<Header />
			{user && <SideBar />}
			<Box
				sx={{
					gridArea: "outlet",
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;
