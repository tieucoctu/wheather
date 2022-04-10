import "../styles/globals.scss";
import { useEffect } from "react";
import NProgress from "nprogress";
import Router from "next/router";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => NProgress.start;
    const end = () => NProgress.done;

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
