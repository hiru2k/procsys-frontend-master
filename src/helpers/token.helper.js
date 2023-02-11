const STORAGE_KEY = "__$%__";

const getToken = () => {
	return localStorage.getItem(STORAGE_KEY);
};

const setToken = (token) => {
	localStorage.setItem(STORAGE_KEY, token);
};

const removeToken = () => {
	localStorage.removeItem(STORAGE_KEY);
};

const tokenHelper = {
	getToken,
	setToken,
	removeToken,
};

export default tokenHelper;
