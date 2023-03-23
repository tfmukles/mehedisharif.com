import config from "@config/config.json";
import menu from "@config/menu.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ toggle, isOpen }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { theme, resolvedTheme } = useTheme();

  // distructuring the main menu from menu object
  const { main } = menu;

  // logo source
  const { logo, logo_darkmode } = config.site;

  return (
    <header className={isOpen ? "menu-open relative z-10" : "relative z-10"}>
      <div className="mx-auto max-w-[1460px]">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            <div className="logo-dark">
              <Link
                href="/"
                className="inline-block w-10/12 translate-y-2.5 sm:w-full"
              >
                <Image
                  src={
                    mounted && (theme === "dark" || resolvedTheme === "dark")
                      ? logo_darkmode
                      : logo
                  }
                  width={217}
                  height={50}
                  alt="logo"
                  priority={true}
                />
              </Link>
            </div>

            <button type="button" onClick={toggle}>
              <svg
                className="menu-toggler dark:invert"
                viewBox="0 0 100 100"
                width="60"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <div className="header-alt absolute top-0 w-full bg-black dark:bg-white">
        <div className="mx-auto max-w-[1460px]">
          <div className="container">
            <nav className="flex items-center justify-between py-4">
              <div className="logo-light order-0">
                <Link
                  href="/"
                  className="inline-block w-10/12 translate-y-2.5 sm:w-full"
                >
                  <Image
                    src={logo_darkmode}
                    width={217}
                    height={50}
                    alt="logo"
                    priority={true}
                    className="dark:invert"
                  />
                </Link>
              </div>

              <div className="menu-container order-2 absolute left-0 top-full ml-auto inline-flex w-full flex-col pb-8 text-center md:order-1 lg:static lg:w-auto lg:flex-row lg:pb-0">
                {main.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.url}
                    passHref
                    className="mx-0 inline-block py-2 text-base text-white dark:text-dark lg:mx-6 lg:py-0"
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>

              <button
                className="order-1 md:order-2"
                type="button"
                onClick={toggle}
              >
                <svg
                  className="menu-toggler active light dark:invert"
                  viewBox="0 0 100 100"
                  width="60"
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                  />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path
                    className="line bottom"
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
