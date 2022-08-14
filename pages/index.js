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
    // if (count === images.length) return (count = 0);
    return (count = (count + 1) % images.length);
    // if (count < 0) return (count = images.length - 1);
    // return count;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // setIndex(count => change(count + 1));
      setIndex(change(index));
    }, 6000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <Layout>
      <Header color={setColor} colorTheme={colors} />
      <main className="home px-0.5 py-7 grid grid-cols-2 auto-rows-auto">
        <div className="first homeDiv fst">
          <h2 className="text-4xl font-medium mb-2 text-black dark:text-white z-10 md:text-3xl sm:text-2xl">
            <span className={`highlight whitespace-nowrap`} id={`${colors}`}>
              Harsha Bordhan Chakma
            </span>
          </h2>

          <h3 className="text-xl font-medium mb-8">
            Front-end web developer, web designer, artist and creator.
          </h3>
          <p className="mb-1.5">
            Not have enough experience yet. No real-world project but gladly
            looking forward to it.
          </p>

          <p className="mb-2">
            Recently started working in a creative agency,
            <Link href="https://eetpixel.com/">
              <a className="underline font-semibold pl-1" target="_blank">
                eetpixel
              </a>
            </Link>
            .
          </p>
        </div>
        <div className="second homeDiv fst">
          <h3 className="text-2xl font-medium mb-7 text-black dark:text-white">
            Blog Posts
          </h3>
          <div className="flex flex-col">
            {' '}
            <Link href="https://sendy-layout.vercel.app/">
              <a target="_blank">
                <div className="w-full py-3 cursor blog transform hover:scale-[1.01] transition-all">
                  {/* transition-all => transition-property: all;
                      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                      transition-duration: 150ms;
                      transform => translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
*/}
                  <div className="flex">
                    <div className="text-xl font-medium w-5">i.</div>
                    <h4 className="text-xl ml-4 mb-1.5">
                      Sendy layout(not responsive)
                    </h4>
                  </div>
                  <div className="ml-9 text-color">June 14,2022 - 1min</div>
                </div>
              </a>
            </Link>
            <Link href="https://precog-finance.vercel.app/">
              <a target="_blank">
                <div className="w-full py-3 cursor blog transform hover:scale-[1.01] transition-all">
                  <div className="flex">
                    <div className="text-xl font-medium w-5">ii.</div>
                    <h4 className="text-xl ml-4 mb-1.5">
                      Precog finance home page(not responsive)
                    </h4>
                  </div>
                  <div className="ml-9 text-color">June 24,2022 - 1min</div>
                </div>
              </a>
            </Link>
          </div>
          <Link href="/blog">
            <a className="flex justify-between items-center w-28 mt-4 text-color hover:text-gray-700 dark:hover:text-gray-200 duration-200 ease-out animate-bounce">
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
          <h3 className="text-2xl font-medium mb-10 text-black dark:text-white">
            Experience
          </h3>
          <p className="mb-2 z-10">
            I&#39;m a self-taught developer with the basics for web development
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              HTML, CSS, JavaScript
            </span>{' '}
            and the frameworks
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              React, Nextjs and Tailwind CSS
            </span>
            .
          </p>

          <p className="mb-2 z-10">
            Currently designing and building some awesome website layouts using
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              Tailwind CSS and Nextjs
            </span>{' '}
            .
          </p>
          <p className="mb-2">
            You can check them out on my
            <Link href="/blog">
              <a className="underline font-semibold px-1">Blog</a>
            </Link>
            page even though the process is now under construction.
          </p>
        </div>
        <div className="fourth homeDiv fst">
          <h3 className="text-2xl font-medium mb-10 text-black dark:text-white">
            Other Activities
          </h3>
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
            Looking forward to watch the upcoming movie of the One Piece film
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
      </main>
      <Footer />
    </Layout>
  );
}
