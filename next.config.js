/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router는 Next.js 13+에서 기본값이므로 별도 설정 불필요

  async redirects() {
    return [
      {
        source: '/img/logo-dark.svg',
        destination: '/logo-dark.png',
        permanent: true,
      },
      {
        source: '/img/logo-light.svg',
        destination: '/logo-light.png',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig