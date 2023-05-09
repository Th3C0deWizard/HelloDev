import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/";

const useFetch = (url, handleError) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!isLoading) return;

		fetch(API_URL + url)
			.then(async (response) => {
				const data = await response.json();
				if (response.ok) return data;
				else throw new Error(data);
			})
			.then((gotData) => {
				console.log(gotData);
				setData(gotData);
			})
			.catch((error) => console.error(error))
			.finally(() => setIsLoading(false));
	}, [isLoading]);

	return [data, isLoading, setIsLoading];
};

export default useFetch;
