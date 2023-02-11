import { useEffect } from "react";
import { useCallback } from "react";
import { createContext, useState } from "react";
import { REQ_STATUS } from "../../helpers/constants";
import requestsHelper from "../../helpers/requests.helper";

const initialState = {
	requests: [],
	loading: false,
	error: null,
	status: REQ_STATUS.all,
	search: "",
	setStatus: () => {},
	setRequests: () => {},
	setSearch: () => {},
};

const context = createContext(initialState);

const RequestsViewContextProvider = ({ children }) => {
	const [status, setStatus] = useState(initialState.status);
	const [requests, setRequests] = useState(initialState.requests);
	const [loading, setLoading] = useState(initialState.loading);
	const [search, setSearch] = useState(initialState.search);

	const loadRequests = useCallback(async () => {
		try {
			let reqs = await requestsHelper.getRequests();
			if (status !== REQ_STATUS.all) {
				reqs = reqs.filter((req) => req.status === status);
			}
			if (search) {
				reqs = reqs.filter(
					(req) =>
						req._id.includes(search) ||
						req.siteName.includes(search)
				);
			}
			setRequests(reqs);
		} catch (error) {
			console.error(error);
		}
	}, [status, search]);

	useEffect(() => {
		setLoading(true);
		loadRequests().then(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, search]);

	return (
		<context.Provider
			value={{
				status,
				setStatus,
				requests,
				setRequests,
				loading,
				search,
				setSearch,
			}}
		>
			{children}
		</context.Provider>
	);
};

export default RequestsViewContextProvider;

export { context as requestsViewContext };
