import Image from "next/image";

const Bubble = ({icon, size, top, left}: {icon: string, size: number, top?: number, left?: number}) => {

	return (
		<div
		className={`${top ? 'absolute' : 'relative'}
					rounded-full 
					flex justify-center align-center
					shadow-[inset_0_0_7px_0_rgba(112,115,118,0.53)]
					bg-[rgba(255,255,255,0.12)]
					backdrop-blur-[28px]`}
		style={{width: `${size}px`, height: `${size}px`, top:`${top ? top : 0}%`, left:`${left ? left : 0}%`}}>
			{icon && <Image src={icon} alt="Bubble" width={size * 0.5} height={size * 0.5} />}
		</div>
	)
}

export default Bubble;