import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Footer');

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
			<p className="mb-0">&copy; {t('copyright')}</p>
			<div className="flex sm:block gap-[10px]">
				<a className="sm:mr-[24px]" href="/privacy-policy">{t('privacy-policy')}</a>
				<a className="sm:mr-[24px]" href="/terms-and-conditions">{t('terms-and-conditions')}</a>
				<a href="mailto:mtsymlov@gmail.com">mtsymlov@gmail.com</a>
			</div>
		</footer>
	)
}

export default Footer;