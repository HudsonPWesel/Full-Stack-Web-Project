import { useEffect, useState } from 'react';

export function useFetch(fetchFunc) {
	useEffect(() => {
		// fetchFunc().then(res => {});
		console.log('Fetching...');
		// return fetchFunc();
	}, []);
}
