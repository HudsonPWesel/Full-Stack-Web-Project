import { useEffect, useState } from 'react';

export function useFetch(fetchFunc) {
	useEffect(() => {
		console.log('Fetching...');
		// return fetchFunc();
	}, []);
}
