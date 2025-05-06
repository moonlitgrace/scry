/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  webpack(config) {
    // get existing rule that handles svg imports
    const svgLoaderRule = config.module.rules.find((rule) => {
      return rule.test.test('.svg')
    })

    config.module.rules.push(
      // reply existing rule only for svg imports ending with ?url
      {
        ...svgLoaderRule,
        test: /\.svg$/i,
        resourseQuery: /url/
      },
      // conver all other .svg imports into components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourseQuery: { not: /url/ }, // exclude if .svg?url
        use: ['@svgr/webpack']
      }
    );

    // ignore .svg rule from default loader
    svgLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    },
  }
};

export default nextConfig;
