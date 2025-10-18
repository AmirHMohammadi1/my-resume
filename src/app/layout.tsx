import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Amir Hosein Mohammadi - Full Stack Developer',
  description: 'Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}