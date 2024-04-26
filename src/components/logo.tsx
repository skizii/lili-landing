'use client'

import Image from 'next/image'
import useWindowDimensions from '@/hooks/useWindowDimentions'

import logo from '../img/logo.svg'

const Logo = ({ className }: { className?: string }) => {
  const windowWidth = useWindowDimensions().width
  const isMobile = windowWidth <= 768

  return (
    <Image
      className={className}
      src={logo}
      alt='lili logo'
      width={isMobile ? 43 : 74}
      height={isMobile ? 27 : 43}
    />
  )
}

export default Logo
