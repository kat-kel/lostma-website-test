import type { NextConfig } from "next";

const debug = process.env.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
    assetPrefix: !debug ? '/lostma-website-test/' : '',
    basePath: '/lostma-website-test',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
