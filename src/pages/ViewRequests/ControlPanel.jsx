import { Search as SearchIcon } from "@mui/icons-material";
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { useContext } from "react";
import { REQ_STATUS, STAT_COLORS } from "../../helpers/constants";
import { requestsViewContext } from "./RequestsViewContext";

const MyButton = styled(Button)(() => ({
	textTransform: "none",
	border: "1px solid black",
	width: 100,
}));

const SearchBar = () => {
	const { setSearch, search } = useContext(requestsViewContext);

	return (
		<TextField
			placeholder="Search"
			size="small"
			sx={{
				width: "40%",
				".MuiOutlinedInput-root": {
					borderRadius: 10,
				},
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				),
			}}
			variant="outlined"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};

const Buttons = () => {
	const { setStatus } = useContext(requestsViewContext);

	return (
		<Box
			sx={{
				display: "flex",
				columnGap: 2,
			}}
		>
			{Object.values(REQ_STATUS).map((status) => (
				<MyButton
					key={status}
					sx={{
						backgroundColor: STAT_COLORS[status],
					}}
					onClick={() => setStatus(status)}
				>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</MyButton>
			))}
			{/* <MyButton
				sx={{
					backgroundColor: "black",
					color: "white",
					":hover": {
						color: "black",
					},
				}}
				onClick={() => setStatus(REQ_STATUS.all)}
			>
				All
			</MyButton>
			<MyButton
				sx={{
					backgroundColor: "orange",
				}}
				onClick={() => setStatus(REQ_STATUS.pending)}
			>
				Pending
			</MyButton>
			<MyButton
				sx={{
					backgroundColor: "green",
				}}
				onClick={() => setStatus(REQ_STATUS.accepted)}
			>
				Accepted
			</MyButton>
			<MyButton
				sx={{
					backgroundColor: "red",
				}}
				onClick={() => setStatus(REQ_STATUS.rejected)}
			>
				Rejected
			</MyButton> */}
		</Box>
	);
};

const ControlPanel = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<SearchBar />

			<Box width={30} />

			<Buttons />
		</Box>
	);
};

export default ControlPanel;
