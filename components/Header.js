// import { gsap } from 'gsap';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import config from "../config/config.json";
import menu from "../config/menu.json";

const Header = ({ toggle, isOpen }) => {
  const { logo_dark, logo_light } = config.parameter;
  const { header } = menu;

  useEffect(() => {
    const menuToggler = document.querySelector(".menu-toggler");
    const menuTogglerLight = document.querySelector(".menu-toggler.light");

    menuToggler.addEventListener("click", () => {
      // menuTogglerLight.classList.toggle('active');
    });
    menuTogglerLight.addEventListener("click", () => {
      // menuTogglerLight.classList.remove('active');
    });
  }, []);

  return (
    <>
      <header className={isOpen ? "menu-open relative z-10" : "relative z-10"}>
        <div className="mx-auto max-w-[1460px]">
          <div className="container">
            <nav className="flex items-center justify-between py-4">
              <div className="logo-dark">
                <Link href="/">
                  <a className="inline-block translate-y-2.5">
                    <Image
                      src={logo_dark}
                      width={217}
                      height={50}
                      alt="logo"
                      layout="fixed"
                      priority={true}
                    />
                  </a>
                </Link>
              </div>

              <button type="button" onClick={toggle}>
                <svg className="menu-toggler" viewBox="0 0 100 100" width="60">
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

        <div className="header-alt absolute top-0 w-full bg-black">
          <div className="mx-auto max-w-[1460px]">
            <div className="container">
              <nav className="flex items-center justify-between py-4">
                <div className="logo-light order-0">
                  <Link href="/">
                    <a className="inline-block translate-y-2.5">
                      <Image
                        src={logo_light}
                        width={217}
                        height={50}
                        alt="logo"
                        layout="fixed"
                        priority={true}
                      />
                    </a>
                  </Link>
                </div>

                <div className="menu-container absolute left-0 top-full order-2 ml-auto inline-flex w-full flex-col pb-8 text-center md:order-1 lg:static lg:w-auto lg:flex-row lg:pb-0">
                  {header.map((menu) => (
                    <Link key={menu.name} href={menu.url} passHref>
                      <a className="mx-0 inline-block py-2 text-base text-white lg:mx-6 lg:py-0">
                        {menu.name}
                      </a>
                    </Link>
                  ))}
                </div>

                <button
                  className="order-1 md:order-2"
                  type="button"
                  onClick={toggle}
                >
                  <svg
                    className="menu-toggler active light"
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
    </>
  );
};

export default Header;
