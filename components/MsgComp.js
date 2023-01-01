import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
// import { memo } from 'react';

const MsgComp = ({ fallbackData }) => {
  const { data: queryData } = useQuery(['messages'], {
    queryFn: async () => {
      const result = await fetch('/api/message');
      return result.json();
    },
  });

  // const session = useSession();
  const messages = queryData || fallbackData;

  return (
    <>
      {messages.map(msg => (
        <div key={msg.id} className="flex flex-col justify-between gap-2 mb-5">
          <p className="font-normal text-lg w-full break-words">{msg.msg}</p>
          <div className="flex flex-row justify-start align-center gap-8 sm:flex-col sm:justify-betweeen sm:gap-1">
            <p className="font-normal text-base text-gray-800 dark:text-gray-500">
              {msg.createdAt}
            </p>
            <p className="font-normal text-base text-gray-600 dark:text-gray-400">
              {msg.User.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MsgComp;
