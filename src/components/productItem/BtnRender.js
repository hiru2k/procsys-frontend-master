import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

function BtnRender({ product, deleteProduct }) {
	const state = useContext(GlobalState);
	const [isAdmin] = state.userAPI.isAdmin;
	const addCart = state.userAPI.addCart;

	return (
		<div className="row_btn">
			{isAdmin ? (
				<>
					<Link
						id="btn_view"
						style={{
							backgroundColor: "#FDCE2A",
							color: "black",
							borderColor: "black",
						}}
						to={`/detail/${product._id}`}
					>
						View
					</Link>

					<Link
						class="glyphicon glyphicon-pencil"
						style={{ color: "black" }}
						to={`/edit_product/${product._id}`}
					></Link>
					<Link
						class="fa fa-trash"
						style={{ color: "red" }}
						to="#!"
						onClick={() =>
							deleteProduct(product._id, product.images.public_id)
						}
					></Link>
				</>
			) : (
				<>
					<Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
						Buy
					</Link>
					<Link id="btn_view" to={`/detail/${product._id}`}>
						View
					</Link>
				</>
			)}
		</div>
	);
}

export default BtnRender;
