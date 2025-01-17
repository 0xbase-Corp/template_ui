/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
