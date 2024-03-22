import Image from "next/image";
import qr from "@/img/qr.svg";

const Qr = ({top}: {top: number}) => {
	return (
		<Image
		src={qr}
		className={`absolute left-1/2 -translate-x-1/2 ${top == 0 ? '' : '-translate-y-1/2'} -z-10 bg-main`}
		style={{top: `${top}px`}}
		width={230}
		height={230}
		alt="qr"
		/>
	)
}

export default Qr;