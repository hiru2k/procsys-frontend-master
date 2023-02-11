/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import supplierHelper from "./helper";

const initialState = {
	name: "",
	address: "",
	phone: "",
	email: "",
};

const useSupplierUtils = () => {
	const navigate = useNavigate();
	const urlParams = useParams();
	const [supplier, setSupplier] = useState(initialState);
	const [isNew, setIsNew] = useState(true);

	useEffect(() => {
		if (urlParams.id) {
			loadSupData();
			setIsNew(false);
		} else setIsNew(true);
	}, [urlParams]);

	const loadSupData = async () => {
		const data = await supplierHelper.getSupplierById(urlParams.id);
		setSupplier(data);
	};

	const createSupplier = async () => {
		try {
			const response = await supplierHelper.createSupplier(supplier);
			navigate(`/suppliers/${response._id}`);
		} catch (error) {
			alert("creating failed");
			console.error(error);
		}
	};

	const updateSupplier = async () => {
		try {
			const response = await supplierHelper.updateSupplier(
				urlParams.id,
				supplier
			);
			setSupplier(response);
		} catch (error) {
			alert("updating failed");
			console.error(error);
		}
	};

	const deleteSupplier = async () => {
		try {
			await supplierHelper.deleteSupplier(urlParams.id);
			navigate("/suppliers");
		} catch (error) {
			alert("deleting failed");
			console.error(error);
		}
	};

	return {
		supplier,
		isNew,
		handleSubmit: (e) => {
			e.preventDefault();
			isNew ? createSupplier() : updateSupplier();
		},
		handleChange: (e) =>
			setSupplier({ ...supplier, [e.target.name]: e.target.value }),
		reset: loadSupData,
		deleteSupplier,
	};
};

export default useSupplierUtils;
