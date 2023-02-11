import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import ProductItem from "../../components/productItem/ProductItem";

function DetailProduct() {
	const params = useParams();
	const state = useContext(GlobalState);
	const [products] = state.productsAPI.products;
	const [detailProduct, setDetailProduct] = useState([]);

	useEffect(() => {
		if (params.id) {
			products.forEach((product) => {
				if (product._id === params.id) setDetailProduct(product);
			});
		}
	}, [params.id, products]);

	if (detailProduct.length === 0) return null;

	return (
		<>
			<div
				class="w3-card-4 w3-margin"
				style={{ width: "1460px", height: "900px" }}
			>
				<h1 style={{ textAlign: "center" }}>Product Details</h1>
				<hr></hr>
				<div className="detail">
					<img src={detailProduct.images.url} alt="" />
					<div className="box-detail">
						<h2>{detailProduct.title}</h2>
						<p>#ID: {detailProduct.product_id}</p>
						<span>RS.{detailProduct.price}.00</span>
						<p>{detailProduct.description}</p>
						<p>{detailProduct.category}</p>
					</div>
				</div>

				<div>
					<div class="w3-container w3-sand">
						<div>
							<h4>
								Products Related to {detailProduct.category}
							</h4>
							<div className="products">
								{products.map((product) => {
									return product.category ===
										detailProduct.category ? (
										<ProductItem
											key={product._id}
											product={product}
										/>
									) : null;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailProduct;
