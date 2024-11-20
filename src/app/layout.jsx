'use client'

import React from 'react'
import Header from '../components/Header/Header'
import WishlistOverlay from '../components/WishlistOverlay/WishlistOverlay'
import { useMovieContext } from '../contexts/MovieContext'

export default function RootLayout({ children }) {
  const { isWishlistOpen } = useMovieContext()

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mytheresa Frontend Challenge</title>
      </head>
      <body>
        <MovieProvider>
          <Header />
          {children}
          {isWishlistOpen && <WishlistOverlay />}
        </MovieProvider>
      </body>
    </html>
  )
}
