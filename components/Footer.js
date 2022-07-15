// import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Twitter from '../src/img/twitter-svgrepo-com(1).svg';
import Facebook from '../src/img/facebook-svgrepo-com(1).svg';
import Github from '../src/img/github-svgrepo-com.svg';
import Email from '../src/img/gmail-svgrepo-com.svg';

export default function Footer() {
  return (
    <footer className="footer border-t dark:border-zinc-800">
      <div className="sixth flex flex-col h-32 items-center p-5">
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
          <Link href="mailto: harshabordhanc@gmail.com">
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
  );
}
