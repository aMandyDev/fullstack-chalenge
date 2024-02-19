
const nextConfig = {
  env: {
    FULLSTACK_CHALENGE_HOST: 'https://bff-fullstack-chalenge-8a02420026da.herokuapp.com/api/bffmsfullstackchalenge',
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