import { ReactNode } from 'react'
import type { Metadata } from 'next'

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: '',
  description: ''
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
