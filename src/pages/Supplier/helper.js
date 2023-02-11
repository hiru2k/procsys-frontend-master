import api from "../../api.json";
import axiosApp from "../../helpers/axios-app";

// create supplier
const createSupplier = async (data) => {
	const response = await axiosApp.post(api.suppliers.common, data);
	return response.data;
};

// get all suppliers
const getAllSuppliers = async () => {
	const response = await axiosApp.get(api.suppliers.common);
	return response.data;
};

// get supplier by id
const getSupplierById = async (id) => {
	const response = await axiosApp.get(`${api.suppliers.common}/${id}`);
	return response.data;
};

// update supplier
const updateSupplier = async (id, data) => {
	const response = await axiosApp.put(`${api.suppliers.common}/${id}`, data);
	return response.data;
};

// delete supplier
const deleteSupplier = async (id) => {
	const response = await axiosApp.delete(`${api.suppliers.common}/${id}`);
	return response.data;
};

const supplierHelper = {
	createSupplier,
	getAllSuppliers,
	getSupplierById,
	updateSupplier,
	deleteSupplier,
};

export default supplierHelper;
