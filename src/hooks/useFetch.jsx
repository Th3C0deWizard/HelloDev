import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/";

const useFetch = (url, condition = true) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!condition) return;
		if (!isLoading) return;

		fetch(API_URL + url)
			.then(async (response) => {
				const data = await response.json();
				if (response.ok) return data;
				else throw new Error(data);
			})
			.then((gotData) => {
				setData(gotData);
			})
			.catch((error) => console.error(error))
			.finally(() => setTimeout(() => setIsLoading(false), 100));
	}, [isLoading]);

	return [data, setData, isLoading, setIsLoading];
};

export default useFetch;
