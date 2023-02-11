import { blue } from "@material-ui/core/colors";
import { Box, Paper, Typography } from "@mui/material";
import { RateReview as RateReviewIcon } from "@mui/icons-material";
import useSiteManagerView from "./view-site-manager.hook";
import FieldList from "../../components/FieldsList/FieldsList";
import FieldButtons from "../../components/FieldButtons/FieldButtons";
import SiteDisplay from "./SiteDisplay";

const editUserFields = [
	{
		name: "firstName",
		label: "First Name",
	},
	{
		name: "lastName",
		label: "Last Name",
	},
	{
		name: "phone",
		label: "Phone",
	},
	{
		name: "email",
		label: "Email",
		type: "email",
	},
];

const newUserFields = [
	...editUserFields,
	{
		name: "password",
		label: "Password",
		type: "password",
	},
];

const paperSx = {
	mx: "auto",
	p: 3,
	width: "70%",
};

const DisplaySiteManager = () => {
	const {
		siteManager,
		handleSubmit,
		reset,
		handleChange,
		isNew,
		deleteSiteManager,
	} = useSiteManagerView();

	const title = isNew ? "Create Site Manager" : "Edit Site Manager";

	return (
		<form onSubmit={handleSubmit}>
			<Box pt={8} />

			<Paper sx={paperSx}>
				<Typography variant="h4" color="blue" textAlign="center" mb={5}>
					{title}
					&nbsp;
					<RateReviewIcon
						fontSize="large"
						style={{ color: blue[500] }}
					/>
				</Typography>

				<FieldList
					fields={(isNew ? newUserFields : editUserFields).map(
						(f) => ({
							...f,
							value: siteManager[f.name],
						})
					)}
					handleChange={handleChange}
				/>

				<Box height={40} />

				<FieldButtons
					onReset={reset}
					onDelete={deleteSiteManager}
					isNew={isNew}
				/>
			</Paper>

			{!isNew && <SiteDisplay />}
		</form>
	);
};

export default DisplaySiteManager;
