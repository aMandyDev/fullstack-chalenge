
const nextConfig = {
  env: {
    FULLSTACK_CHALENGE_HOST: 'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge',
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig