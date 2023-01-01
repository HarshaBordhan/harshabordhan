import React from 'react';
import { useSession, getSession } from 'next-auth/react';

export default function Account() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === 'authenticated' ? (
        <div className="flex flex-col gap-2 justify-between border dark:border-gray-700 rounded-md p-4">
          <h3 className="text-2xl font-light text-stone-600 dark:text-stone-300 mb-2">
            Welcome, {session.user.name}
          </h3>
          <div>
            <p className="text-lg font-light">Give a Message</p>
          </div>
        </div>
      ) : (
        <div>
          <p>You are not signed in</p>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/guestbook',
      },
    };
  }
  return { props: { session } };
}
