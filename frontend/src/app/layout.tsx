import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eclypse - Demo',
  description: 'Implementation of the Eclypse design',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
