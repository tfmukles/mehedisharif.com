import Head from "next/head";
import { useState } from "react";
import CallToAction from "./CTA";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, isCta }) => {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header toggle={toggle} isOpen={isOpen} />

      <main className="mx-auto max-w-[1460px]">{children}</main>
      {isCta && <CallToAction />}
      <Footer />
    </>
  );
};

export default Layout;
