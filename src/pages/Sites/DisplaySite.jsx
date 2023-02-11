import { blue } from "@material-ui/core/colors";
import { Box, Paper, Typography } from "@mui/material";
import { RateReview as RateReviewIcon } from "@mui/icons-material";
import useSiteView from "./view-site.hook";
import FieldList from "../../components/FieldsList/FieldsList";
import FieldButtons from "../../components/FieldButtons/FieldButtons";

const fields = [
	{
		name: "name",
		label: "Site Name",
	},
	{
		name: "address",
		label: "Site Address",
	},
];

const DisplaySite = () => {
	const { site, handleSubmit, reset, handleChange, isNew, deleteSite } =
		useSiteView();

	const title = isNew ? "Create Site" : "Edit Site";

	return (
		<form onSubmit={handleSubmit}>
			<Paper
				sx={{
					mt: 8,
					mx: "auto",
					p: 3,
					width: "70%",
				}}
			>
				<Typography variant="h4" color="blue" textAlign="center" mb={5}>
					{title}
					&nbsp;
					<RateReviewIcon
						fontSize="large"
						style={{ color: blue[500] }}
					/>
				</Typography>

				<FieldList
					fields={fields.map((f) => ({ ...f, value: site[f.name] }))}
					handleChange={handleChange}
				/>

				<Box height={40} />

				<FieldButtons
					onReset={reset}
					onDelete={deleteSite}
					isNew={isNew}
				/>
			</Paper>
		</form>
	);
};

export default DisplaySite;
