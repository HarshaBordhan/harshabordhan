/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  module: {
    // …
    rules: [
      // …
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {},
          },
        ],
      },
    ],
  },
};

module.exports = nextConfig;
