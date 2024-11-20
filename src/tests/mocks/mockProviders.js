import React from 'react';
import { MovieContext } from '../../contexts/MovieContext';

export const mockSetListType = jest.fn();

export const CustomMovieProvider = ({ children, wishlist = [] }) => {
    return (
        <MovieContext.Provider 
            value={{
                popularMovies: [],
                topRatedMovies: [],
                upcomingMovies: [],
                isWishlistOpen: false,
                setIsWishlistOpen: jest.fn(),
                wishlist: wishlist,
                setWishlist: jest.fn(),
                listType: 'popular',
                setListType: mockSetListType
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};