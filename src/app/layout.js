// "use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
            <main>
             {children}
             </main>
           <Footer />
        </Providers>
      </body>
    </html>
  );
}
