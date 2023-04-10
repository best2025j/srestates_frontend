import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function _app({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noHeader = ["/Signin", "/login"];
  const noFooter = ["/", "/Signin", "/login"];

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    router.events.on('routeChangeComplete', () => {
      document.getElementById('__next').scrollIntoView()
    })
  },)

  return (
    <ThemeProvider attribute="class">
      {/* no navabar on both signup and signin page... */}
      {noHeader.includes(asPath) ? null : <Header />}
      <Component {...pageProps} />
      {/* no footer on both signin and signup page... */}
      {noFooter.includes(asPath) ? null : <Footer />}
    </ThemeProvider>
  );
}
