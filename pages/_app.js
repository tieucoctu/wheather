import "../styles/globals.scss";
import { useEffect } from "react";
import nprogress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => nprogress.start;
    const end = () => nprogress.done;

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
