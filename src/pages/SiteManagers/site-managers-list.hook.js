import siteManagersHelper from "../../helpers/site-manaers.api";
import { useEffect, useState } from "react";

const mapFunc = (item) => {
	const values = Object.values(item);
	const sliced = values
		.slice(1, 5)
		.reduce((acc, curr, i) => {
			if (i === 1) {
				acc[0] = acc[0] + " " + curr;
			} else {
				acc.push(curr);
			}
			return acc;
		}, [])
		.map((text, i) => {
			let textAlign = "left";
			if (i === 1) textAlign = "center";
			else if (i === 2) textAlign = "right";
			return {
				text,
				sx: { textAlign },
			};
		});

	return {
		id: item._id,
		columns: sliced,
	};
};

const useSiteManagersList = () => {
	const [sitesManagers, setSiteManagers] = useState([]);

	useEffect(() => {
		loadList();
	}, []);

	const loadList = async () => {
		const res = await siteManagersHelper.getSiteManagers();
		const mapped = res.map(mapFunc);
		setSiteManagers(mapped);
	};

	return { sitesManagers };
};

export default useSiteManagersList;
