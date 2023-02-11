import axiosApp from "./axios-app";
import api from "../api.json";

const URL = api.suppliers.products.common;

const getProducts = async (supplierId) => {
	const { data } = await axiosApp.get(
		URL.replace("{supplierId}", supplierId)
	);
	return data;
};

const createProduct = async (supplierId, product) => {
	const { data } = await axiosApp.post(
		URL.replace("{supplierId}", supplierId),
		product
	);
	return data;
};

const updateProduct = async (supplierId, productId, product) => {
	const { data } = await axiosApp.put(
		`${URL.replace("{supplierId}", supplierId)}/${productId}`,
		product
	);
	return data;
};

const deleteProduct = async (supplierId, productId) => {
	const { data } = await axiosApp.delete(
		`${URL.replace("{supplierId}", supplierId)}/${productId}`
	);
	return data;
};

const getProduct = async (supplierId, productId) => {
	const { data } = await axiosApp.get(
		`${URL.replace("{supplierId}", supplierId)}/${productId}`
	);
	return data;
};

const productsHelper = {
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProduct,
};

export default productsHelper;
