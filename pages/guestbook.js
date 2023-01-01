import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import MsgComp from '../components/MsgComp';
import prisma from '../lib/prisma';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useState } from 'react';
import { format } from 'date-fns';

export default function Guestbook({ fallbackData }) {
  const [colors, setColor] = useState('theme-current');
  const { handleSubmit, register, reset } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async message => {
      await fetch('/api/add-post', {
        method: 'POST',
        body: JSON.stringify(message),
      });
    },
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries({ queryKey: ['messages'] });
      },
    }
  );
  // const session = useSession();
  // console.log(session);
  //
  const { data: session } = useSession();

  return (
    <Layout>
      <Header color={setColor} colorTheme={colors} />
      <main className="px-9 py-7 flex flex-col justify-between gap-4 ">
        <div className="first homeDiv fst">
          <h3 className="text-4xl font-normal mb-10 z-10">
            <span className="highlight" id={`${colors}`}>
              Guestbook
            </span>
          </h3>
          <p className="font-light">
            Here this guestbook is for you to put a message to provide me an
            encouragement that helps me a lot. You can leave comments, feedback,
            your opinions, and provide suggestions.{' '}
          </p>
        </div>
        <div className="second">
          <form
            className="bg-gray-200 dark:bg-gray-900 rounded-lg flex flex-col gap-2 justify-between p-4 mb-5"
            onSubmit={handleSubmit(message => mutation.mutate(message))}
          >
            {session ? (
              <>
                <h3 className="text-2xl font-light text-stone-600 dark:text-stone-300 mb-2">
                  Welcome, {session.user.name}
                </h3>
                <p className="text-lg font-light">Give a Message</p>
                <div className="flex flex-row justify-between gap-1 mb-2">
                  <textarea
                    {...register('message')}
                    required
                    className="w-5/6 h-10 min-h-[2.5rem] p-2 border dark:border-gray-600 rounded-md focus:outline-0 text-base"
                  />
                  <button
                    type="submit"
                    className="w-2/12 h-10 bg-gray-300 dark:bg-gray-700 hover:scale-[1.02] rounded-md"
                  >
                    Add
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-between gap-2">
                <h3 className="text-xl font-normal mb-3">
                  Sign for the guestbook
                </h3>
                <p className="mb-3">
                  Through this sign, you can give comments, informations or
                  compliments in guestbook
                </p>

                <button
                  className="bg-gray-200 dark:bg-gray-500 rounded-md w-16 h-8 hover:scale-[1.02]"
                  onClick={
                    () =>
                      signIn('google', {
                        callbackUrl: '/guestbook',
                      })
                    // signIn({
                    //   callbackUrl: '/guestbook',
                    // })
                  }
                >
                  Sign In
                </button>
              </div>
            )}
          </form>
        </div>

        <MsgComp fallbackData={fallbackData} />
        {/* <div>Thanks for your supportive response.</div> */}
      </main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const messages = await prisma.messages.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      User: true,
    },
    // select: {
    //   id: true,
    //   msg: true,
    //   createdAt: true,
    //   User: {
    //     name: true,
    //     email: true,
    //   },
    // },
  });

  const fallbackData = messages.map(msg => {
    return {
      id: msg.id,
      msg: msg.msg,
      createdAt: format(new Date(msg.createdAt), "d MMM yyyy 'at' h:mm bb"),
      updatedAt: format(new Date(msg.updatedAt), "d MMM yyyy 'at' h:mm bb"),
      User: {
        email: msg.User.email,
        name: msg.User.name,
      },
    };
  });

  return {
    props: {
      // fallbackData: messages,
      fallbackData,
    },
    revalidate: 60,
  };
}
