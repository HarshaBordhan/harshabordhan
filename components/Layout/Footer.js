// import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Twitter from '../../src/img/twitter-svgrepo-com(1).svg';
// import Facebook from '../../src/img/facebook-svgrepo-com(1).svg';
import Linkedin from '../../src/img/linkedin-svgrepo-com.svg';
import Github from '../../src/img/github-svgrepo-com.svg';
import Email from '../../src/img/gmail-svgrepo-com.svg';
import Checked from '../../src/img/checked.png';

export default function Footer() {
  return (
    <>
      {/*
    <footer className="footer flex flex-col px-9 py-3.5 border-t dark:border-zinc-800"></footer> */}

      <footer className="footer flex flex-col px-9 py-6">
        <div className="footer-content h-auto flex justify-between">
          <div className="first-content flex w-1/2 flex-col gap-4">
            <h3 className="mb-8 text-2xl font-normal">Contact</h3>
            {/* <p className="mb-4">You can catch up with me and find me on__</p> */}
            <p className="">Feel free to knock me anytime.</p>
            <div className="contacts mb-4 w-40 flex flex-row justify-between">
              <Link href="https://twitter.com/ChakmaHarsha">
                <a target="_blank" title="Twitter">
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
              {/* <Link href="https://web.facebook.com/people/Harsha-Bordhan-Changma/100008888252198/">
              <a target="_blank" title="Facebook">
                <Image
                  className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                  src={Facebook}
                  alt="Contact Logo"
                  width={24}
                  height={24}
                />
              </a>
            </Link> */}
              <Link href="https://linkedin.com/in/harsha-bordhan-chakma-98105824b/">
                <a target="_blank" title="Linkedin">
                  <Image
                    className="cursor dark:invert sepia saturate-0 hue-rotate-60
                    brightness-100 contrast-100;"
                    src={Linkedin}
                    alt="Contact Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="https://github.com/HarshaBordhan">
                <a target="_blank" title="Github">
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
              <Link href="mailto: harshabordhanc@gmail.com">
                <a target="_blank" title="Mail">
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
            {/* <p className="">Feel free to knock me anytime.</p> */}
          </div>

          <div className="second-content flex w-1/2 justify-end items-start">
            <span className="w-4 h-4 mt-2 mr-2 flex items-center">
              <Image src={Checked} alt="Check" width={22} height={22} />
            </span>{' '}
            <div className="flex justify-between items-center mt-1">
              <p>No Error</p>
              <span className="mx-1.5">-</span>
              <p className="text-color">Checked</p>
            </div>
          </div>
        </div>

        <div className="footer-last-content flex mt-10 justify-between items-center text-sm">
          <p className="text-center text-color">
            Built with inspiration - &copy; 2023
          </p>
          <p className="text-center text-color">@harshabordhan</p>
        </div>
      </footer>
    </>
  );
}
