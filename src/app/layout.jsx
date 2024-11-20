'use client'

import React from 'react'
import Header from '../components/Header/Header'
import WishlistOverlay from '../components/WishlistOverlay/WishlistOverlay'
import { MovieProvider, useMovieContext } from '../contexts/MovieContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mytheresa Frontend Challenge</title>
      </head>
      <body>
        <MovieProvider>
          <LayoutContent>
            <Header />
            {children}
          </LayoutContent>
        </MovieProvider>
      </body>
    </html>
  )
}

// Create a new component to use the context
function LayoutContent({ children }) {
  const { isWishlistOpen } = useMovieContext()
  return (
    <>
      {children}
      {isWishlistOpen && <WishlistOverlay />}
    </>
  )
}
