import '@/app/ui/global.css'
import { open_sans } from '@/app/ui/fonts'
import React from "react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>{children}</body>
    </html>
  )
}
