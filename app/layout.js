import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Farhan Zakir - Computer Science Graduate",
  description:
    "This is the portfolio of Farhan Zakir. I am a Computer Science graduate with experience in full-stack development, embedded systems, and AI. I enjoy building scalable applications and solving challenging problems.",
  icons: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* override default favicon with an empty data URI to hide the tab icon */}
        <link rel="icon" href="data:," />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
