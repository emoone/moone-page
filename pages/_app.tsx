import "../styles/main.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV);
  return <Component {...pageProps} />;
}

export default MyApp;
