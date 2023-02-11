import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import ProductItem from "../../components/productItem/ProductItem";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import Filters from "./Filters";
import LoadMore from "./LoadMore";

function Products() {
	const state = useContext(GlobalState);
	const [products, setProducts] = state.productsAPI.products;
	const [isAdmin] = state.userAPI.isAdmin;
	const [token] = state.token;
	const [callback, setCallback] = state.productsAPI.callback;
	const [loading, setLoading] = useState(false);
	// const [isCheck, setIsCheck] = useState(false);

	const handleCheck = (id) => {
		products.forEach((product) => {
			if (product._id === id) product.checked = !product.checked;
		});
		setProducts([...products]);
	};

	const deleteProduct = async (id, public_id) => {
		try {
			setLoading(true);
			const destroyImg = axios.post(
				"/api/destroy",
				{ public_id },
				{
					headers: { Authorization: token },
				}
			);
			const deleteProduct = axios.delete(`/api/products/${id}`, {
				headers: { Authorization: token },
			});

			await destroyImg;
			await deleteProduct;
			setCallback(!callback);
			setLoading(false);
		} catch (err) {
			alert(err.response.data.msg);
		}
	};

	// const checkAll = () =>{
	//     products.forEach(product => {
	//         product.checked = !isCheck
	//     })
	//     setProducts([...products])
	//     setIsCheck(!isCheck)
	// }

	// const deleteAll = () =>{
	//     products.forEach(product => {
	//         if(product.checked) deleteProduct(product._id, product.images.public_id)
	//     })
	// }

	if (loading)
		return (
			<div>
				<Loading />
			</div>
		);
	return (
		<>
			<div
				class="w3-card-4 w3-margin"
				style={{ width: "1460px", height: "800px" }}
			>
				<div>
					<h1 style={{ marginLeft: "650px" }}>Products</h1>

					<hr></hr>
					<Filters />

					<hr style={{ backgroundColor: "black" }}></hr>

					<table id="customers1" style={{ marginTop: "40px" }}>
						<thead>
							<tr>
								<th scope="col">REF.No</th>
								<th scope="col">Product </th>
								<th scope="col">Unit Price(Rs.)</th>
								<th scope="col">Supplier</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
					</table>

					<hr style={{ backgroundColor: "black" }}></hr>

					<div className="products">
						{products.map((product) => {
							return (
								<ProductItem
									key={product._id}
									product={product}
									isAdmin={isAdmin}
									deleteProduct={deleteProduct}
									handleCheck={handleCheck}
								/>
							);
						})}
					</div>

					<LoadMore />
					{products.length === 0 && <Loading />}
				</div>
			</div>
		</>
	);
}

export default Products;
