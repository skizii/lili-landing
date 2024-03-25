'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react';

import logo from '../img/logo.svg';

const Logo = () => {
	const [width, setWidth] = useState(74);
	const [height, setHeight] = useState(43);
  
	useEffect(() => {
	  const handleResize = () => {
		if (window.innerWidth < 640) {
		  setWidth(46);
		  setHeight(27);
		} else {
		  setWidth(74);
		  setHeight(43);
		}
	  };
  
	  handleResize();
  
	  window.addEventListener('resize', handleResize);
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []);

	return (
		<Image 
		className="mx-auto pt-[30px]"
		src={logo}
		alt="lili logo"
		width={width}
		height={height}/>
	)
}

export default Logo;