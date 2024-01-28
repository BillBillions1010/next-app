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
  title: 'Next-App',
  description: 'Using Create-next-app, a React Framework in JavaScript',
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
