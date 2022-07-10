import Link from 'next/link';
import Image from 'next/image';
import Twitter from '../src/img/twitter-svgrepo-com(1).svg';
import Facebook from '../src/img/facebook-svgrepo-com(1).svg';
import Github from '../src/img/github-svgrepo-com.svg';
import Email from '../src/img/gmail-svgrepo-com.svg';
import SHlogo from '../src/img/pngegg(58).png';
import RED from '../src/img/FEh99DyXsAI0cCm.png';
import Tposter from '../src/img/One_Piece_Film_RED_teaser_poster.jpg';
import Vposter from '../src/img/One_Piece_Film_Red_Visual_Poster.jpg';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
// import { Link } from 'react-scroll';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="wrapper flex w-full justify-center items-center bg-gray-100 dark:bg-zinc-900">
      <div className="pageContainer flex flex-col relative text-base text-gray-700 w-7/12 bg-white dark:text-gray-200 dark:bg-black">
        <nav className="nav flex justify-between items-center w-full border-b p-3.5 dark:border-zinc-800">
          <button
            type="button"
            className="checkbtn relative cursor hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <label className="leftside w-1/2 flex relative">
            <ul className="w-full flex justify-between items-center">
              <li className="nav-items">
                <Link activeClass="home" href="/">
                  <a className="navbar-links cursor home">Home</a>
                </Link>
              </li>

              <li className="nav-items">
                <Link activeClass="dashboard" href="/dashboard">
                  <a className="navbar-links cursor dashboard"> Dashboard </a>
                </Link>
              </li>
              <li className="nav-items">
                <Link activeClass="blog" href="/blog">
                  <a className="navbar-links cursor blog">Blog</a>
                </Link>
              </li>
            </ul>
          </label>
          <div className="rightside w-1/6 flex justify-between items-center mr-10">
            <span className="colorsbar">
              {/* <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
              <svg
                className="fill-black dark:fill-white w-4 h-3 hover:scale-125 duration-200 ease-linear cursor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 20.633 20.633"
                style={{ enableBackground: 'new 0 0 20.633 20.633' }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M10.79,15.617l9.648-9.646c0.133-0.131,0.195-0.301,0.195-0.473s-0.062-0.344-0.195-0.473l-0.012-0.012
              c-0.125-0.127-0.295-0.195-0.472-0.195h-4.682c-0.18,0-0.348,0.068-0.473,0.195l-4.48,4.479l-4.48-4.479
              C5.711,4.886,5.54,4.818,5.366,4.818H0.684c-0.182,0-0.349,0.068-0.475,0.195L0.196,5.025C0.068,5.148,0,5.322,0,5.498
              c0,0.176,0.068,0.348,0.196,0.473l9.648,9.646C10.108,15.88,10.53,15.88,10.79,15.617z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <div className="tooltip absolute w-20 p-1.5 rounded-lg text-xs font-semibold hidden">
                Other colors
              </div>
              <span className="colors absolute hidden flex-row m-0 active:flex">
                <div className="activeColors color bg-gradient-to-tl from-green-600 to-lime-400 group-active:border-2 border-white"></div>
                <div className="bg-gradient-to-tl color from-amber-400 to-yellow-400"></div>
                <div className="bg-gradient-to-tl color from-amber-300 to-red-600"></div>
                <div className="color colorTrans"></div>
              </span>
            </span>
            <button
              className="p-1 rounded-md bg-slate-100 dark:bg-zinc-600 cursor hover:ring-2 hover:ring-gray-300 transition-all"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            {/* <label
              htmlFor="check"
              className="bg-gray-300 relative w-12 h-8 rounded-full cursor"
            >
              <input
                type="checkbox"
                id="check"
                className="sr-only peer"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
              <span className="w-6 h-6 absolute rounded-full bg-slate-50 left-1 top-1 peer-checked:left-5 transition-all duration-300"></span>
            </label> */}
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter="transition opacity ease-out duration-300 transform"
          enterFrom="transform opacity-0 scale-y-0"
          enterTo="transform opacity-100 scale-y-100"
          leave="transition opacity ease-in duration-300 transform"
          leaveFrom="transform opacity-100 scale-y-100"
          leaveTo="transform opacity-0 scale-y-0"
          className="otherNav"
        >
          <div className="md:hidden id=mobile-menu">
            <div className="flex flex-col w-full relative px-2 bg-white border-b border-slate-200 dark:bg-black dark:border-zinc-800">
              <li className="nav-lists cursor">
                <Link activeClass="home" href="/">
                  <a className="navbar-links home">Home</a>
                </Link>
              </li>
              <li className="nav-lists cursor">
                <Link activeClass="dashboard" href="/dashboard">
                  <a className="navbar-links dashboard"> Dashboard </a>
                </Link>
              </li>
              <li className="nav-lists cursor">
                <Link activeClass="blog" href="/blog">
                  <a className="navbar-links about">Blog</a>
                </Link>
              </li>
            </div>
          </div>
        </Transition>

        <main className="home px-0.5 grid grid-cols-2 grid-rows-3 py-8 origin-bottom duration-500 ease-out">
          <div className="first homeDiv fst">
            <h2 className="text-3xl font-medium mb-3 text-black dark:text-white">
              <span className="highlight"> Harsha Bordhan Changma</span>
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
            <p className="mb-1.5">
              I&#39;m a self-taught developer with the basics for web
              development
              <span className="highlight"> HTML, CSS, JavaScript</span> and the
              frameworks
              <span className="highlight"> React, Nextjs and Tailwind CSS</span>
              .
            </p>

            <p className="mb-1.5">
              Currently designing and building some awesome website layouts
              using
              <span className="highlight"> Tailwind CSS and Nextjs</span> .
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
              Outside of development, I do enjoy playing guitar, watching
              japanese anime and sketch in free time. And also read manga.
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
            {/* <Image
              src={Vposter}
              alt="OP Poster"
            />  */}
            <Image src={Tposter} alt="OP Poster" />
          </div>
        </main>

        <footer className="border-t dark:border-zinc-800">
          <div className="sixth flex flex-col items-center p-5">
            <h3 className="mb-6 text-2xl">Contact</h3>
            {/* <p>You can catch up with me</p> */}
            <div className="contacts w-52 flex flex-row justify-between">
              <Link href="https://twitter.com/ChakmaHarsha">
                <a target="_blank">
                  <Image
                    className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                    src={Twitter}
                    alt="Contact Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="https://web.facebook.com/people/Harsha-Bordhan-Changma/100008888252198/">
                <a target="_blank">
                  <Image
                    className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                    src={Facebook}
                    alt="Contact Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>

              <Link href="https://github.com/HarshaBordhan">
                <a target="_blank">
                  <Image
                    className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                    src={Github}
                    alt="Contact Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="https://harshabordhanc@gmail.com">
                <a target="_blank">
                  <Image
                    className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                    src={Email}
                    alt="Contact Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
          </div>
          <p className="h-16 text-center py-4 text-gray-600 dark:text-gray-400">
            Built on my own - &copy; 2022
          </p>
        </footer>
      </div>
    </div>
  );
}
