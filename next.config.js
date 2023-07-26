/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.vintage-artgallery.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

