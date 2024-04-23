import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from '@/i18n';

function Footer() {
	const t = useTranslations('Footer');
	const locale = useLocale();

	// setRequestLocale(locale);

	return (
		<footer className="
		w-full xl:max-w-[1200px] px-[10px] h-[46px]
		left-1/2 -translate-x-1/2
		absolute bottom-0
		px-1 sm:px-[10px] 
		flex justify-between items-center
		backdrop-blur-[21px]
		lg:backdrop-blur-none
		text-[10px] min-[375px]:text-xs text-[#BEBFC1] leading-semibold
		text-center
		z-50"
		>
			<p className="mb-0">&copy; {t('copyright')}</p>
			<div className="flex gap-[10px] flex-wrap justify-center">
				<a className="sm:mr-[24px]" href={`${locale}/privacy-policy`}>{t('privacy-policy')}</a>
				<a className="sm:mr-[24px]" href={`${locale}/terms-and-conditions`}>{t('terms-and-conditions')}</a>
				<a href="mailto:mtsymlov@gmail.com">mtsymlov@gmail.com</a>
			</div>
		</footer>
	)
}

export default Footer;