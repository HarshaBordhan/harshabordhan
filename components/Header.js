import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

export default function Header({ color, colorTheme }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const currentColor = localStorage.getItem('theme-color');
    if (currentColor) {
      color(currentColor);
    }
    setMounted(true);
  }, [color]);
  if (!mounted) return null;

  const handleClick = theme => {
    color(theme);
    localStorage.setItem('theme-color', theme);
  };

  return (
    <>
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
          </ul>
        </label>
        <div className="rightside w-1/6 flex justify-between items-center mr-10">
          <span className="colorsbar cursor" onClick={e => setIsShow(!isShow)}>
            {/* <?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
            <svg
              className="fill-black dark:fill-white w-4 h-3 hover:scale-95 transition duration-200 ease-linear"
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
            {isShow ? (
              <span className="colors absolute flex flex-row m-0">
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
          </span>
          <button
            className="w-8 h-8 p-1 rounded-md bg-slate-100 dark:bg-zinc-700 hover:ring-2 hover:ring-gray-300 transition-all"
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
          {/* 
            <label
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
            </label>
          )} */}
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition opacity ease-out duration-500 transform"
        enterFrom="transform opacity-0 scale-y-0"
        enterTo="transform opacity-100 scale-y-100"
        leave="transition opacity ease-in duration-500 transform"
        leaveFrom="transform opacity-100 scale-y-100"
        leaveTo="transform opacity-0 scale-y-0"
        className="otherNav"
      >
        <div className="sm:hidden id=mobile-menu">
          <div
            className="flex flex-col w-full relative px-2 bg-white border-b border-slate-200 dark:bg-black dark:border-zinc-800"
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
            <li className="nav-lists cursor">
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
            </li>
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
