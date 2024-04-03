import React, { useEffect, useRef } from 'react';

export const usePrevious = (value: any) => {
	const ref = useRef<any>(value);
	useEffect(() => {
	  ref.current = value;
	});
	return ref.current;
};