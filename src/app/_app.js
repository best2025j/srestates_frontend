import Footer from "../components/Footer";
import "../styles/globals.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const pathname = usePathname();

  const noHeader = ["/login", "/signup"];
  const noFooter = ["/", "/login", "/signup"];

  const shouldHideHeader = noHeader.includes(pathname);
  const shouldHideFooter = noFooter.includes(pathname);

  return (
    <div>
      {shouldHideHeader ? null : <Header />}
      <Component {...pageProps} />
      {shouldHideFooter ? null : <Footer />}
    </div>
  );
}

export default MyApp;
