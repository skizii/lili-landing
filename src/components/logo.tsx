import Image from 'next/image'
import logo from '../img/logo.svg';

const Logo = () => {
	return (
		<Image 
		className="mx-auto pt-[30px]"
		src={logo}
		alt="lili logo" 
		width={74}
		height={43}/>
	)
}

export default Logo;