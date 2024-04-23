'use client';

import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import { useTranslations } from 'next-intl';

import useWindowDimensions from "@/hooks/useWindowDimentions";

import Card from "./card";
import Qr from "./qr";

import phoneS from '@/img/phone_S.svg';
import cup from "@/app/icons/cup.svg";
import wine from "@/app/icons/wine.svg";

const Phone = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { height: windowHeight, width: windowWidth } = useWindowDimensions();
	const [phoneVisibleHeight, setPhoneVisibleHeight] = useState(0);

	const t = useTranslations('Cards');
  
	useEffect(() => {
	  const element = containerRef.current;
	  const getPhoneVisibleHeight = (element: HTMLDivElement) => {
		const rect = element.getBoundingClientRect();
		const top = Math.max(rect.top, 0);
		const bottom = Math.min(rect.bottom, windowHeight);
		return bottom - top;
	  };

	  if (element) {
		const phoneVisibleHeight = getPhoneVisibleHeight(element);
		setPhoneVisibleHeight(phoneVisibleHeight);
	  }
	}, [windowHeight, windowWidth]);
  
	const showPhone = windowHeight >= 800;
	const isMobile = windowWidth <= 768;
  
	if (isMobile) {
		return <Image className="mt-[64px] px-[24px]" src={phoneS} alt="phone" width={373}/>;
	} else {
		return (
		  <div className="relative w-[373px] h-[650px] mt-[30px]">
			{!showPhone ? <Qr top={0} /> : (
			  <div
				className="relative w-full h-full mt-[55px] border-[9px] border-solid rounded-[56px] border-[#686B6F] bg-main -z-10"
				ref={containerRef}
			  >
				{phoneVisibleHeight > 0 && <Qr top={phoneVisibleHeight / 2} />}
			  </div>
			)}
			<Card icon={wine} category={t('restaraunt.category')} top={showPhone ? 25 : 20} left={331} spent={47} />
			<Card icon={cup} category={t('coffee.category')} top={showPhone ? 148 : 80} left={-258} spent={7.5} split={t('coffee.split')} total={15} comment={t('coffee.comment')} />
		  </div>
		);
	}
};

export default Phone;