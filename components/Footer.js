import { socialMedia } from "lib/utils/socialMedia";
import Image from "next/image";
import Link from "next/link";
import config from "../config/config.json";
import menu from "../config/menu.json";
import Devider from "./Devider";

const Footer = () => {
  const { parameter } = config;

  return (
    <footer className="mx-auto max-w-[1460px]">
      <div className="container mx-auto">
        <Devider />
        <div className="py-14 text-center lg:flex lg:items-center lg:justify-between">
          <Link href="/">
            <a className="mb-4 inline-block translate-y-2.5 lg:mb-0">
              <Image
                src={parameter.logo_dark}
                width={215}
                height={50}
                alt="logo"
                layout="fixed"
              ></Image>
            </a>
          </Link>
          <div className="mb-8 hidden lg:mb-0">
            {menu.footer.map((menu) => (
              <Link key={menu.name} href={menu.url} passHref>
                <a className="line-link mx-2 inline-block text-[.9rem] font-medium sm:mx-4 xl:mx-5">
                  {menu.name}
                </a>
              </Link>
            ))}
          </div>
          <ul className="social-icons">
            {socialMedia.map((icon) => (
              <li key={icon.name}>
                <Link href={icon.link}>
                  <a>{icon.icon}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
