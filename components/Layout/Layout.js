function Layout({ children }) {
  return (
    <div className="wrapper flex w-full justify-center items-center">
      <div className="pageContainer flex flex-col relative text-base font-light md:font-normal text-gray-700 max-w-2xl dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

export default Layout;
