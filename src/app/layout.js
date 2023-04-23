"use client";
import { useRouter } from "next/navigation";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const router = useRouter();

  const isAuthPage =
    router.pathname === "/signup" || router.pathname === "/login";

  return (
    <html lang="en">
      <body>
        <Providers>
          {!isAuthPage && <Header />}
          <main className="grow"> {children}</main>
          {!isAuthPage && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
