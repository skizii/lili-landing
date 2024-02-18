import Image from 'next/image';
import leftPattern from '../img/left-pattern.svg'
import rightPattern from '../img/right-pattern.svg'

const PatternLeft = () => {
	return (
		<Image className={`absolute left-0 top-0 h-screen -z-10 min-w-min w-auto`} src={leftPattern} alt="left pattern"></Image>
	)
}

const PatternRight = () => {
	return (
		<Image className={`absolute right-0 top-0 h-screen -z-10 min-w-min w-auto`} src={rightPattern} alt="right pattern"></Image>
	)
}

export {PatternLeft, PatternRight};