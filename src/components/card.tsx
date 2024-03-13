import Bubble from "./bubble";

const Card = ({icon, category, width, top, left, spent, split, total, comment}: 
				{icon: string,
				category: string,
				width: number,
				top: number,
				left: number,
				spent: number,
				split?: string,
				total?: number,
				comment?: string}) => {
	if (split) {
		return (
			<div 
			className="
			absolute
			p-[16px]
			bg-[#282C32]/[.74] rounded-xl
			border border-solid border-white/[.43]
			backdrop-blur-[30px]
			text-base"
			style={{width: `${width}px`, top: `${top}%`, left: `${left}%`}}>
				<div className="mb-[12px] flex justify-between align-center">
					<div className="flex justify-center align-center">
					<Bubble size={44} icon={icon}/>
					<div className="ml-[12px]">
						<p className="text-left flex items-center justify-left">{category}</p>
						<p className="text-sm text-left flex items-center justify-left text-[#AAABAB]">w/{split}</p>
					</div>
					</div>
					<div>
						<p className="flex items-center justify-end">-${spent.toFixed(2)}</p>
						<p className="text-sm text-left flex items-center justify-end text-[#AAABAB]">out of -${total}</p>
					</div>
				</div>
				<p className="pl-[15px] pr-[5px] py-[10px] leading-5 font-normal block w-full rounded-xl rounded-tl-none bg-[#5E5E5F]">
					{comment}
				</p>
			</div>
		)
	} else {
		return (
			<div 
			className="
			absolute
			p-[16px]
			flex justify-between align-center
			bg-[#282C32]/[.74] rounded-xl
			border border-solid border-white/[.43]
			backdrop-blur-[30px]
			text-base"
			style={{width: `${width}px`, top: `${top}%`, left: `${left}%`}}>
				<div className="flex justify-center align-center">
				<Bubble size={44} icon={icon}/>
				<p className="ml-[12px] text-left flex items-center justify-left">{category}</p>
				</div>
				<p className="flex items-center justify-center">-${spent.toFixed(2)}</p>
			</div>
		)
	}
}

export default Card;