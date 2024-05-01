import { useTranslations } from 'next-intl'

import Bubble from './bubble'

const cardParentClassList = [
  'absolute',
  'hidden',
  'min-[900px]:block',
  'p-[16px]',
  'w-[300px]',
  'backdrop-blur-[30px]',
  'bg-[#282C32]/[.74]',
  'rounded-xl',
  'border',
  'border-solid',
  'border-white/[.43]',
  'text-base',
]

const Card = ({
  icon,
  category,
  top,
  left,
  spent,
  split,
  total,
  comment,
}: {
  icon: string
  category: string
  top: number
  left: number
  spent: string
  split?: string
  total?: string
  comment?: string
}) => {
  const t = useTranslations('Cards')

  if (split) {
    return (
      <div className={cardParentClassList.join(' ')} style={{ top: `${top}px`, left: `${left}px` }}>
        <div className='mb-[12px] flex justify-between'>
          <div className='flex justify-center'>
            <Bubble size={44} icon={icon} />
            <div className='ml-[12px]'>
              <p className='text-left flex items-center justify-left'>{category}</p>
              <p className='text-sm text-left flex items-center justify-left text-[#AAABAB]'>
                {t('me')} + {split}
              </p>
            </div>
          </div>
          <div>
            <p className='flex items-center justify-end'>
              -{spent}
              {t('currency')}
            </p>
            <p className='text-sm text-left flex items-center justify-end text-[#AAABAB]'>
              {t('out')} {total}
              {t('currency')}
            </p>
          </div>
        </div>
        <p
          className="pl-[15px] pr-[5px] py-[10px] leading-5 font-normal text-left block relative w-full rounded-xl rounded-tl-none bg-[#5E5E5F]
				after:content-[''] after:absolute after:w-0 after:h-0 after:border-[20px]
				after:border-solid after:border-transparent after:border-b-[#5E5E5F]
				after:rotate-45 after:-z-10 after:top-[-20px] after:left-0">
          {comment}
        </p>
      </div>
    )
  } else {
    return (
      <div
        className={cardParentClassList.join(' ') + ' min-[900px]:flex justify-between '}
        style={{ top: `${top}px`, left: `${left}px` }}>
        <div className='flex justify-center'>
          <Bubble size={44} icon={icon} />
          <p className='ml-[12px] text-left flex items-center justify-left'>{category}</p>
        </div>
        <p className='flex items-center justify-center'>
          -{spent}
          {t('currency')}
        </p>
      </div>
    )
  }
}

export default Card
