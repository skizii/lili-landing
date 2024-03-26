'use client';

import Bubble from "./bubble";
import useWindowDimensions from "@/hooks/useWindowDimentions";

import buildings from "@/icons/buildings.svg";
import car from "@/icons/car.svg";
import cart from "@/icons/shoppingCart.svg";
import person from "@/icons/person.svg";
import hamburger from "@/icons/hamburger.svg";

const Bubbles = () => {

	const windowWidth = useWindowDimensions().width;

	const bubbleShift = windowWidth > 768 ? 0 : 20;

	return (
		<div className="absolute top-0 left-0 h-full w-full z-10 sm:-z-30">
			<Bubble size={68} top={10} left={20 - bubbleShift} icon={car}/>
			<Bubble size={54} top={46} left={30 - bubbleShift} icon={hamburger}/>
			<Bubble size={58} top={38} left={65 + bubbleShift} icon={buildings}/>
			<Bubble size={58} top={12} left={75 + bubbleShift} icon={cart}/>
			<Bubble size={58} top={83} left={72 + bubbleShift} icon={person}/>
		</div>
	)
}

export default Bubbles;