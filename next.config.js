/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dashboard.vintage-artgallery.com',
                port: '',
                pathname: '/**',
            },
        ],
        
    },
    
    
}

module.exports = nextConfig

