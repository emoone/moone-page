import "../styles/main.css";
import type { AppProps } from "next/app";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Head from "next/head";
// import ModalContainer from "toptoon-modal/dist/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#FF98BA" />
        <meta name="theme-color" content="#FF98BA" />
        <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      {/* <ModalContainer /> */}
    </>
  );
}

export default MyApp;
