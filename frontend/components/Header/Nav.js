import React, { useEffect } from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import clsx from "clsx";

const NavItems = [
  {
    key: "dashboard",
    name: "Dashboard",
    link: "/",
    external: false,
  },
  {
    key: "github",
    name: "Github",
    link: "https://github.com/itaikeren/the-company-in",
    external: true,
  },
];

function findNavItemName() {
  for (let i = 0; i < NavItems.length; i++) {
    if (router.pathname === NavItems[i].link) {
      return NavItems[i].name;
    }
  }

  return "Untitled";
}

const Nav = ({ setPageTitle }) => {
  const router = useRouter();

  useEffect(() => {
    setPageTitle(findNavItemName());
  }, [router.pathname]);

  return (
    <div className="flex flex-row items-center space-x-2 text-sm">
      {NavItems.map((item) => (
        <Link key={item.key} href={item.link} passHref={item.external}>
          <span
            className={clsx(
              "cursor-pointer",
              { "bg-gray-900 p-2 px-3 rounded-lg text-white": router.pathname === item.link },
              { "text-gray-300 p-2 px-3 rounded-lg hover:bg-gray-700 hover:text-white": router.pathname !== item.link }
            )}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
