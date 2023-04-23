"use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

const noNav = ["/login", "/signup"];
const noFooter = ["/", "/login", "/signup"];

export default function RootLayout({
  children,
  shouldHideHeaderFooter = false,
}) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <html lang="en">
      <body>
        <Providers>
          {shouldHideHeaderFooter || noNav.includes(asPath) ? null : <Header />}
          <main>{children}</main>
          {shouldHideHeaderFooter || noFooter.includes(asPath) ? null : (
            <Footer />
          )}
        </Providers>
      </body>
    </html>
  );
}
