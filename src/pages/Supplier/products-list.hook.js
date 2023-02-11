/* eslint-disable react-hooks/exhaustive-deps */
import productsHelper from "../../helpers/products.helper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const mapProductToColumn = (v, i) => {
	const text = i === 1 ? v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") : v;
	const textAlign = i === 0 ? "left" : "right";

	return {
		text,
		sx: { textAlign },
	};
};

const mapProductsToColumns = (product) => {
	const columns = Object.values(product).slice(1, 4).map(mapProductToColumn);
	return {
		id: product._id,
		columns,
	};
};

const useProductsList = () => {
	const params = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (params.id) loadProducts();
	}, [params]);

	const loadProducts = async () => {
		const products = await productsHelper.getProducts(params.id);
		let mapped = products.map(mapProductsToColumns);
		setProducts(mapped);
	};

	return {
		products,
		loadProducts,
	};
};

export default useProductsList;
