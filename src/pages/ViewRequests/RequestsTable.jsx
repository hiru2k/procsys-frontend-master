import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { STAT_COLORS } from "../../helpers/constants";
import { requestsViewContext } from "./RequestsViewContext";
import DataTable from "../../components/DataTable/DataTable";

const columns = [
	{ text: "REF. No" },
	{ text: "Site Name" },
	{ text: "Delivery Date" },
	{
		text: "Total Cost (RS.)",
		sx: {
			textAlign: "right",
		},
	},
	{
		text: "Status",
		sx: {
			textAlign: "center",
		},
	},
];

const RequestsTable = () => {
	const { requests } = useContext(requestsViewContext);
	const navigate = useNavigate();

	const rows = requests.map((r) => ({
		id: r._id,
		columns: [
			{ text: r._id },
			{ text: r.siteName },
			{ text: new Date(r.deliverDate).toLocaleDateString("en-GB") },
			{
				text: r.totalCost
					.toFixed(2)
					.replace(/\d(?=(\d{3})+\.)/g, "$&,"),
				sx: {
					textAlign: "right",
				},
			},
			{
				text: r.status.charAt(0).toUpperCase() + r.status.slice(1),
				sx: {
					textAlign: "center",
					color: STAT_COLORS[r.status],
				},
			},
		],
	}));

	const handleRowClick = (id) => navigate(`/requests/${id}`);

	return (
		<DataTable columns={columns} rows={rows} onRowClick={handleRowClick} />
	);
};

export default RequestsTable;
