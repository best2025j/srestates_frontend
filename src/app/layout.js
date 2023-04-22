"use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();

  const isAuthPage =
    router.pathname === "/signup" || router.pathname === "/login";

  return (
    <html lang="en">
      <body>
        <Providers>
          {!isAuthPage && <Header />}
          {children}
          {!isAuthPage && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
