import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useState } from 'react';
import Button from '../../components/Posts/Button';

const components = { Button };

const PostPage = ({ frontmatter, mdxSource }) => {
  const [colors, setColor] = useState('theme-current');
  // console.log(mdxSource);

  return (
    <>
      <Layout>
        <Header color={setColor} colorTheme={colors} />
        <main className="px-9 py-7">
          <div className="first homeDiv fst">
            <h3 className="text-3xl font-semibold mb-10 z-10 md:text-3xl">
              {/* <span className="highlight" id={`${colors}`}> */}
              {frontmatter.title}
              {/* </span> */}
            </h3>
          </div>

          <Image
            src={frontmatter.thumbnailUrl}
            alt={frontmatter.alter}
            width={100}
            height={50}
            className="rounded-lg"
            objectFit="contain"
            layout="responsive"
            priority={true}
          />
          <br />
          <MDXRemote {...mdxSource} components={components} />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(/\.mdx?$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticPaths, getStaticProps };
export default PostPage;
