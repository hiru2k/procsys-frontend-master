import { Box, Button } from "@mui/material";

const FieldButtons = ({ isNew, onReset, onDelete }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: isNew ? "center" : "space-between",
				width: "100%",
			}}
		>
			{isNew ? (
				<Button variant="contained" type="submit">
					Create
				</Button>
			) : (
				<>
					<Button variant="outlined" onClick={onReset}>
						Reset
					</Button>
					<Button variant="contained" type="submit">
						Update
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={onDelete}
					>
						Delete
					</Button>
				</>
			)}
		</Box>
	);
};

export default FieldButtons;
