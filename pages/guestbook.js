import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Account from '../components/Account';
import Messages from '../components/Messages';

export default function Guestbook() {
  const [colors, setColor] = useState('theme-current');

  const { data: session } = useSession();

  return (
    <>
      <Layout>
        <Header color={setColor} colorTheme={colors} />
        <main className="guestbook px-9 py-7 flex flex-col justify-between gap-4 min-h-screen">
          <div className="first homeDiv fst">
            <h3 className="text-4xl font-normal mb-2 z-10">
              <span className="highlight" id={`${colors}`}>
                Guestbook
              </span>
            </h3>
          </div>
          {!session ? (
            <div className="second">
              <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <h3 className="text-xl font-normal mb-3">
                  Sign for the guestbook
                </h3>
                <p className="mb-3">
                  Through this sign, you can give comments, informations or
                  compliments in guestbook
                </p>

                <button
                  className="bg-gray-200 dark:bg-gray-500 rounded-md w-16 h-8 hover:scale-[1.02]"
                  onClick={() => signIn('google')}
                  // onClick={() => signIn()}
                >
                  Log in
                </button>
              </div>
            </div>
          ) : (
            // <div className="third">
            //   <h1>Welcome, {session.user.name}</h1>
            //   <div>
            //     <button onClick={() => signOut()}>Sign Out</button>
            //   </div>
            // </div>
            <>
              <Account />
              <Messages session={session} />
            </>
          )}
          <>Thanks for your supportive response.</>
        </main>
        <Footer />
      </Layout>
    </>
  );
}
