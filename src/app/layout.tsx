import { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import Navbar from './_components/Navbar'

export const metadata: Metadata = {
  title: 'AndarBien.com',
  description: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
