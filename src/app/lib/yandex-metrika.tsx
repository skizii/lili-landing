'use client'

import { useNavigation } from './useNavigation'

export default function YandexMetrika() {
  useNavigation({
    on: {
      routeChanged: ({ url }) => {
        // @ts-ignore
        if (window.ym) {
          // @ts-ignore
          window.ym(96878953, 'hit', url)
        }
      },
    },
  })

  return null
}
