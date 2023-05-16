"use client";
import React from "react";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head />
      <body className="flex h-full flex-col">
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
  // return (
  //   <html lang="en">
  //     <body>
  //       <Providers>
  //         <Header />
  //         <main>{children}</main>
  //         <Footer />
  //       </Providers>
  //     </body>
  //   </html>
  // );
}
// import React from "react";
// import "./globals.css";
// import Providers from "./Providers";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { usePathname } from "next/navigation";

// const noHeader = ["/login", "/signup"];
// const noFooter = ["/", "/login", "/signup"];

// export default function RootLayout({
//   children,
//   shouldHideHeaderFooter = false,
// }) {
//   const asPath = usePathname();

//   const shouldShowHeader = shouldHideHeaderFooter && noHeader.includes(asPath);
//   const shouldShowFooter = shouldHideHeaderFooter && noFooter.includes(asPath);

//   console.log("shouldHideHeaderFooter", shouldHideHeaderFooter);

//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {shouldShowHeader && <Header />}
//           <main>{children}</main>
//           {shouldShowFooter && <Footer />}
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import "./globals.css";
// import React from "react";
// import Providers from "./Providers";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { usePathname } from "next/navigation";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   const noHeader = ["/login", " /signup"];
//   const noFooter = ["/", "/login", " /signup"];

//   console.log("pathname", pathname);

//   return (
//     <body>
//       <Providers>
//         {noHeader.includes(pathname) ? null : <Header />}
//         {children}
//         {noFooter.includes(pathname) ? null : <Footer />}
//       </Providers>
//     </body>
//   );
