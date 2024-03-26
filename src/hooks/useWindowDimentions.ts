'use client';

import { useState, useEffect } from 'react';

function useWindowDimensions() {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window === 'undefined') {
		return;
		}

		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return dimensions;
}

export default useWindowDimensions;