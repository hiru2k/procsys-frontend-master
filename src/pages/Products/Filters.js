import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

function Filters() {
	const state = useContext(GlobalState);
	// const [categories] = state.categoriesAPI.categories

	// const [category, setCategory] = state.productsAPI.category;
	// const [sort, setSort] = state.productsAPI.sort
	const [search, setSearch] = state.productsAPI.search;

	// const handleCategory = e => {
	//     setCategory(e.target.value)
	//     setSearch('')
	// }

	return (
		<div>
			<table id="customers1" style={{ marginTop: "40px" }}>
				<thead>
					<tr>
						<th scope="col" style={{ width: "10px" }}>
							{" "}
							<div
								className="row_btn"
								style={{ width: "1300px" }}
							>
								<Link
									id="btn_view"
									style={{
										backgroundColor: "#FDCE2A",
										color: "black",
										marginLeft: "1100px",
									}}
									to="/create_product"
								>
									Add new Product
								</Link>
							</div>
						</th>
						<th scope="col" style={{ width: "1600px" }}>
							{" "}
							<div className="filter_menu">
								<input
									type="text"
									value={search}
									placeholder="search"
									onChange={(e) =>
										setSearch(e.target.value.toLowerCase())
									}
								/>
							</div>
						</th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default Filters;
