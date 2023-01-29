import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByNum } from '../components/utils/serialization';

export default function Blog({ posts }) {
  const [colors, setColor] = useState('theme-current');
  // console.log(posts);
  return (
    <>
      <Layout>
        <Header color={setColor} colorTheme={colors} />
        <main className="blogpage px-9 py-7 grid auto-cols-fr auto-rows-auto justify-center">
          <div className="first homeDiv fst">
            <h2 className="text-4xl font-normal mb-10 z-10 md:text-3xl">
              {' '}
              <span className="highlight" id={`${colors}`}>
                Blog
              </span>
            </h2>
            <p>
              I am interested in writing about a variety of topics, particularly
              web development and edtech. In this blog page, you can read blog
              posts and check out the webpages below. Thank you for your
              interest!
            </p>
          </div>
          <div className="second homeDiv fst">
            <h3 className="text-2xl font-normal mb-7">Posts</h3>
            <div className="flex flex-col gap-8">
              {posts.map((post, index) => (
                <Link href={'/blog/' + post.slug} passHref key={index}>
                  <div className="post-items flex justify-between items-center gap-12 cursor md:flex-col md:items-start md:gap-0">
                    <div className="post-title py-3">
                      <div className="flex">
                        <div className="text-xl font-medium w-5">
                          {post.frontmatter.serial}.
                        </div>
                        <h4 className="text-xl ml-4 mb-1.5">
                          {post.frontmatter.title}
                        </h4>
                      </div>
                      <div className="ml-9 opacity-50">
                        {post.frontmatter.description}
                      </div>
                    </div>
                    <div className="post-time text-color md:pl-9">
                      {post.frontmatter.date} - {post.frontmatter.duration}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="third homeDiv fst">
            <div className="flex items-center animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg> 
              <span className="highlight ml-1.5" id={`${colors}`}>
                gonna add some articles ASAP..........
              </span> 
            </div> 
          </div> */}
          <div className="fourth homeDiv fst">
            <h3 className="text-2xl font-normal mb-10">Posts in Image</h3>
            <div className="images">
              {posts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} passHref key={index}>
                  <div className="w-320 flex flex-col justify-center cursor hover:scale-[1.01] transition-all border border-transparent dark:border-slate-800">
                    <span className="relative">
                      <Image
                        src={post.frontmatter.thumbnailUrl}
                        alt={post.frontmatter.alter}
                        width={320}
                        height={160}
                        className="rounded-lg"
                        // layout="responsive"
                        // objectFit="contain"
                        // layout="fill"
                        objectFit="cover"
                        priority={true}
                      />
                    </span>
                    <div className="mt-6 mb-4">
                      <h4 className="text-xl font-medium mb-3">
                        {post.frontmatter.title}
                      </h4>
                      <p className="text-base mb-1 text-gray-600 dark:text-gray-300">
                        {post.frontmatter.description}
                      </p>
                      <div className="text-sm text-color">
                        <span>{post.frontmatter.date}</span> -{' '}
                        <span>{post.frontmatter.duration}</span>
                      </div>
                    </div>
                    <p className="flex items-center text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-400 duration-200 ease-out">
                      Continue reading
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      frontmatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts: posts.sort(sortByNum),
    },
  };
}
