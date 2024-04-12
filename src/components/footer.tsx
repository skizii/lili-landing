const Footer = () => {
	return (
		<footer className="
		w-full xl:max-w-[1200px] px-[10px] h-[46px]
		left-1/2 -translate-x-1/2
		absolute bottom-0
		flex justify-between items-center
		backdrop-blur-[21px]
		lg:backdrop-blur-none
		text-[10px] min-[375px]:text-xs text-[#BEBFC1] leading-semibold
		z-50">
			<p className="mb-0">&copy; 2024 Mikhail Tcymlov</p>
			<div className="flex sm:block gap-[10px]">
				<a className="sm:mr-[24px]" href="/privacy-policy">Privacy Policy</a>
				<a className="sm:mr-[24px]" href="/terms-and-conditions">Terms & Conditions</a>
				<a href="mailto:hello@lili.com">hello@lili.com</a>
			</div>
		</footer>
	)
}

export default Footer;