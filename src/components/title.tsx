const Title = ({ children }: { children: string }) => {
  return (
    <h1
      className='
		text-center text-[40px] sm:text-[44px] lg:text-[75px] leading-[110%] mt-[42px] lg:mt-[62px] font-semibold z-20'
      style={{ whiteSpace: 'pre-line' }}>
      {children}
    </h1>
  )
}

export default Title
