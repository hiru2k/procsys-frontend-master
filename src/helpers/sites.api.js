import api from "../api.json";
import axiosApp from "./axios-app";

const URL = api.sites.common;

const createSite = async (site) => {
	const response = await axiosApp.post(URL, site);
	return response.data;
};

const getSites = async () => {
	const response = await axiosApp.get(URL);
	return response.data;
};

const getSite = async (id) => {
	const response = await axiosApp.get(`${URL}/${id}`);
	return response.data;
};

const updateSite = async (id, site) => {
	const response = await axiosApp.put(`${URL}/${id}`, site);
	return response.data;
};

const deleteSite = async (id) => {
	const response = await axiosApp.delete(`${URL}/${id}`);
	return response.data;
};

const sitesWithoutManagers = async () => {
	const response = await axiosApp.get(api.sites.withoutManager);
	return response.data;
};

const sitesHelper = {
	createSite,
	getSites,
	getSite,
	updateSite,
	deleteSite,
	sitesWithoutManagers,
};

export default sitesHelper;
