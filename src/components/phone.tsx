'use client';

import { Component, createRef } from "react";
import Card from "./card";
import Qr from "./qr";

import cup from "@/icons/cup.svg";
import hamburger from "@/icons/hamburger.svg";

class Phone extends Component {
	
	containerRef = createRef<HTMLDivElement>();
	windowHeight = window.innerHeight || document.documentElement.clientHeight;

	state = {
		phoneVisibleHeight: 0
	};
	
    componentDidMount() {
		const element = this.containerRef.current;
        if (element) {
			const phoneVisibleHeight = this.getVisibleHeight(element);
			this.setState({ phoneVisibleHeight });
        }
    }
	
	getVisibleHeight = (element: HTMLDivElement) => {
		const rect = element.getBoundingClientRect();
		const top = Math.max(rect.top, 0);
		const bottom = Math.min(rect.bottom, this.windowHeight);
		return bottom - top;
	}

	render(): JSX.Element {
		const { phoneVisibleHeight } = this.state;
		const showPhone = this.windowHeight >= 800;
		console.log('this.windowHeightheight', phoneVisibleHeight);

		return (
			<div className="relative w-[373px] h-[650px] mt-[40px]">
				{!showPhone ? <Qr top={0} />
			: (<div
				className="
				relative
				w-full h-full
				mt-[45px]
				border-[9px] border-solid rounded-[56px] border-[#686B6F]
				bg-main
				-z-10"
				ref={this.containerRef}
				>
					{phoneVisibleHeight > 0 && <Qr top={phoneVisibleHeight / 2} />}
				</div>)}
				<Card icon={hamburger} category="Food delivery" top={showPhone ? 25 : 20} left={331} spent={96}/>
          		<Card icon={cup} category="Breakfast" top={showPhone ? 148 : 80} left={-258} spent={25.16} split="Bogdan" total={57} comment="We went to the restaurant after a morning jog"/>
			</div>
		)
	}
}

export default Phone;