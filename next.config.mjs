import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://ec2-54-180-202-159.ap-northeast-2.compute.amazonaws.com:3000/:path*`
      }
    ]
  }
});
