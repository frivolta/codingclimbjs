import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {/*Main Section*/}
        <div>
          <ul className="space-y-4 font-medium mt-4">
            <h4 className="flex w-full text-md font-medium mb-4">
              Section title
              {/*Li section*/}
            </h4>
            <li className="text-sm">
              <Link
                href="/"
                className="flex items-center runded-lg font-normal dark:text-white hover:underline group"
              >
                <div className="flex justify-between w-full items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span>Menu item</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
