"use client";
// Import necessary modules and components
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

// Define the RootLayout component
export default function RootLayout({ children }) {
  // Use the useRouter hook to get the current route
  const router = useRouter();

  // Determine whether to show the header and footer based on the current route
  const showHeaderFooter =
    router.pathname === "/signup" || router.pathname === "/login";

  // Render the layout with Providers, Header, Footer, and children components
  return (
    <html lang="en">
      <body>
        <Providers>
          {!showHeaderFooter && <Header />}
          <main className="grow">{children}</main>
          {!showHeaderFooter && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
