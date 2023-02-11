import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requestsHelper from "../../helpers/requests.helper";

const useResponseRequest = () => {
	const params = useParams();
	const [request, setRequest] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const loadRequest = useCallback(async () => {
		const response = await requestsHelper.getRequestById(params.id);
		setRequest(response);
	}, [params]);

	useEffect(() => {
		setIsLoading(true);
		loadRequest().finally(() => setIsLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	const _changeRequestStatus = useCallback(
		async (status) => {
			const response = await requestsHelper.changeRequestStatus(
				params.id,
				status
			);
			setRequest(response);
		},
		[params]
	);

	const changeRequestStatus = useCallback(
		(status) => {
			setIsLoading(true);
			_changeRequestStatus(status).finally(() => setIsLoading(false));
		},
		[_changeRequestStatus]
	);

	return { request, isLoading, changeRequestStatus };
};

export default useResponseRequest;
