import React from 'react'
import Header from '../components/Header/Header'
import WishlistOverlay from '../components/WishlistOverlay/WishlistOverlay'
import { useMovieContext } from '../contexts/MovieContext'

// 'use client' since hooks are used
'use client'

export default function RootLayout({ children }) {
  const { isWishlistOpen } = useMovieContext()

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {isWishlistOpen && <WishlistOverlay />}
      </body>
    </html>
  )
}
