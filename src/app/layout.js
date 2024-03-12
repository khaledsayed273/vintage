import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Playfair_Display } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header") , {
  ssr: true,
})
import ProviderContext from "../store/Context";

const inter = Playfair_Display({
  subsets: ["latin"],
});

export const metadata = {
  title: "vintage",
  description: "Vintage description",
  keywords: "Vintage keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderContext >
          <Header />
          {children}
          <ToastContainer/>
        </ProviderContext>
      </body>
    </html>
  );
}
