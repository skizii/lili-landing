'use client';

import { Component, createRef } from "react";
import Qr from "./qr";

class Phone extends Component {
	
	containerRef = createRef<HTMLDivElement>();
	windowHeight = window.innerHeight || document.documentElement.clientHeight;

	state = {
		visibleHeight: 0
	};
	
    componentDidMount() {
		const element = this.containerRef.current;
        if (element) {
			const visibleHeight = this.getVisibleHeight(element);
			this.setState({ visibleHeight });
        }
    }
	
	getVisibleHeight = (element: HTMLDivElement) => {
		const rect = element.getBoundingClientRect();
		const top = Math.max(rect.top, 0);
		const bottom = Math.min(rect.bottom, this.windowHeight);
		return bottom - top;
	}

	render(): JSX.Element {
		const { visibleHeight } = this.state;
		console.log('this.windowHeightheight', this.windowHeight);

		return (
			<>
			{this.windowHeight <= 780 ? <Qr top={this.windowHeight - 155} />
		: (<div
			ref={this.containerRef}
			className="
			relative
			w-[366px] h-[650px] mt-[85px]
			border-[9px] border-solid rounded-[56px] border-[#686B6F]
			-z-10"
			>
				{visibleHeight > 0 && <Qr top={visibleHeight / 2} />}
			</div>)}
			</>
		)
	}
}

export default Phone;