import React from "react";
import "../styles/globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function app({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

// import { useRouter } from "next/router";

// function MyApp({ Component, pageProps }) {
//   // const router = useRouter();
//   // const { asPath } = router;
//   // const noHeader = ["/Signin", "/Signup"];
//   // const noFooter = ["/", "/Signin", "/Signup"];

//   return (
//     // <div>
//     //     {/* no navabar on both signup and signin page... */}
//     //     {noHeader.includes(asPath) ? null : <Header />}
//     //     <Component {...pageProps} />
//     //     {/* no footer on both signin and signup page... */}
//     //     {noFooter.includes(asPath) ? null : <Footer />}
//     // </div>
//   );
// }

// export default MyApp;
