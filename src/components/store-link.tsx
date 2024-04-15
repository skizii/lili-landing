import Image from 'next/image';
import app_store from '../img/app_store.svg';

const StoreLink = ({link}: {link: string}) => {
	return (
		<a className="mx-auto mt-[40px] inline-block z-50" href={link} target={'_blank'}>
			<Image
			src={app_store}
			alt="lili logo"
			width={169}
			height={58}/>
		</a>
	)
}

export default StoreLink;
