import Link from 'next/link';
import Image from 'next/image';
import SHlogo from '../src/img/pngegg(58).png';
import RED from '../src/img/FEh99DyXsAI0cCm.png';
import Tposter from '../src/img/One_Piece_Film_RED_teaser_poster.jpg';
import Vposter from '../src/img/One_Piece_Film_Red_Visual_Poster.jpg';
import { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [colors, setColor] = useState('theme-current');

  const images = [Tposter, Vposter];
  const zoomInProperties = {
    // indicators: false,
    // scale: 1,
    arrows: false,
    duration: 7000,
    transitionDuration: 500,
    infinite: true,
  };

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
            looking forward for it.
          </p>

          <p className="base font-normal mb-1.5 text-gray-600 dark:text-gray-400">
            Recently started working at a creative agency,
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
            <Link href="/dashboard">
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
          <Fade {...zoomInProperties}>
            {images.map((each, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center w-full h-full"
              >
                <Image
                  className=""
                  src={each}
                  alt="OP Poster"
                  width={265}
                  height={376}
                />
              </div>
            ))}
          </Fade>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
