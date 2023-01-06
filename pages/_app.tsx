import '../styles/main.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
