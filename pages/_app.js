import AOS from "aos";
import "aos/dist/aos.css";
import { React, useEffect } from "react";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  //Iniate animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // setTimeout(() => {
  //   AOS.refresh();
  // }, 500);

  return <Component {...pageProps} />;
}
