import {
	styled,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";

const MyCell = styled(TableCell)(() => ({
	border: 0,
}));

const HeaderCell = styled(TableCell)(() => ({
	fontWeight: "bold",
}));

const MyRow = ({ data, onClick }) => {
	return (
		<TableRow
			sx={{
				":hover": {
					backgroundColor: "rgb(245 245 245)",
				},
				cursor: "pointer",
			}}
			onClick={onClick}
		>
			{data.columns.map((c) => (
				<MyCell key={c.text} sx={c.sx}>
					{c.text}
				</MyCell>
			))}
		</TableRow>
	);
};

const DataTable = ({ columns, rows, onRowClick }) => {
	return (
		<Table>
			<TableHead>
				<TableRow
					sx={{
						borderTop: "1px solid rgb(175 174 174)",
					}}
				>
					{columns.map((c) => (
						<HeaderCell key={c.text} sx={c.sx}>
							{c.text}
						</HeaderCell>
					))}
				</TableRow>
			</TableHead>

			<TableBody>
				{rows.map((r) => (
					<MyRow
						key={r.id ?? r._id}
						data={r}
						onClick={() => onRowClick(r.id ?? r._id)}
					/>
				))}
			</TableBody>
		</Table>
	);
};

export default DataTable;
