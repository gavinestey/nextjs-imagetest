/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './source/loader.js',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'darl-p-001.sitecorecontenthub.cloud',
                port: '',
                pathname: '/api/public/content/**',
            },
        ],
    },
};

export default nextConfig;
