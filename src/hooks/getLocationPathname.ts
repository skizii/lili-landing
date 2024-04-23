'use client';

import { useState, useEffect } from 'react';

function useLocationPathname() {
	const [pathname, setPathname] = useState({
		pathname: '/'
	});

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		setPathname({
			pathname: window.location.pathname
		});
		return;
	}, []);

	return pathname;
}

export default useLocationPathname;