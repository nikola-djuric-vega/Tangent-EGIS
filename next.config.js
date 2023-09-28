const aviationLinks = require('./redirects/aviation')
const egisFR = require('./redirects/egis-fr')
const egisGroup = require('./redirects/egis-group')

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

module.exports = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt', 'es', 'de'],
  },
  images: {
    domains: ['media.umbraco.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    //ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/home-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-page/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/fr/page-d-accueil',
        destination: '/fr/',
        permanent: true,
      },
      {
        source: '/fr/page-d-accueil/:path*',
        destination: '/fr/:path*',
        permanent: true,
      },
      {
        source: '/page-d-accueil/:path*',
        destination: '/fr/:path*',
        permanent: true,
      },
      ...egisFR,
      ...aviationLinks,
      ...egisGroup,
    ]
  },
}
