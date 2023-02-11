import { Box, TextField } from "@mui/material";

const FieldList = ({ fields, handleChange }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				rowGap: 2,
			}}
		>
			{fields.map((field) => (
				<TextField
					key={field.name}
					label={field.label}
					required
					fullWidth
					onChange={handleChange}
					name={field.name}
					value={field.value}
					type={field.type ?? "text"}
				/>
			))}
		</Box>
	);
};

export default FieldList;
