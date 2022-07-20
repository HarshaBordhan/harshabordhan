import Link from 'next/link';
import Image from 'next/image';
import SHlogo from '../src/img/pngegg(58).png';
import RED from '../src/img/FEh99DyXsAI0cCm.png';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default function Home() {
  const [colors, setColor] = useState('theme-current');
  const [index, setIndex] = useState(0);

  const images = ['/RED(TeaserPoster).jpg', '/Red(VisualPoster).jpg'];

  const change = count => {
    if (count === images.length) return (count = 0);
    // return (count = (count + 1) % images.length);
    if (count < 0) return (count = images.length - 1);
    return count;
    // setIndex(count);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(count => change(count + 1));
      // animRef.current.classList.add('fade-anim');
    }, 6000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header color={setColor} colorTheme={colors} />
      <main className="home px-0.5 grid grid-cols-2 grid-rows-3 py-8 origin-bottom duration-500 ease-out">
        <div className="first homeDiv fst">
          <h2 className="text-3xl font-medium mb-3 text-black dark:text-white z-10">
            <span className={`highlight whitespace-nowrap`} id={`${colors}`}>
              Harsha Bordhan Chakma
            </span>
          </h2>

          <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-200">
            Front-end web developer, web designer, artist and so on.
          </h3>
          <p className="base font-normal mb-1.5 text-gray-600 dark:text-gray-400">
            Not have enough experience yet. No real-world project but gladly
            looking forward to it.
          </p>

          <p className="base font-normal mb-1.5 text-gray-600 dark:text-gray-400">
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
          <p className="mb-1.5 z-10">
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

          <p className="mb-1.5 z-10">
            Currently designing and building some awesome website layouts using
            <span className="highlight whitespace-nowrap" id={`${colors}`}>
              {' '}
              Tailwind CSS and Nextjs
            </span>{' '}
            .
          </p>
          <p className="mb-1.5">
            You can check them out on my
            <Link href="/blog">
              <a className="underline font-semibold px-1">Blog</a>
            </Link>
            page when the building construction is finished.
          </p>
        </div>
        <div className="third homeDiv fst">
          <p className="text-gray-600 dark:text-gray-400">
            Outside of development, I do enjoy playing guitar, watching japanese
            anime and sketching in free time. And also read manga.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Out of a few anime series and movies, my favourite one is &#34;ONE
            PIECE&#34;
            <span className="w-6 h-6 flex items-center">
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
            </span>
          </p>
        </div>
        <div className="fourth homeDiv col-start-1 col-end-2">
          <p className="mb-10">
            Looking forward to watch the upcoming movie of the One Piece film
            series,
          </p>
          <Image src={RED} alt="OP film Logo" />
        </div>
        <div className="fifth homeDiv col-start-2 col-end-3">
          <div className="flex flex-row justify-center items-center w-full h-full">
            <Image
              src={images[index]}
              alt="OP Poster"
              width={265}
              height={376}
            />
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
