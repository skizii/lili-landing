import Image from 'next/image'
import logo from '../img/logo.svg';

const Logo = () => {
	return (
		<Image 
		src={logo}
		alt="lili logo" 
		width={74}
		height={43}/>
	)
}

export default Logo;