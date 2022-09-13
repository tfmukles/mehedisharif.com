import ThemeSwitcher from "@components/ThemeSwitcher";
import config from "@config/config.json";
import Devider from "@layouts/components/Devider";
import Logo from "@layouts/components/Logo";
import { SocialMedia } from "@layouts/components/SocialMedia";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { theme, resolvedTheme } = useTheme();

  // logo source
  const { logo, logo_darkmode } = config.site;

  return (
    <footer className="mx-auto max-w-[1460px]">
      <div className="container mx-auto">
        <Devider />
        <div className="flex flex-col items-center justify-between py-14 text-center lg:flex-row">
          <span className="order-1 my-6 inline-block translate-y-2.5 lg:order-0 lg:my-0">
            <Logo
              src={
                mounted && (theme === "dark" || resolvedTheme === "dark")
                  ? logo_darkmode
                  : logo
              }
            />
          </span>

          <div className="order-0 lg:order-1">
            <ThemeSwitcher />
          </div>

          <ul className="social-icons order-last mt-4 lg:mt-0">
            {SocialMedia.map((icon) => (
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
