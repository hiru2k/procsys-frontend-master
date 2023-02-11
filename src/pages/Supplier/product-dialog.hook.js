import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsHelper from "../../helpers/products.helper";

const initialState = {
	name: "",
	price: 0,
};

const useProductDialog = (id, onClose) => {
	const [product, setProduct] = useState(initialState);
	const [isNew, setIsNew] = useState(true);
	const params = useParams();

	useEffect(() => {
		if (id) {
			setIsNew(false);
			productsHelper.getProduct(params.id, id).then((product) => {
				setProduct(product);
			});
		} else {
			setIsNew(true);
			setProduct(initialState);
		}
	}, [id, params.id]);

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const createProduct = async (e) => {
		e.preventDefault();
		try {
			await productsHelper.createProduct(params.id, product);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	const updateProduct = async (e) => {
		e.preventDefault();
		try {
			await productsHelper.updateProduct(params.id, id, product);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	const deleteProduct = async () => {
		try {
			await productsHelper.deleteProduct(params.id, id);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	return {
		product,
		isNew,
		handleChange,
		handleSubmit: isNew ? createProduct : updateProduct,
		deleteProduct,
	};
};

export default useProductDialog;
