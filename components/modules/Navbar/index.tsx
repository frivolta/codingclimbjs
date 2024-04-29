import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-500 dark:border-gray-700">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/">
              <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                CodeClimb.js
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div>account</div>
            <div className="ml-2">login</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
