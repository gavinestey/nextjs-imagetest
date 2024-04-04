/** @type {import('next').NextConfig} */

//loader: 'custom',
//loaderFile: './source/loader.js',

const nextConfig = {
    images: {
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
