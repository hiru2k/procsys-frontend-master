/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import siteManagersHelper from "../../helpers/site-manaers.api";
import usersHelper from "../../helpers/users.api";
import { ROLES } from "../../helpers/constants";

const initialState = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	password: "",
};

const useSiteManagerView = () => {
	const navigate = useNavigate();
	const urlParams = useParams();
	const [siteManager, setSiteManager] = useState(initialState);
	const [isNew, setIsNew] = useState(true);

	useEffect(() => {
		if (urlParams.id) {
			loadData();
			setIsNew(false);
		} else setIsNew(true);
	}, [urlParams]);

	const loadData = async () => {
		const data = await siteManagersHelper.getSiteManager(urlParams.id);
		setSiteManager(data);
	};

	const createSiteManager = async () => {
		try {
			const response = await usersHelper.createUser({
				...siteManager,
				role: ROLES.siteManager,
			});
			navigate(`/site-managers/${response._id}`);
		} catch (error) {
			alert("creating failed");
			console.error(error);
		}
	};

	const updateSiteManager = async () => {
		try {
			const { password, ...withoutPw } = siteManager;
			const response = await usersHelper.updateUser(
				urlParams.id,
				withoutPw
			);
			setSiteManager(response);
		} catch (error) {
			alert("updating failed");
			console.error(error);
		}
	};

	const deleteSiteManager = async () => {
		try {
			await usersHelper.deleteUser(urlParams.id);
			navigate("/site-managers");
		} catch (error) {
			alert("deleting failed");
			console.error(error);
		}
	};

	return {
		siteManager,
		isNew,
		handleSubmit: (e) => {
			e.preventDefault();
			isNew ? createSiteManager() : updateSiteManager();
		},
		handleChange: (e) =>
			setSiteManager({ ...siteManager, [e.target.name]: e.target.value }),
		reset: loadData,
		deleteSiteManager,
	};
};

export default useSiteManagerView;
