"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@/store/store';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vintage',
  description: 'Vintage',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <title>Vintage</title>
      </Head>
      <body className={inter.className}>
        <Header />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
