import TwSizeIndicator from "components/TwSizeIndicator";
import style from "config/variables.json";
import { Head, Html, Main, NextScript } from "next/document";
import config from "../config/config.json";

const Document = () => {
  const { favicon } = config.parameter;
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${style.font.font_family.primary}&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <body className="border-y-8 border-primary font-primary">
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
