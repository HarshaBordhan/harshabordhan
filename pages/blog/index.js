import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sendy from '../../src/img/sendy.jpeg';
import Precog from '../../src/img/precog.jpeg';
// import styles from '../../styles/Modal.module.css';

export default function Blog() {
  const [colors, setColor] = useState('theme-current');
  return (
    <>
      <Layout>
        <Header color={setColor} colorTheme={colors} />
        <main className="blog px-9 py-7 grid auto-cols-fr auto-rows-auto">
          <div className="first homeDiv fst">
            <h2 className="text-4xl font-semibold mb-10 text-black dark:text-white z-10 md:text-3xl">
              {' '}
              <span className="highlight" id={`${colors}`}>
                Blog
              </span>
            </h2>
            <p>
              I haven&#39;t started to writing yet but interested to make up my
              mind in something to write. And quickly gonna make that happend.
              I&#39;ll try write some articles about many topics especially web
              development and edtech. For now, check the webpages below.
            </p>
          </div>
          <div className="second homeDiv fst">
            <h3 className="text-2xl font-semibold mb-7 text-black dark:text-white">
              Posts
            </h3>
            <div className="flex flex-col">
              <Link href="https://sendy-layout.vercel.app/">
                <a target="_blank">
                  <div className="post-items flex justify-between items-center cursor md:flex-col md:items-start">
                    <div className="post-title py-3">
                      <div className="flex">
                        <div className="text-xl font-medium w-5">i.</div>
                        <h4 className="text-xl ml-4 mb-1.5">
                          Sendy layout(not responsive)
                        </h4>
                      </div>
                      <div className="ml-9 opacity-50">
                        A layout that makes any other layout easy
                      </div>
                    </div>
                    <div className="post-time text-color md:pl-9">
                      June 14, 2022 - 1min
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="https://precog-finance.vercel.app/">
                <a target="_blank">
                  <div className="post-items flex justify-between items-center cursor md:flex-col md:items-start">
                    <div className="post-title py-3">
                      <div className="flex">
                        <div className="text-xl font-medium w-5">ii.</div>
                        <h4 className="text-xl ml-4 mb-1.5">
                          Precog finance home page(not responsive)
                        </h4>
                      </div>
                      <div className="ml-9 opacity-50">A simple web page</div>
                    </div>
                    <div className="post-time text-color md:pl-9">
                      June 24, 2022 - 1min
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="third homeDiv fst">
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
              going to add some articles ASAP..........
            </div>
          </div>
          <div className="fourth homeDiv fst">
            <h3 className="text-2xl font-semibold mb-10 text-black dark:text-white">
              Posts in Image
            </h3>
            <div className="images">
              <Link href="https://sendy-layout.vercel.app/">
                <a target="_blank">
                  <div className="w-320 flex flex-col cursor hover:scale-[1.01] transition-all">
                    <span className="relative">
                      <Image
                        src={Sendy}
                        alt="Sendy"
                        // width={320}
                        // height={160}
                        // layout="fill"
                        // objectFit="cover"
                        className="w-320 rounded-md mb-2"
                      />
                    </span>
                    <div className="mt-6 mb-4">
                      <h4 className="text-2xl font-medium mb-1.5">
                        Sendy layout(not responsive)
                      </h4>
                      <p className="text-base mb-1 text-gray-600 dark:text-gray-300">
                        A layout that makes any other layout easy...
                      </p>
                      <div className="text-sm text-color">
                        <span>June 14, 2022</span> - <span>1min</span>
                      </div>
                    </div>
                    <p className="flex items-center text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-400 duration-200 ease-out">
                      Continue visiting
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
                </a>
              </Link>
              <Link href="https://precog-finance.vercel.app/">
                <a target="_blank">
                  <div className="w-320 flex flex-col cursor hover:scale-[1.01] transition-all">
                    <span className="relative">
                      <Image
                        src={Precog}
                        alt="Precog"
                        // width={320}
                        // height={160}
                        // layout="fill"
                        // objectFit="cover"
                        className="w-320 rounded-md mb-2"
                      />
                    </span>
                    <div className="mt-6 mb-4">
                      <h4 className="text-2xl font-medium mb-1.5">
                        Precog finance home page(not responsive)
                      </h4>
                      <p className="text-base mb-1 text-gray-600 dark:text-gray-300">
                        A simple web page...
                      </p>
                      <div className="text-sm text-color">
                        <span>June 24, 2022</span> - <span>1min</span>{' '}
                      </div>
                    </div>
                    <p className="flex items-center text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-400 duration-200 ease-out">
                      Continue visiting
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
                </a>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </Layout>
      {/*
       <div className={styles.modal}>
        <h1>Currently Building</h1>
      </div>
      <div className={styles.overlay}></div>
    */}
    </>
  );
}
