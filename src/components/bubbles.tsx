import Bubble from "./bubble";
import buildings from "@/icons/buildings.svg";
import car from "@/icons/car.svg";
import cart from "@/icons/shoppingCart.svg";
import person from "@/icons/person.svg";
import house from "@/icons/house.svg";
import hamburger from "@/icons/hamburger.svg";

const Bubbles = () => {
	return (
		<div className="absolute top-0 left-0 h-full w-full -z-10">
			<Bubble size={68} top={10} left={20} icon={car}/>
			<Bubble size={58} top={12} left={75} icon={cart}/>
			<Bubble size={58} top={38} left={65} icon={buildings}/>
			<Bubble size={54} top={42} left={30} icon={hamburger}/>
			<Bubble size={58} top={48} left={10} icon={house}/>
			<Bubble size={58} top={75} left={65} icon={person}/>
		</div>
	)
}

export default Bubbles;