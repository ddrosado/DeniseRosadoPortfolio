import { Roboto } from "next/font/google";
import './globals.css'
import { Inter } from 'next/font/google'
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Denise Rosado',
  description: 'Denise Rosado Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
