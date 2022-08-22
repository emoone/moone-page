import "../styles/main.css";
import type { AppProps } from "next/app";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Head from "next/head";
// import ModalContainer from "toptoon-modal/dist/";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     WebFont.load({
  //       google: {
  //         families: ["Noto Sans JP:400, 500, 700", "sans-serif"],
  //       },

  //       custom: {
  //         families: ["Noto Sans JP:400, 500, 700", "sans-serif"],
  //         urls: ["/assets/fonts/notoSansJp/notosans-jp-origin.css"],
  //       },
  //     });
  //   }
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      {/* <ModalContainer /> */}
    </>
  );
}

export default MyApp;
