import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/en/privacy-policy',
        permanent: true
      },
      {
        source: '/terms-and-conditions',
        destination: '/en/terms-and-conditions',
        permanent: true
      }
    ]
  },
}

export default withNextIntl(nextConfig)
