import axiosApp from "./axios-app";
import api from "../api.json";

// get requests list
const getRequests = async () => {
	const response = await axiosApp.get(api.requests.common);
	return response.data;
};

// get request by id
const getRequestById = async (id) => {
	const response = await axiosApp.get(`${api.requests.common}/${id}`);
	return response.data;
};

// change request status
const changeRequestStatus = async (id, status) => {
	const response = await axiosApp.patch(
		`${api.requests.common}/${id}/status`,
		{
			status,
		}
	);
	return response.data;
};

const requestsHelper = {
	getRequests,
	getRequestById,
	changeRequestStatus,
};

export default requestsHelper;
