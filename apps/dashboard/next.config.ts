import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    resolveAlias: {
      '@': path.resolve(__dirname, 'src'),
      '@/public': path.resolve(__dirname, 'public'),
    },
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
