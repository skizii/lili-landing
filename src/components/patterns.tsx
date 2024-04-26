import Image from 'next/image'
import leftPattern from '../img/left-pattern.svg'
import rightPattern from '../img/right-pattern.svg'

const patternClassList = 'hidden lg:block absolute top-0 h-screen -z-40 min-w-min w-auto'

const PatternLeft = () => {
  return (
    <Image className={`${patternClassList} left-0`} src={leftPattern} alt='left pattern'></Image>
  )
}

const PatternRight = () => {
  return (
    <Image className={`${patternClassList} right-0`} src={rightPattern} alt='right pattern'></Image>
  )
}

export { PatternLeft, PatternRight }
