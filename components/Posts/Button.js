import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className="w-auto h-10 px-1 bg-slate-200 dark:bg-slate-600 rounded-md"
      onClick={e => (e.target.innerText = 'You read this post!')}
    >
      {text}
    </button>
  );
};

export default Button;
