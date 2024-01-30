import React from 'react'
import LoginForm from './components/LoginForm'
import '@/globals.css'
import type { Metadata } from 'next'
import * as fontsArray from '@/app/ui/fonts'

/*  
  Current Fonts:
    baskerville, lobstertwo, lusitana, inter,
    alphaslabone, smokum, specialelite, sixcaps, graduate  */
 
// Construct Home Page
console.log(fontsArray);
// Meta Data
export const metadata: Metadata = {
  title: 'next-site.app BillBillions1010',
  description: 'Creates affiliate marketing sites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us" className={`${fontsArray.lobstertwo.variable}`}>
      <body className={`light `}>
        {children}
      </body>
    </html>
  );
}
