import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import useOnclickOutside from 'react-cool-onclickoutside';
// import soundTrack from '../../sounds/converted/clickOne.mp3';

export default function Header({ color, colorTheme }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const handleColor = () => {
    setIsShow(!isShow);
  };

  const closeColor = () => {
    setIsShow(false);
  };

  const ref = useOnclickOutside(() => closeColor());

  const [play] = useSound('/sounds/clickThree.wav');
  const [boop] = useSound('/sounds/clickFour.wav');

  useEffect(() => {
    const currentColor = localStorage.getItem('theme-color');
    if (currentColor) {
      color(currentColor);
    }
    setMounted(true);
  }, [color]);

  const handleClick = theme => {
    color(theme);
    localStorage.setItem('theme-color', theme);
  };

  return (
    <>
      {/*<header className="main-header border-b dark:border-zinc-800">
  //   <nav className="navbar w-full px-5 py-3.5 border-b dark:border-zinc-800">*/}
      <header className="main-header">
        <nav className="navbar w-full px-9 py-3.5">
          <div className="nav flex justify-between items-center">
            <button
              type="button"
              className="checkbtn relative cursor hidden"
              data-toggle="collapse"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`group z-50 relative w-6 h-6 flex flex-col ${
                  isOpen ? 'justify-around' : 'justify-evenly'
                } items-center`}
              >
                <motion.span
                  className={`${
                    isOpen ? 'w-5' : 'w-full'
                  } h-0.5 bg-black rounded-lg  dark:bg-white`}
                  initial={false}
                  animate={
                    isOpen
                      ? { rotate: 45, translateY: 8 }
                      : {
                          rotate: 0,
                          translateY: 0,
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    ease: 'easeInOut',
                  }}
                />
                <span
                  className={`${
                    isOpen ? 'w-0 h-0' : 'w-full h-0.5'
                  } bg-black rounded-lg  dark:bg-white`}
                />
                <motion.span
                  className={`${
                    isOpen ? 'w-5' : 'w-full'
                  } h-0.5 bg-black rounded-lg  dark:bg-white`}
                  initial={false}
                  animate={
                    isOpen
                      ? { rotate: -45, translateY: -8 }
                      : {
                          rotate: 0,
                          translateY: 0,
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </button>
            <label className="leftside">
              <ul className="navul w-full flex justify-start gap-8 items-center text-sm">
                <li className="nav-items">
                  <Link href="/">
                    <a
                      className={`${
                        router.pathname === '/' ? 'activeNav' : ''
                      } navbar-links cursor`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-items">
                  <Link href="/blog">
                    <a
                      className={`${
                        router.pathname === '/blog' ? 'activeNav' : ''
                      } navbar-links cursor`}
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="nav-items">
                  <Link href="/guestbook">
                    <a
                      className={`${
                        router.pathname === '/guestbook' ? 'activeNav' : ''
                      } navbar-links cursor`}
                    >
                      Guestbook
                    </a>
                  </Link>
                </li>
                {/* <li className="nav-items">
                  <Link href="/tweets">
                    <a
                      className={`${
                        router.pathname === '/tweets' ? 'activeNav' : ''
                      } navbar-links cursor`}
                    >
                      Tweets
                    </a>
                  </Link>
                </li> */}
              </ul>
            </label>
            <div className="rightside w-1/6 flex justify-between items-center">
              {/* md:w-1/5 sm:w-1/4 */}
              <div className="colorsbar relative" ref={ref}>
                <span
                  className="cursor"
                  title="Choose Highlight Color"
                  onClick={handleColor}
                >
                  {/* <?xml version="1.0" encoding="iso-8859-1"?>
              <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
                  <svg
                    className={`w-4 h-3 fill-black dark:fill-white ${
                      isShow ? 'rotation' : 'rotation-reverse'
                    }`}
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
                </span>
                <div className="colorsdiv h-20 absolute">
                  {isShow ? (
                    <span
                      className="flex flex-row m-0"
                      // focusable="false"
                    >
                      <div
                        className={`${
                          (color && colorTheme) === 'theme-current'
                            ? 'activeColor'
                            : ''
                        } color bg-current`}
                        onClick={() => {
                          handleClick('theme-current');
                          boop();
                        }}
                      ></div>
                      <div
                        className={`${
                          (color && colorTheme) === 'theme-primary'
                            ? 'activeColor'
                            : ''
                        } color theme-primary`}
                        onClick={() => {
                          handleClick('theme-primary');
                          boop();
                        }}
                      ></div>
                      <div
                        className={`${
                          (color && colorTheme) === 'theme-secondary'
                            ? 'activeColor'
                            : ''
                        } color theme-secondary`}
                        onClick={() => {
                          handleClick('theme-secondary');
                          boop();
                        }}
                      ></div>
                      <div
                        className={`${
                          (color && colorTheme) === 'theme-tertiary'
                            ? 'activeColor'
                            : ''
                        } color theme-tertiary`}
                        onClick={() => {
                          handleClick('theme-tertiary');
                          boop();
                        }}
                      ></div>
                      <div
                        className={`${
                          (color && colorTheme) === 'theme-transparent'
                            ? 'activeColor'
                            : ''
                        } color theme-transparent`}
                        onClick={() => {
                          handleClick('theme-transparent');
                          boop();
                        }}
                      ></div>
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <button
                aria-label="Toggle Mode"
                type="button"
                className="w-8 h-8 p-1 rounded-md hover:ring-2 hover:ring-gray-300 transition-all"
                onClick={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                  play();
                }}
              >
                {mounted &&
                  (theme === 'light' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-auto"
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
                  ))}
              </button>
            </div>
          </div>
        </nav>

        {/* <div
          className={`otherNav flex flex-col ${
            isOpen ? 'h-56' : 'h-0 border-none'
          }`}
        > */}
        <div
          className={`otherNav flex flex-col ${
            isOpen ? 'h-[169px]' : 'h-0 border-none'
          }`}
        >
          <li
            className={`nav-lists cursor ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link href="/">
              <a
                className={`${
                  router.pathname === '/' ? 'activeNav' : ''
                } navbar-links home flex items-center w-full h-full}`}
              >
                Home
              </a>
            </Link>
          </li>
          <li
            className={`nav-lists cursor ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link href="/blog">
              <a
                className={`${
                  router.pathname === '/blog' ? 'activeNav' : ''
                } navbar-links about flex items-center w-full h-full`}
              >
                Blog
              </a>
            </Link>
          </li>
          <li
            className={`nav-lists cursor ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link href="/guestbook">
              <a
                className={`${
                  router.pathname === '/guestbook' ? 'activeNav' : ''
                } navbar-links home flex items-center w-full h-full}`}
              >
                Guestbook
              </a>
            </Link>
          </li>
          {/* <li
            className={`nav-lists cursor ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link href="/tweets">
              <a
                className={`${
                  router.pathname === '/tweets' ? 'activeNav' : ''
                } navbar-links home flex items-center w-full h-full}`}
              >
                Tweets
              </a>
            </Link>
          </li> */}
        </div>
      </header>
    </>
  );
}
