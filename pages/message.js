import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn } from 'next-auth/react';

export default function Message() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    message =>
      fetch('/api/add-post', {
        method: 'POST',
        body: JSON.stringify({ message: 'Hello' }),
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
