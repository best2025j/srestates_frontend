"use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

const noNav = ["/", "/login", "/signup"];
const noFooter = ["/", "/login", "/signup"];

export default function RootLayout({
  children,
  shouldHideHeaderFooter = false,
}) {
  const pathname = usePathname();

  const shouldShowHeader =
    shouldHideHeaderFooter && !noHeader.includes(pathname);
  const shouldShowFooter =
    shouldHideHeaderFooter && !noFooter.includes(pathname);

  console.log("pathname:", pathname);
  console.log("shouldHideHeaderFooter:", shouldHideHeaderFooter);

  return (
    <html lang="en">
      <body>
        <Providers>
          {!shouldShowHeader && <Header />}
          <main>{children}</main>
          {!shouldShowFooter && <Footer />}
        </Providers>
      </body>
    </html>
  );
}

// "use client";
// import "./globals.css";
// import Providers from "./Providers";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useRouter } from "next/navigation";

// const noNav = ["/", "/login", "/signup"];
// const noFooter = ["/", "/login", "/signup"];

// export default function RootLayout({
//   children,
//   shouldHideHeaderFooter = false,
// }) {
//   const router = useRouter();
//   const { asPathName } = router;

//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {shouldHideHeaderFooter || noNav.includes(asPathName) ? null : (
//             <Header />
//           )}
//           <main>{children}</main>
//           {shouldHideHeaderFooter || noFooter.includes(asPathName) ? null : (
//             <Footer />
//           )}
//         </Providers>
//       </body>
//     </html>
//   );
// }
