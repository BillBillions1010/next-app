import '@/globals.css'
import type { Metadata } from 'next'
import {inter, lusitana, lobstertwo, baskerville, graduate, sixcaps} from '@/app/ui/fonts'


export const metadata: Metadata = {
  title: 'Bills Next App',
  description: 'Using Create-next-app, a React Framework in JavaScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lobstertwo.className}>{children}</body>
    </html>
  )
}
