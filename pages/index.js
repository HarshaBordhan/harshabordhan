import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import SHlogo from '../src/img/pngegg(58).png';
import RED from '../src/img/FEh99DyXsAI0cCm.png';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SliderImage from '../components/SliderImage';
import { motion } from 'framer-motion';

export default function Home() {
  const [colors, setColor] = useState('theme-current');
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: '/RED(TeaserPoster).jpg',
      alt: 'OP Poster',
      priority: true,
      showImage: index === 0,
    },
    {
      src: '/Red(VisualPoster).jpg',
      alt: 'OP Poster',
      priority: false,
      showImage: index === 1,
    },
  ];

  const change = count => {
    return (count = (count + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(change(index));
    }, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <Layout>
      <Header color={setColor} colorTheme={colors} />
      <motion.main className="homepage px-9 py-7 grid grid-cols-2 auto-rows-auto justify-center">
        <div className="first homeDiv fst">
          <h2 className="font-[arial] text-4xl font-normal mb-2 z-10 md:text-3xl sm:text-2xl">
            <span
              className={`highlight highlightheading whitespace-nowrap`}
              id={`${colors}`}
            >
              Harsha Bordhan Chakma
            </span>
          </h2>
          <h3 className="font-normal mb-6">
            Front-end web developer, artist and creator.
          </h3>
          <p className="mb-1.5">
            Learning front-end techniques and frameworks. Then jump into the
            back-end through the flowing time.
            {/* Looking forward(Have plan) to work in blockchain websites(Web 3.0) in future. */}
          </p>

          <p className="mb-2">
            Currently working as a front-end web developer in a creative agency,
            <Link href="https://eetpixel.com/">
              <a className="underline font-medium pl-1" target="_blank">
                eetpixel
              </a>
            </Link>
            .
          </p>
        </div>
        <div className="second homeDiv fst">
          <h3 className="text-2xl font-normal mb-7">Blog Posts</h3>
          <div className="flex flex-col items-start">
            {' '}
            <div className="w-full py-3 cursor blog transform hover:scale-[1.01] transition-all">
              <Link href={`/blog/my-coding-journey`}>
                {/* <a target="_blank"> */}
                <a>
                  <div className="flex">
                    <div className="text-xl font-medium w-5">i.</div>
                    <h4 className="text-xl ml-4 mb-1.5">
                      From zero to web development: my coding journey
                    </h4>
                  </div>
                  <div className="ml-9 text-color">January 29, 2023 - 5min</div>
                  {/* </a> */}
                </a>
              </Link>
            </div>
            <div className="w-full py-3 cursor blog transform hover:scale-[1.01] transition-all">
              <Link href={`/blog/sendy`}>
                {/* <a target="_blank"> */}
                <a>
                  <div className="flex">
                    <div className="text-xl font-medium w-5">ii.</div>
                    <h4 className="text-xl ml-4 mb-1.5">
                      JavaScript: A high-level programming language
                    </h4>
                  </div>
                  <div className="ml-9 text-color">January 2, 2023 - 8min</div>
                  {/* </a> */}
                </a>
              </Link>
            </div>
          </div>
          <Link href="/blog">
            <a className="flex justify-between items-center w-28 mt-4 text-color hover:text-gray-700 dark:hover:text-gray-200 duration-200 ease-out">
              Read more{' '}
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
            </a>
          </Link>
        </div>
        <div className="third homeDiv fst">
          <h3 className="text-2xl font-normal mb-10">Experience</h3>
          <div className="mb-2 z-10">
            <p>
              I&#39;m a self-taught developer with the basics for web
              development
            </p>
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              HTML, CSS, JavaScript{' '}
            </span>
            <p>and the frameworks</p>
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              React, Next.js and TailwindCSS
            </span>
            .
          </div>

          <div className="mb-2 z-10">
            <p>
              Currently building some simple but awesome web applications using
            </p>
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              TailwindCSS and Next.js
            </span>{' '}
            .
          </div>
          <p className="mb-2">
            You can check them out on my
            <Link href="/blog">
              <a className="underline font-medium px-1">Blog</a>
            </Link>
            page.
          </p>
        </div>
        <div className="fourth homeDiv fst">
          <h3 className="text-2xl font-normal mb-10">Other Activities</h3>
          <p className="mb-2">
            Outside of development, I do enjoy playing guitar, watching japanese
            anime and sketching in free time. And also read manga.
          </p>
          <p className="mb-2">
            Out of a few anime series and movies, my favourite one is &#34;ONE
            PIECE&#34;
          </p>
        </div>
        <div className="fifth homeDiv col-start-1 col-end-2 sm:col-span-full sm:items-center">
          <div className="flex items-center mb-6">
            <span className="w-6 h-6 mr-2 flex items-center">
              {/* <Image
                className="strawhat"
                src={SH}
                alt="OP Logo"
                width={32}
                height={20}
              />  */}
              <Image
                className="strawhatlogo"
                src={SHlogo}
                alt="OP Logo"
                width={22}
                height={22}
              />
            </span>{' '}
            <div className="flex justify-between items-center">
              <p>Watching</p>
              <span className="mx-1.5">-</span>
              <p className="text-color">One Piece</p>
            </div>
          </div>
          <p className="mb-10">
            Looking forward to watch the latest movie of the One Piece film
            series,
          </p>
          <div className="w-full sm:w-1/2">
            <Image src={RED} alt="OP film Logo" />
          </div>
        </div>
        <div className="sixth homeDiv col-start-2 col-end-3 justify-center items-center sm:col-span-full">
          <div className="w-52 h-72 relative">
            {images.map((img, ind) => {
              return (
                <div key={ind}>
                  <SliderImage
                    src={img.src}
                    alt={img.alt}
                    priority={img.priority}
                    showImage={img.showImage}
                    // key={ind}
                  />
                </div>
              );
            })}
            {/* <Image
              src={images[index]}
              alt="OP Poster"
              width={265}
              height={376}
              className={index >= 0 ? `${`fade-anim`}` : ''}
            /> */}
          </div>
        </div>
      </motion.main>
      <Footer />
    </Layout>
  );
}
