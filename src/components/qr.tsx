import Image from "next/image";
import qr from "@/img/qr.svg";

const Qr = ({top, position}: {top: number, position: string}) => {
	return (
		<Image
		src={qr}
		className={`${position} ${position === 'absolute' ? 'left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} -z-10`}
		style={{top: `${top}px`}}
		width={230}
		height={230}
		alt="qr"
		/>
	)
}

export default Qr;