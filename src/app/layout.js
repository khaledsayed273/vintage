
import './globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Playfair_Display } from 'next/font/google';

import Header from "../components/Header/Header"

const inter = Playfair_Display({
  subsets: ['latin'],
});

export const metadata = {
  title: 'vintage',
  description: 'Vintage description',
  keywords: "Vintage keywords"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}


