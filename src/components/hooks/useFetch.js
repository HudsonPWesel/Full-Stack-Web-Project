import { useEffect, useState } from 'react';

export function useFetch(fetchFunc) {
	const [currentData, updateCurrentData] = useState([]);
	useEffect(() => {
		async function createUserCard() {
			try {
				console.log(typeof fetchFunc);
				const data = fetchFunc()
					.then(response => response.json())
					.then(data => {
                        updateCurrentData(data);
                    });
				console.log(data);
			} catch (error) {
				console.error('An error occurred:', error);
				throw error; // Re-throw the error to propagate it further if needed
			}
		}
		createUserCard();
	}, []);

	return { currentData, updateCurrentData };
}
