import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800"
      aria-label="sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {/*Main section*/}
        <div>
          <ul className="space-y-4 font-medium mb-4">
            <h4 className="flex w-full text-md mt-4">Core JavaScript</h4>
            <li className="text-sm">
              <Link
                href="/"
                className="flex items-center rounded-lg font-normal dark:text-white hover:underline group"
              >
                <div>Menu item</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
