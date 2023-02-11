/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import sitesHelper from "../../helpers/sites.api";

const initialState = {
	name: "",
	address: "",
};

const useSiteView = () => {
	const navigate = useNavigate();
	const urlParams = useParams();
	const [site, setSite] = useState(initialState);
	const [isNew, setIsNew] = useState(true);

	useEffect(() => {
		if (urlParams.id) {
			loadData();
			setIsNew(false);
		} else setIsNew(true);
	}, [urlParams]);

	const loadData = async () => {
		const data = await sitesHelper.getSite(urlParams.id);
		setSite(data);
	};

	const createSite = async () => {
		try {
			const response = await sitesHelper.createSite(site);
			navigate(`/sites/${response._id}`);
		} catch (error) {
			alert("creating failed");
			console.error(error);
		}
	};

	const updateSite = async () => {
		try {
			const response = await sitesHelper.updateSite(urlParams.id, site);
			setSite(response);
		} catch (error) {
			alert("updating failed");
			console.error(error);
		}
	};

	const deleteSite = async () => {
		try {
			await sitesHelper.deleteSite(urlParams.id);
			navigate("/sites");
		} catch (error) {
			alert("deleting failed");
			console.error(error);
		}
	};

	return {
		site,
		isNew,
		handleSubmit: (e) => {
			e.preventDefault();
			isNew ? createSite() : updateSite();
		},
		handleChange: (e) =>
			setSite({ ...site, [e.target.name]: e.target.value }),
		reset: loadData,
		deleteSite,
	};
};

export default useSiteView;
