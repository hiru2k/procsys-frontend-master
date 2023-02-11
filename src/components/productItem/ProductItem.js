import React from "react";
import BtnRender from "./BtnRender";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
	return (
		<div>
			<table id="customers1">
				<thead>
					<tr>
						<th>{product.product_id}</th>
						<td>{product.title}</td>
						<td>{product.price}.00</td>
						<td>{product.category}</td>

						<td>
							<BtnRender
								product={product}
								deleteProduct={deleteProduct}
							/>
						</td>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default ProductItem;
