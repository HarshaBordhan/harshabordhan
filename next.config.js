const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  swcMinify: true,
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

// next.config.js;

// ESM
// import nextMDX from '@next/mdx';
// import remarkFrontmatter from 'remark-frontmatter';

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkFrontmatter],
//     rehypePlugins: [],
//   },
// });

// export default withMDX({
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   reactStrictMode: true,
//   swcMinify: true,
// });
