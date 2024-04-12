const Subtitle = ({children}: {children: string}) => {
	return (
		<h2	className="font-medium leading-[117%] text-[14px] sm:text-[16px] lg:text-[19px] text-center mt-[19px] z-20">
			{children}
		</h2>
	)
}

export default Subtitle;