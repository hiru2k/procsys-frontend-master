import api from "../api.json";
import axiosApp from "./axios-app";
import tokenHelper from "./token.helper";

const login = async (email, password) => {
	const response = await axiosApp.post(api.auth.login, { email, password });
	tokenHelper.setToken(response.data.token);
	return response.data;
};

const getLoggedUser = async () => {
	const response = await axiosApp.get(api.auth.common);
	return response.data;
};

const logout = async () => {
	tokenHelper.removeToken();
};

const authHelper = {
	login,
	getLoggedUser,
	logout,
};

export default authHelper;
