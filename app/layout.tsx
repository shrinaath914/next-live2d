import './globals.css'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Live2DWidget = dynamic(() => import('next-live2d'), { ssr: false })

export const metadata = {
  title: 'Tran Huu Dang',
  description: 'Personal portfolio of Tran Huu Dang',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Live2DWidget />
      </body>
    </html>
  )
}
