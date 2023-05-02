"use client";
import "./globals.css";
import React from "react";
import Providers from "./Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const noHeader = ["/login, /signup"];
  const noFooter = ["/, /login, /signup"];

  const shouldHideHeader = noHeader.includes(pathname);
  const shouldHideFooter = noFooter.includes(pathname);

  console.log(shouldHideFooter, shouldHideHeader);

  return (
    <body>
      <Providers>
        {shouldHideHeader ? null : <Header />}
        {children}
        {shouldHideFooter ? null : <Footer />}
      </Providers>
    </body>
  );
}

// import React from "react";
// import "./globals.css";
// import Providers from "./Providers";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { usePathname } from "next/navigation";

// const noHeader = ["/", "/login", "/signup"];
// const noFooter = ["/", "/login", "/signup"];

// export default function RootLayout({
//   children,
//   shouldHideHeaderFooter = false,
// }) {
//   const pathname = usePathname();

//   const shouldShowHeader =
//     shouldHideHeaderFooter && !noHeader.includes(pathname);
//   const shouldShowFooter =
//     shouldHideHeaderFooter && !noFooter.includes(pathname);

//   console.log("pathname:", pathname);
//   console.log("shouldHideHeaderFooter:", shouldHideHeaderFooter);

//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {!shouldShowHeader && <Header />}
//           <main>{children}</main>
//           {!shouldShowFooter && <Footer />}
//         </Providers>
//       </body>
//     </html>
//   );
// }
