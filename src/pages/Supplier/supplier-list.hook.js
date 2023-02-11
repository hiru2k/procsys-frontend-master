import { useEffect, useState } from "react";
import supplierHelper from "./helper";

const TEXT_ALIGN = ["left", "center", "center", "right"];

const useSuppliersList = () => {
	const [suppliers, setSuppliers] = useState([]);

	useEffect(() => {
		loadList();
	}, []);

	const loadList = async () => {
		const res = await supplierHelper.getAllSuppliers();
		const mapped = res.map((item, i) => {
			const values = Object.values(item);
			const sliced = values.slice(1, 5).map((text, i) => ({
				text,
				sx: { textAlign: TEXT_ALIGN[i] },
			}));

			return {
				id: item._id,
				columns: sliced,
			};
		});
		setSuppliers(mapped);
	};

	return { suppliers };
};

export default useSuppliersList;
