function Layout({ children }) {
  return (
    <div className="wrapper flex w-full justify-center items-center bg-gray-100 dark:bg-zinc-900">
      <div className="pageContainer flex flex-col relative text-base text-gray-700 w-7/12 bg-white dark:text-gray-200 dark:bg-black">
        {children}
      </div>
    </div>
  );
}

export default Layout;
