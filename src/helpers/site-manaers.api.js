import axiosApp from "./axios-app";
import api from "../api.json";

const URL = api.siteManagers.common;

const getSiteManagers = async () => {
	const response = await axiosApp.get(URL);
	return response.data;
};

const getSiteManager = async (id) => {
	const response = await axiosApp.get(`${URL}/${id}`);
	return response.data;
};

const assignSite = async (id, siteId) => {
	const response = await axiosApp.patch(`${URL}/${id}/assign-site`, {
		siteId,
	});
	return response.data;
};

const siteManagersApi = {
	getSiteManagers,
	getSiteManager,
	assignSite,
};

export default siteManagersApi;
