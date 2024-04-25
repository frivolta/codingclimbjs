export const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <a href="/" className="flex ms-2 md:me-24">
              <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                CodeClimb.js
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div>account</div>
            <div className="flex items-center ms-3">login</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
