import { Box, Button, Paper, styled, Typography } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import { REQ_STATUS, STAT_COLORS } from "../../helpers/constants";
import useResponseRequest from "./hook";

const DataRow = styled(Box)(() => ({
	borderBottom: "1px solid #0005",
	padding: "10px 0",
}));

const MyButton = styled(Button)(() => ({
	width: 100,
	border: "1px solid black",
	textTransform: "none",
	padding: "3px 0",
}));

const Buttons = ({ onStatusChange, currentStatus }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				columnGap: 10,
			}}
		>
			{currentStatus === REQ_STATUS.pending ? (
				<>
					<MyButton
						sx={{
							backgroundColor: "green",
						}}
						onClick={() => onStatusChange(REQ_STATUS.approved)}
					>
						Approve
					</MyButton>
					<MyButton
						sx={{
							backgroundColor: "red",
						}}
						onClick={() => onStatusChange(REQ_STATUS.declined)}
					>
						Decline
					</MyButton>
				</>
			) : currentStatus === REQ_STATUS.approved ? (
				<MyButton
					sx={{
						backgroundColor: "blue",
					}}
					onClick={() => onStatusChange(REQ_STATUS.delivered)}
				>
					Delivered
				</MyButton>
			) : (
				<Typography
					sx={{
						fontWeight: "bold",
						color: STAT_COLORS[currentStatus],
					}}
				>
					{currentStatus.charAt(0).toUpperCase() +
						currentStatus.slice(1)}
				</Typography>
			)}
		</Box>
	);
};

const DataRows = ({ request }) => {
	// join request items into a single string -> "name : quantity, ..."
	const items = request.items
		?.map((item) => `${item.product.name} : ${item.quantity}`)
		.join(", ");

	// format delivery date: "dd/mm/yyyy"
	const deliveryDate = new Date(request.deliveryDate).toLocaleDateString();

	// format cost -> "x,xxx.xx"
	const totalCost = request.totalCost
		?.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, "$&,");

	return (
		<>
			<DataRow
				sx={{
					borderTop: "1px solid #0005",
				}}
			>
				<Typography>Site name : {request.siteName}</Typography>
				<Typography>Site details : {request.siteDetails}</Typography>
			</DataRow>
			<DataRow>
				<Typography>Order details :</Typography>
				<Typography>{items}</Typography>
			</DataRow>
			<DataRow>
				<Typography>Delivery date : {deliveryDate}</Typography>
				<Typography>Total (Rs.) : {totalCost}</Typography>
			</DataRow>
			<DataRow>
				<Typography>Comments :</Typography>
				<Typography>
					{request.comments ? request.comments : "No comments"}
				</Typography>
			</DataRow>
		</>
	);
};

const ResponseRequest = () => {
	const { isLoading, request, changeRequestStatus } = useResponseRequest();

	return (
		<Box
			sx={{
				backgroundColor: "#ebebeb",
				height: "100%",
				pt: 5,
				px: "20%",
				boxSizing: "border-box",
			}}
		>
			<Paper
				sx={{
					py: 2.5,
					px: 10,
					borderRadius: 4,
				}}
			>
				<Typography variant="h4" textAlign="center">
					Order Details
				</Typography>

				<Box height={30} />

				{isLoading ? (
					<Loader
						sx={{
							height: 300,
						}}
					/>
				) : (
					<>
						<DataRows request={request} />

						<Box height={30} />

						{request.status === REQ_STATUS.pending && (
							<Buttons
								onStatusChange={changeRequestStatus}
								currentStatus={request.status}
							/>
						)}
					</>
				)}
			</Paper>
		</Box>
	);
};

export default ResponseRequest;
