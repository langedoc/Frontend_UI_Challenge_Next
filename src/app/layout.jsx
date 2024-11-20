'use client'

import React from 'react'
import Header from '../components/Header/Header'
import WishlistOverlay from '../components/WishlistOverlay/WishlistOverlay'
import { MovieProvider, useMovieContext } from '../contexts/MovieContext'
import '../scss/main.scss'

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
            <main className="main-content">
              {children}
            </main>
          </LayoutContent>
        </MovieProvider>
      </body>
    </html>
  )
}

function LayoutContent({ children }) {
  const { isWishlistOpen } = useMovieContext()
  return (
    <div className="layout-wrapper">
      {children}
      {isWishlistOpen && <WishlistOverlay />}
    </div>
  )
}
