/*
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn } from 'next-auth/react';

export default function Message() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    message =>
      fetch('/api/add-post', {
        method: 'POST',
        body: JSON.stringify({ message: 'Hi Harsha' }),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('messages');
      },
    }
  );
  const session = useSession();
  console.log(session);

  return (
    <div>
      <button onClick={() => mutation.mutate()}>Add Message</button>
      <button
        onClick={() =>
          signIn('google', {
            callbackUrl: '/message',
          })
        }
      >
        Sign In
      </button>
    </div>
  );
}
*/

/*
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export default function Message() {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async message => {
      await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({ message: 'API endpoint' }),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('messages');
      },
    }
  );

  const onSubmit = handleSubmit(async data => mutation.mutate(data));

  const session = useSession();
  console.log(session);

  return (
    <form onSubmit={onSubmit}>
      input {...register('body')} /> 
      <button type="submit">Add Message</button>
      <button
        onClick={() =>
          signIn('google', {
            callbackUrl: '/message',
          })
        }
      >
        Sign In
      </button>
    </form>
  );
}
*/
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export default function Message() {
  const { handleSubmit, register } = useForm();
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
        queryClient.invalidateQueries('messages', {
          querykey: [],
        });
      },
    }
  );
  const session = useSession();
  console.log(session);

  return (
    <>
      <form onSubmit={handleSubmit(message => mutation.mutate(message))}>
        {session ? (
          <>
            <input {...register('message')} />
            <button type="submit">Add Message</button>
          </>
        ) : (
          <button
            onClick={() =>
              signIn('google', {
                callbackUrl: '/message',
              })
            }
          >
            Sign In
          </button>
        )}
      </form>
    </>
  );
}
