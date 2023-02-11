import axios from "axios";
import tokenHelper from "./token.helper";

const createAxiosApp = () => {
	const axiosApp = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	axiosApp.interceptors.request.use(
		(config) => {
			const token = tokenHelper.getToken();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return axiosApp;
};

const axiosApp = createAxiosApp();

export default axiosApp;
