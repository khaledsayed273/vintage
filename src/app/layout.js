import "./globals.css";
import { Playfair_Display } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Header from "../components/Header/Header"
import Footer from "../components/footer/Footer"

import ProviderContext from "../store/Context";

const inter = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"]
});

export const metadata = {
  title: "vintage",
  description: "Vintage description",
  keywords: "Vintage keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ProviderContext >
          <Header />
          {children}
          <ToastContainer/>
          <Footer />

        </ProviderContext>
      </body>
    </html>
  );
}
