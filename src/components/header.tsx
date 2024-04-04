import Logo from "./logo";

const Header = ({className}: {className?: string}) => {
	return (
		<div className={`fixed top-0 left-0 flex justify-start items-center w-full h-[80px] bg-[#3E4146] ${className} `}>
			<a href="/">
				<Logo></Logo>
			</a>
		</div>
	)
}

export default Header;