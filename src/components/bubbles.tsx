'use client'

import Bubble from './bubble'
import useWindowDimensions from '@/hooks/useWindowDimentions'

import car from '@/app/icons/car.svg'
import cart from '@/app/icons/shoppingCart.svg'
import person from '@/app/icons/person.svg'
import hamburger from '@/app/icons/hamburger.svg'

const Bubbles = () => {
  let windowWidth = useWindowDimensions().width

  const shift = windowWidth > 768 ? 0 : 20

  return (
    <div className='absolute top-0 left-0 h-full w-full z-10 sm:-z-30'>
      <Bubble size={68} top={3} left={20 - shift} icon={car} />
      <Bubble size={54} top={46} left={30 - shift} icon={hamburger} />
      <Bubble size={58} top={12} left={75 + shift} icon={cart} />
      <Bubble size={58} top={83} left={80 + shift} icon={person} />
    </div>
  )
}

export default Bubbles
