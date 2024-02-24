import Image from "next/image";
import phone_L from "@/img/phone_L.png";

const PhoneImage = () => {
	return (
		<Image
		src={phone_L}
		className="absolute left-1/2 transform -translate-x-1/2 bottom-0 -z-10"
		width={373}
		height={545}
		alt="phone"
		/>
	)
}

export default PhoneImage;