"use client";
import { useRouter } from "next/router";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  const hideHeaderFooterRoutes = ["/login", "/signup"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);

  return (
    <Providers>
      {!shouldHideHeaderFooter && <Header />}
      <main>{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </Providers>
  );
}

// "use client";
// // Import necessary modules and components
// import "./globals.css";
// import Providers from "./Providers";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useRouter } from "next/navigation";

// // Define the RootLayout component
// export default function RootLayout({ children }) {
//   // Use the useRouter hook to get the current route
//   const router = useRouter();
//   const { asPath } = router;

//   // Determine whether to show the header and footer based on the current route
//   const noNav = ["/login", "/signup"];
//   const noFooter = ["/", "/login", "/signup"];

//   // Render the layout with Providers, Header, Footer, and children components
//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {noNav.includes(asPath) ? null : <Header />}
//           <main>{children}</main>
//           {noFooter.includes(asPath) ? null : <Footer />}
//         </Providers>
//       </body>
//     </html>
//   );
// }
