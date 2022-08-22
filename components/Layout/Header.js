import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

export default function Header({ color, colorTheme }) {
  const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const currentColor = localStorage.getItem('theme-color');
    if (currentColor) {
      color(currentColor);
    }
    // setMounted(true);
  }, [color]);

  // if (!mounted) return null;

  const handleClick = theme => {
    color(theme);
    localStorage.setItem('theme-color', theme);
  };

  return (
    <>
      <nav className="navbar w-full border-b px-9 py-3.5 dark:border-zinc-800">
        <div className="nav flex justify-between items-center">
          {/* <button
            type="button"
            className="checkbtn relative cursor hidden" 
            // data-toggle="collapse"
            data-target="mobile-menu"
            aria-controls="#mobile-menu"
            aria-expanded="false"
            // aria-label="Toggle navigation"
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
          </button> */}
          <button
            type="button"
            className="checkbtn relative cursor hidden"
            // data-toggle="collapse"
            data-target="mobile-menu"
            aria-controls="#mobile-menu"
            aria-expanded="false"
            // aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`group z-50 relative w-6 h-6 flex flex-col ${
                isOpen ? 'justify-around' : 'justify-evenly'
              } items-center`}
            >
              {/* hamburger button */}
              <span
                className={`h-0.5 w-full bg-black rounded-lg transform transition duration-200 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2 w-5' : ''
                } dark:bg-white`}
              />
              <span
                className={`h-0.5 w-full bg-black rounded-lg duration-200 ease-in-out ${
                  isOpen ? 'w-0' : 'w-full'
                } dark:bg-white`}
              />
              <span
                className={`h-0.5 w-full bg-black rounded-lg transform transition duration-200 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2 w-5' : ''
                } dark:bg-white`}
              />
            </div>
          </button>

          <label className="leftside w-1/3">
            <ul className="navul w-full flex justify-between flex-row">
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

              {/* <li className="nav-items">
              <Link href="/dashboard">
                <a
                  className={`${
                    router.pathname === '/dashboard' ? 'activeNav' : ''
                  } navbar-links cursor`}
                >
                  {' '}
                  Dashboard{' '}
                </a>
              </Link>
            </li> */}
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
            </ul>
          </label>
          <div className="rightside w-1/6 flex justify-between items-center mr-10 md:w-1/5 sm:w-1/4">
            <div className="colorsbar">
              <span
                className="cursor"
                title="Choose Highlight Color"
                onClick={() => {
                  // const target = e.target;
                  // if (target) setIsShow(!isShow);
                  setIsShow(!isShow);
                }}
              >
                {/* <?xml version="1.0" encoding="iso-8859-1"?>
              <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
                <svg
                  className="rotation w-4 h-3 fill-black dark:fill-white"
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
              <div className="colorsdiv h-20 absolute pt-14">
                {isShow ? (
                  <span className="flex flex-row m-0" focusable="false">
                    <div
                      className={`${
                        (color && colorTheme) === 'theme-current'
                          ? 'activeColor'
                          : ''
                      } color bg-current`}
                      onClick={() => handleClick('theme-current')}
                    ></div>
                    <div
                      className={`${
                        (color && colorTheme) === 'theme-primary'
                          ? 'activeColor'
                          : ''
                      } color theme-primary`}
                      onClick={() => handleClick('theme-primary')}
                    ></div>
                    <div
                      className={`${
                        (color && colorTheme) === 'theme-secondary'
                          ? 'activeColor'
                          : ''
                      } color theme-secondary`}
                      onClick={() => handleClick('theme-secondary')}
                    ></div>
                    <div
                      className={`${
                        (color && colorTheme) === 'theme-tertiary'
                          ? 'activeColor'
                          : ''
                      } color theme-tertiary`}
                      onClick={() => handleClick('theme-tertiary')}
                    ></div>
                    <div
                      className={`${
                        (color && colorTheme) === 'theme-transparent'
                          ? 'activeColor'
                          : ''
                      } color theme-transparent`}
                      onClick={() => handleClick('theme-transparent')}
                    ></div>
                  </span>
                ) : (
                  ''
                )}
              </div>
            </div>
            <button
              className="w-8 h-8 p-1 rounded-md hover:ring-2 hover:ring-gray-300 transition-all"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? (
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
              )}
            </button>
            {/* <label
              htmlFor="check"
              className="bg-gray-300 relative w-11 h-7 rounded-full cursor"
            >
              <input
                type="checkbox"
                id="check"
                className="sr-only peer"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
              <span className="w-6 h-6 absolute rounded-full bg-slate-100 left-0.5 top-0.5 peer-checked:left-5 duration-300 ease-in-out"></span>
            </label> */}
          </div>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-400 transform"
        enterFrom="opacity-0 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"

        // enter="transition ease-out duration-100 transform"
        // enterFrom="opacity-0 scale-95"
        // enterTo="opacity-100 scale-100"
        // leave="transition ease-in duration-75 transform"
        // leaveFrom="opacity-100 scale-100"
        // leaveTo="opacity-0 scale-95"
      >
        <div className="lg:hidden id=mobile-menu">
          <div
            // ref={ref}
            className="otherNav collapse border-b-color flex flex-col w-full h-auto bg-white border-b dark:bg-black dark:border-zinc-800"
            ref={navRef}
          >
            <li className="nav-lists cursor">
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
            {/* <li className="nav-lists cursor">
          <Link href="/dashboard">
            <a
              className={`${
                router.pathname === '/dashboard' ? 'activeNav' : ''
              } navbar-links dashboard flex items-center w-full h-full`}
            >
              {' '}
              Dashboard{' '}
            </a>
          </Link>
        </li> */}
            <li className="nav-lists cursor">
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
          </div>
        </div>
      </Transition>
    </>
  );
}