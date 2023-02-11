/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sitesHelper from "../../helpers/sites.api";
import siteManagersApi from "../../helpers/site-manaers.api";

const SiteDisplay = () => {
	const [sites, setSites] = useState([]);
	const [site, setSite] = useState({});
	const [selectedId, setSelectedId] = useState("");
	const params = useParams();

	const text = site
		? "Assigned to site: "
		: "This account is not assigned to a site";

	useEffect(() => {
		loadSites();
		siteManagersApi.getSiteManager(params.id).then((siteManager) => {
			if (siteManager.site) setSite(siteManager.site);
		});
	}, [params]);

	useEffect(() => {
		if (site && site._id) setSelectedId(site._id);
	}, [site]);

	const loadSites = async () => {
		const sites = await sitesHelper.sitesWithoutManagers();
		setSites(sites);
	};

	const onSave = async () => {
		const res = await siteManagersApi.assignSite(params.id, selectedId);
		if (res && res.site) setSite(res.site);
		await loadSites();
	};

	return (
		<Paper
			sx={{
				my: 5,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "70%",
				mx: "auto",
				p: 3,
			}}
		>
			<Typography>{text}</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					columnGap: 2,
				}}
			>
				<FormControl sx={{ width: 350 }}>
					<InputLabel id="site-select">Site</InputLabel>
					<Select
						labelId="site-select"
						value={selectedId}
						label="Site"
						onChange={(e) => setSelectedId(e.target.value)}
					>
						<MenuItem key={site._id} value={site._id}>
							{site.name}
						</MenuItem>
						{sites.map((s) => (
							<MenuItem key={s._id} value={s._id}>
								{s.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<Button
					variant="contained"
					disabled={!Boolean(site)}
					onClick={onSave}
				>
					Save
				</Button>
			</Box>
		</Paper>
	);
};

export default SiteDisplay;
