import React, { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';

const getLocalItems = () => {
  let list = localStorage.getItem('msglists');
  // console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem('msglists'));
  } else {
    return [];
  }
};
export default function Messages({ session }) {
  const [message, setMessage] = useState(
    //[
    // { id: 1, title: 'Msg1', status: false },
    // { id: 2, title: 'Msg2', status: false },
    // ],
    getLocalItems()
  );

  const [newMsg, setNewMsg] = useState('');
  const [updateMsg, setUpdateMsg] = useState('');

  const addMsg = () => {
    if (newMsg) {
      let num = message.length + 1;
      let newEntry = { id: num, title: newMsg, status: false };
      setMessage([...message, newEntry]);
      setNewMsg('');
    }
  };

  const deleteMsg = id => {
    let msgdelete = message.filter(msg => msg.id !== id);
    setMessage(msgdelete);
  };

  const cancelEdit = () => {
    setUpdateMsg('');
  };

  const changeMsg = e => {
    let newEntry = {
      id: updateMsg.id,
      title: e.target.value,
      status: updateMsg.status ? true : false,
    };
    setUpdateMsg(newEntry);
  };

  const editMsg = () => {
    let filterFirst = [...message].filter(msg => msg.id !== updateMsg.id);
    let update = [...filterFirst, updateMsg];
    setMessage(update);
    setUpdateMsg('');
  };

  useEffect(() => {
    localStorage.setItem('msglists', JSON.stringify(message));
  }, [message]);

  return (
    <>
      <div className="mb-2 flex flex-row justify-between gap-1">
        {updateMsg && updateMsg ? (
          <>
            <textarea
              value={updateMsg && updateMsg.title}
              onChange={e => changeMsg(e)}
              className="inputArea w-5/6 p-1 h-10 border dark:border-gray-600 rounded-md focus:outline-1 outline-gray-400 dark:outline-gray-600 text-lg"
            />
            <button
              onClick={editMsg}
              className="w-2/12 h-10 bg-gray-200 dark:bg-gray-700 hover:scale-[1.02] rounded-md"
            >
              Add
            </button>
            <button
              onClick={cancelEdit}
              className="w-2/12 h-10 bg-gray-200 dark:bg-gray-700 hover:scale-[1.02] rounded-md"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <textarea
              value={newMsg}
              onChange={e => setNewMsg(e.target.value)}
              className="inputArea w-5/6 p-1 h-10 border dark:border-gray-600 rounded-md focus:outline-1 outline-gray-400 dark:outline-gray-600 text-lg"
            />
            <button
              onClick={addMsg}
              className="w-2/12 h-10 bg-gray-200 dark:bg-gray-700 hover:scale-[1.02] rounded-md"
            >
              Add
            </button>
          </>
        )}
      </div>
      <div>
        <button
          onClick={() => signOut()}
          className="w-24 h-10 bg-gray-200 dark:bg-gray-700 hover:scale-[1.02] rounded-md"
        >
          Sign Out
        </button>
      </div>
      {message &&
        message.map((msg, index) => {
          return (
            <React.Fragment key={index}>
              <div className="border dark:border-gray-700 flex flex-col gap-2 p-4 rounded-md">
                <div className="flex flex-row justify-start items-start gap-3">
                  {/* <div className="text-lg font-medium">{index + 1}</div> */}
                  <div className="text-lg font-normal w-full break-words">
                    {msg.title}
                  </div>
                </div>
                {/* <span>{msg.id}</span> */}
                <div className="flex flex-row justify-between sm:flex-col sm:gap-2">
                  <div className="texts flex flex-row justify-start sm:justify-between gap-8">
                    <div className="font-light text-gray-600 dark:text-gray-400">
                      {session.user.name}
                    </div>
                    <div className="font-light text-gray-800 dark:text-gray-500">
                      Date and Time
                    </div>
                  </div>
                  <div className="buttons flex flex-rows justify-end gap-6 sm:justify-start">
                    <button
                      className="text-gray-900 dark:text-gray-300"
                      onClick={() =>
                        setUpdateMsg({
                          id: msg.id,
                          title: msg.title,
                          status: msg.status ? true : false,
                        })
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="text-gray-900 dark:text-gray-300"
                      onClick={() => deleteMsg(msg.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}
