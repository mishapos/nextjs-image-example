/** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'standalone',
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.vercel.com',
//         port: '',
//         pathname: '/image/upload/**',
//       },
//     ],
//   },
// }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    // environments
    publicRuntimeConfig: {
        COMPANY: '셀타스퀘어',
    },

    reactStrictMode: false,
    swcMinify: true,
    output: 'standalone',

    async rewrites() {
        return [
            {
                source: '/v2/api/:path*',
                destination: 'http://localhost:8000/:path*',
            },
        ]
    },
}

module.exports = withBundleAnalyzer(nextConfig)

