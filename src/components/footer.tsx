const Footer = () => {
	return (
		<footer className="
		w-full xl:max-w-[1200px] px-[10px] h-[46px]
		left-1/2 -translate-x-1/2
		absolute bottom-0
		flex justify-between items-center
		backdrop-blur-[21px]
		lg:backdrop-blur-none
		text-xs text-[#BEBFC1] leading-semibold">
			<p>&copy; 2024 lili</p>
			<div>
				<a className="mr-[24px]" href="#">Privacy Policy</a>
				<a href="mailto:hello@lili.com">hello@lili.com</a>
			</div>
		</footer>
	)
}

export default Footer;