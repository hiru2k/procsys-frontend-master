import sitesHelper from "../../helpers/sites.api";
import { useEffect, useState } from "react";

const TEXT_ALIGN = ["left", "right"];

const mapFunc = (item) => {
	const values = Object.values(item);
	const sliced = values.slice(1, 3).map((text, i) => ({
		text,
		sx: { textAlign: TEXT_ALIGN[i] },
	}));

	return {
		id: item._id,
		columns: sliced,
	};
};
const useSitesList = () => {
	const [sites, setSites] = useState([]);

	useEffect(() => {
		loadList();
	}, []);

	const loadList = async () => {
		const res = await sitesHelper.getSites();
		const mapped = res.map(mapFunc);
		setSites(mapped);
	};

	return { sites };
};

export default useSitesList;
