import { Roboto } from "next/font/google";
import './globals.css'
import { Inter } from 'next/font/google'
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
import Head from 'next/head';

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Denise Rosado',
  description: 'Denise Rosado Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}
