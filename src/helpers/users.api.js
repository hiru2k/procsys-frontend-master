import axiosApp from "./axios-app";
import api from "../api.json";

const URL = api.users.common;

const createUser = async (user) => {
	const response = await axiosApp.post(URL, user);
	return response.data;
};

const updateUser = async (id, user) => {
	const response = await axiosApp.put(`${URL}/${id}`, user);
	return response.data;
};

const deleteUser = async (id) => {
	const response = await axiosApp.delete(`${URL}/${id}`);
	return response.data;
};

const usersHelper = {
	createUser,
	updateUser,
	deleteUser,
};

export default usersHelper;
